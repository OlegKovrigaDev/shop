import { fetchCategoryId, fetchCategoryItems } from "@/api/index";
import { CategoryPageProps, TItems } from "@/types";
import { ProductCard } from "@/components/parts/ProductCard";
import { CrumbsLink } from "@/components/parts/CrumbsLink";

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { id } = params;
  let items: TItems[] = [];

  let categories = await fetchCategoryId(id);
  items = await fetchCategoryItems(id);

  return (
    <div className="container">
      <CrumbsLink categories={categories} items={items} />
      <div className="flex flex-1 flex-wrap gap-3 md:basis-1/2 lg:basis-1/3">
        {items.map(
          ({
            offerId,
            params: { GoodName, RetailPrice, RetailPriceWithDiscount },
          }) => (
            <ProductCard
              key={offerId}
              title={GoodName}
              oldPrice={RetailPriceWithDiscount}
              newPrice={RetailPrice}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
