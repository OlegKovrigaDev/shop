import Link from "next/link";
import { ProductCard } from "@/components/parts/ProductCard";
import { ProductListProps } from "@/types/category";

export const ProductList = ({ items, categoryId }: ProductListProps) => {
  return (
    <div className="flex flex-1 gap-y-8 justify-between flex-wrap max-w-[904px]">
      {items.map(({ offerId, params: ProductParams }) => (
        <Link
          key={offerId}
          href={`/product/${offerId}?categoryId=${categoryId}`}
          passHref
        >
          <ProductCard
            img="/slide1-min.jpg"
            title={ProductParams.ModelName}
            oldPrice={ProductParams.RetailPriceWithDiscount}
            newPrice={ProductParams.RetailPrice}
            Articul={ProductParams.Articul}
            offerId={offerId}
          />
        </Link>
      ))}
    </div>
  );
};
