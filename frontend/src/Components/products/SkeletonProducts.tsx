import { Skeleton } from "../ui/skeleton";

const SkeletonProducts = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center mt-10 mb-20 w-4/5 mx-auto">
      <div className="flex flex-col space-y-3 items-center justify-center">
        <Skeleton className="w-40 h-40 rounded-xl bg-[#545457]" />
        <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
        <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
      </div>
      <div className="flex flex-col space-y-3 items-center justify-center">
        <Skeleton className="w-40 h-40 rounded-xl bg-[#545457]" />
        <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
        <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
      </div>
      <div className="flex flex-col space-y-3 items-center justify-center">
        <Skeleton className="w-40 h-40 rounded-xl bg-[#545457]" />
        <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
        <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
      </div>
      <div className="flex flex-col space-y-3 items-center justify-center">
        <Skeleton className="w-40 h-40 rounded-xl bg-[#545457]" />
        <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
        <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
      </div>
    </div>
  );
};

export { SkeletonProducts };
