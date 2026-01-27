import { Skeleton } from "../ui/skeleton";

const SkeletonProduct = () => {
  return (
    //Skeleton para a rota /products/:id
    <div className="flex flex-col justify-center lg:grid lg:grid-cols-[1fr_1fr] w-full   mx-auto mt-15 mb-40 px-8 gap-10 sm:w-4/5">
      <div>
        <Skeleton className="w-full h-100 rounded-xl bg-[#545457]" />
      </div>
      <div className="flex flex-col justify-between gap-6 w-full">
        <Skeleton className="w-3/4 h-8 rounded-xl bg-[#545457]" />
        <Skeleton className="w-1/4 h-6 rounded-xl bg-[#545457]" />
        <Skeleton className="w-full h-16 rounded-xl bg-[#545457]" />
      </div>
    </div>
  );
};

export default SkeletonProduct;
