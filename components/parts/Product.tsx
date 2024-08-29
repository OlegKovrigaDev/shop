import { useProduct } from "@/hooks/useProductById";
import Image from "next/image";

interface ProductPageProps {
  productId: number;
}

export const ProductPage = ({ productId }: ProductPageProps) => {
  const { product, loading, error } = useProduct(productId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.params.FashionName}</h1>
      <Image
        src={product.imageUrl}
        alt={product.params.FashionName}
        width={500}
        height={500}
        className="mb-4"
      />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-red-500">
        {product.params.RetailPrice} грн.
      </p>
    </div>
  );
};
