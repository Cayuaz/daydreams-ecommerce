export const Component = () => {
  return (
    <div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-25 items-center my-12 px-8 w-4/5 mx-auto">
        <h2 className="font-bold text-xl lg:text-5xl order-1 lg:order-2">
          DREAMT. CRAFTED. DISTORTED. WORN.
        </h2>
        <img
          src="/about-image2.png"
          alt="Mulher em P&B"
          className="rounded-md order-2 lg:order-1"
        />
        <h2 className="font-bold text-xl lg:text-5xl order-3">
          MADE FROM CHAOS. BUILT FOR DREAMS.
        </h2>
        <img
          src="/about-image1.png"
          alt="Homem com Jaqueta"
          className="rounded-md order-4"
        />
      </div>
      <div className="flex flex-col gap-4 my-40">
        <p className="text-sm sm:text-lg sm:w-4/5 sm:mx-auto sm:text-center text-justify px-8">
          Somos uma marca independente movida pela estética do passado e a
          atitude do presente. Com referências que vão do rock alternativo ao
          design gráfico experimental, a Daydreams cria peças para quem busca
          expressão acima de tendência.
        </p>
        <img src="/banner-about.png" alt="" />
        <p className="text-sm sm:text-lg sm:w-4/5 sm:mx-auto sm:text-center text-justify px-8">
          Produção local, tiragem limitada e acabamentos artesanais. Nossas
          peças passam por lavagens exclusivas e tintas especiais para entregar
          aquele visual 'worn-out' autêntico desde o primeiro uso.
        </p>
      </div>
    </div>
  );
};
