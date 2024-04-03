import { Product } from "@/model";
import Image from "next/image";
import Tag from "../Tag";

type Props = {
  product: Product;
};

const Card = ({ product }: Props) => {
  return (
    <div className="bg-zinc-100 flex flex-col items-center gap-4 shadow-lg rounded-2xl p-4 mx-4 md:mx-0">
      <Image
        src={product.image_url[0]}
        alt="Foto da Roupa"
        height={300}
        items-center
        width={300}
        className="rounded-md shadow-lg"
      />
      <h2 className="text-md text-center text-zinc-900 font-bold">
        {product.name}
      </h2>
      <p className="text-md text-zinc-900">Tamanhos disponíveis:</p>
      <div className="flex gap-2">
        {product.size.map((size) => (
          <Tag key={size}>{size}</Tag>
        ))}
      </div>
      <p className="text-md text-zinc-900">Cores disponíveis: </p>
      <div className="grid grid-cols-2 gap-2">
        {product.color.map((color) => (
          <Tag key={color}>{color}</Tag>
        ))}
      </div>
      <span className="text-md font-bold text-zinc-900">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </span>
      <a
        href={`/products/${product.id}`}
        className="bg-purple-800 rounded-full text-zinc-100 px-4 py-1 text-md"
      >
        Visualizar Produto
      </a>
    </div>
  );
};

export default Card;
