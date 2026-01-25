import z from "zod";

const userSchema = z.object({
  name: z.string().min(3).max(60),
  lastname: z.string().min(3).max(100),
  email: z.email(),
  password: z.string().min(5).max(200),
});

const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});

//Transforma palavras no plural em singular
const toSingular = (text: string) => {
  const word = text.toLowerCase().trim();

  //Verifica se a palavra é uma daquelas em que o plural e o singular são iguais
  const exceptions = ["tênis", "lápis", "óculos", "short", "jorts", "shorts"];
  if (exceptions.includes(word)) return word;

  return word
    .replace(/oes$/g, "ao")
    .replace(/([aeo])is$/g, "$1l")
    .replace(/res$/g, "r")
    .replace(/([^is])s$/g, "$1");
};

//Schema que transforma uma string com acentos em uma string sem acentos
const removeAccentsSchema = z.string().transform((text) => {
  const word = text.toLowerCase().trim();

  //Verifica se é uma palavra que não precisa ter o acento removido: no db boné tem acento
  const exceptions = ["tênis", "lápis", "óculos", "boné"];
  if (exceptions.includes(word)) return word;

  /* O normalize separa as letras do acentos e o replace com o regex remove todos esses acentos */
  return word

    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
});

/*Shcema de normalização de palavras que utiliza a função toSingular e o schema removeAccents 
para transformar a palavra em singular e remover os acentos dela
*/
const normalizeSchema = z.string().transform((text) => {
  const singularText = toSingular(text);
  const normalizeText = removeAccentsSchema.parse(singularText);
  return normalizeText;
});

type UserLoginSchema = z.infer<typeof userLoginSchema>;

export { userSchema, userLoginSchema, normalizeSchema, type UserLoginSchema };
