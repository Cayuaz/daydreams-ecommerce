import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-(--primary-color) text-white py-6 flex flex-col gap-4">
      <div className="px-8 flex flex-col gap-6">
        <div className="flex gap-2 border-2 border-white rounded-sm mx-auto items-center justify-between sm:w-3/6 px-4 py-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Newsletter"
            className="w-full outline-none"
          />
          <ArrowRight />
        </div>
        <div className="flex items-center justify-center gap-4">
          <img src="/youtube.svg" alt="Logo do Youtube" />
          <img src="/instagram.svg" alt="Logo do Instagram" />
          <img src="/tiktok.svg" alt="Logo do TikTok" />
        </div>
      </div>
      <hr className="w-full" />
      <p className="px-8 mt-2 text-sm/6 lg:text-base">
        Copyright © 2025 Daydreams. Todos os direitos reservados. Desenvolvido
        por Cayuã.
      </p>
    </footer>
  );
};
