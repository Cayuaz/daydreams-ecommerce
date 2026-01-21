import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-(--primary-color) text-white py-6 flex flex-col gap-6">
      <div className="px-8 flex flex-col lg:grid lg:grid-cols-3 justify-center gap-6">
        <div className="flex gap-4 border-2 border-white rounded-sm mx-auto items-center justify-between px-3 py-2 w-4/6 sm:w-3/6 lg:w-5/6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Newsletter"
            className="w-full outline-none text-sm lg:text-base"
          />
          <ArrowRight />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-base">Contato</span>
          <span className="text-sm">
            contact@daydreams.com.br | 09:00 - 17:00
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <img src="/youtube.svg" alt="Logo do Youtube" className="size-7 " />
          <img
            src="/instagram.svg"
            alt="Logo do Instagram"
            className="size-6 "
          />
          <img src="/tiktok.svg" alt="Logo do TikTok" className="size-6 " />
        </div>
      </div>
      <hr className="w-full" />
      <p className="px-8 mt-2 text-sm/6">Copyright © 2025 Daydreams</p>
    </footer>
  );
};
