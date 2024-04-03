import Card from "@/components/Card";
import { ProductService } from "@/services/product.service";

async function Products({
  searchParams,
}: {
  searchParams: { search?: string; color?: string; size?: string };
}) {
  const products = await new ProductService().getProducts({
    search: searchParams.search,
    color: searchParams.color,
    size: searchParams.size,
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
