import { Product } from "@/model";

export class ProductService {
  async getProducts({
    search,
    color,
    size,
  }: {
    search: string | undefined;
    color: string | undefined;
    size: string | undefined;
  }): Promise<Product[]> {
    let url = `${process.env.CATALOG_API_URL}/products`;

    const response = await fetch(url, {
      next: {
        revalidate: 1,
      },
    });

    let data = await response.json();

    data = !data ? [] : data;

    if (search) {
      return data.filter((product: Product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (color) {
      return data.filter((product: Product) => {
        return product.color.includes(color);
      });
    }

    if (size) {
      return data.filter((product: Product) => {
        return product.size.includes(size);
      });
    }

    return data;
  }

  async getProductsById(productId: string): Promise<Product> {
    const response = await fetch(
      `${process.env.CATALOG_API_URL}/products/${productId}`,
      {
        next: {
          revalidate: 1,
        },
      }
    );

    let data = await response.json();
    data = !data ? [] : data;
    return data;
  }
}
