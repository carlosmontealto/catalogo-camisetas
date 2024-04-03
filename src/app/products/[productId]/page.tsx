import { ProductService } from "@/services/product.service";
import { ShoppingBag } from "lucide-react";
import CarouselProduct from "./CarouselProduct";
import TagList from "./TagList";

async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await new ProductService().getProductsById(params.productId);
  return (
    <>
      <div>
        <div className="bg-zinc-100 mx-4 md:mx-0 block md:flex items-center justify-center gap-20 shadow-lg rounded-2xl p-8">
          <CarouselProduct image_url={product.image_url} />
          <div className="flex flex-col gap-4 md:mt-0 mt-8">
            <h2 className="text-lg text-zinc-900 font-bold">{product.name}</h2>
            <p className="text-md text-zinc-900 font-bold">Tamanhos:</p>
            <TagList list={product.size} />
            <p className="text-md text-zinc-900 font-bold">
              Cores disponiveis:
            </p>
            <TagList list={product.color} />
            <span className="text-lg font-bold text-zinc-900">
              Valor:{" "}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
            <button className="bg-purple-800 rounded-full text-zinc-100 px-4 py-1 text-md flex gap-2 items-center">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-semibold">Adicionar ao carrinho</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mx-0 mx-4">
        <h2 className="font-bold mb-2">Descrição do produto:</h2>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default ProductDetailPage;
