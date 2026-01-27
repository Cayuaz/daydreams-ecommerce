import { Skeleton } from "../ui/skeleton";

const SkeletonBase = () => {
  return (
    //Skeletons que formam um skeleton de card de produto
    <div className="flex flex-col space-y-3 items-center justify-center">
      <Skeleton className="w-40 h-40 rounded-xl bg-[#545457]" />
      <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
      <Skeleton className="w-40 h-4 rounded-xl bg-[#545457]" />
    </div>
  );
};

export default SkeletonBase;
