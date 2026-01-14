import { Truck, CreditCard, Banknote } from "lucide-react";

const Payments = () => {
  return (
    <div className="grid gap-6 grid-rows-2 grid-cols-2 sm:grid-cols-3 sm:grid-rows-1 sm:gap-1 items-center justify-center px-8 mb-20 mx-auto w-4/5">
      <div className="flex flex-col items-center col-span-2 sm:col-span-1 gap-2">
        <Truck className="size-15" />
        <span className="font-semibold">Frete grátis</span>
        <p className="text-sm">
          Em compras acima de R$299,99 para todas as regiões
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CreditCard className="size-15" />
        <span className="font-semibold">Pague com cartão</span>
        <p className="text-sm">Até 6x sem juros</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Banknote className="size-15" />
        <span className="font-semibold">Pague com pix</span>
        <p className="text-sm">5% OFF</p>
      </div>
    </div>
  );
};

export default Payments;
