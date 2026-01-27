import SkeletonBase from "./SkeletonBase";

const SkeletonProducts = () => {
  return (
    //Skeleton para 4 cards de produtos
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center mt-10 mb-20 w-4/5 mx-auto">
      <SkeletonBase />
      <SkeletonBase />
      <SkeletonBase />
      <SkeletonBase />
    </div>
  );
};

export { SkeletonProducts };
