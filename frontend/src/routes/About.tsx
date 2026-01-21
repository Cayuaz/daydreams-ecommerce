export const Component = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 sm:gap-15 lg:gap-25 items-center my-12 px-8 w-4/5 mx-auto">
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl order-1 sm:order-2 uppercase">
          Made from chaos and built for dreams.
        </h2>
        <img
          src="/about-image2.png"
          alt="Mulher em P&B"
          className="order-2 sm:order-1 shadow"
        />
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl order-3 uppercase">
          Crafted from dreams and evolved by you.
        </h2>
        <img
          src="/about-image1.png"
          alt="Homem com Jaqueta"
          className="order-4 shadow"
        />
      </div>
      <div className="flex flex-col gap-4 my-40">
        <p className="text-sm sm:text-base sm:w-4/5 sm:mx-auto sm:text-center text-justify px-8">
          Somos uma marca independente movida pela estética do passado e a
          atitude do presente. Com referências que vão do rock alternativo ao
          design gráfico experimental, a Daydreams cria peças para quem busca
          expressão acima de tendência.
        </p>
        <img src="/banner-about.png" alt="" />
        <p className="text-sm sm:text-base sm:w-4/5 sm:mx-auto sm:text-center text-justify px-8">
          Produção local, tiragem limitada e acabamentos artesanais. Nossas
          peças passam por lavagens exclusivas e tintas especiais para entregar
          aquele aspecto vivido e autêntico desde o primeiro uso.
        </p>
      </div>
    </div>
  );
};
