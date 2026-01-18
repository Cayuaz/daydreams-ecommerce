import Button from "@/Components/Button";
import Size from "@/Components/products/Size";
import { axiosInstance } from "@/lib/axios";
import { formPrice } from "@/lib/utils";
import { productSchema, type ProductSchema } from "@/validations/schemas";
import { Suspense } from "react";
import {
  Await,
  redirect,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router-dom";

export const loader = ({ request, params }: LoaderFunctionArgs) => {
  const { id } = params;

  const productPromise = axiosInstance
    .get(`/products/${id}`, { signal: request.signal })
    .then((res) => {
      const { success, data } = productSchema.safeParse(res);

      if (!success) {
        return redirect("/");
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
      return redirect("/");
    });

  return productPromise;
};

export const Component = () => {
  const product = useLoaderData() as Promise<ProductSchema>;

  return (
    <div>
      <Suspense fallback={<p>Carregando...</p>}>
        <Await resolve={product}>
          {(resolvedProduct) => (
            <>
              <div className="flex flex-col mt-10 mb-20 px-8 gap-10">
                <div className="bg-[#6A6868] flex justify-center rounded">
                  <img
                    src={resolvedProduct.imageUrl}
                    alt={`Produto - ${resolvedProduct.name}`}
                    className="w-5/6 hover:scale-105 transition-transform"
                  />
                </div>

                <div className="text-left">
                  <h1>{resolvedProduct.name}</h1>
                  <span className="text-base font-bold">
                    {formPrice(resolvedProduct.price)}
                  </span>
                </div>
                <p className="text-justify">{resolvedProduct.description}</p>
                <Size />
                <Button className="w-full">COMPRAR</Button>
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
