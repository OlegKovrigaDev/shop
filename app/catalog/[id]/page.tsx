import { fetchCategoryId, fetchCategoryItems } from "@/api/index";
import { CategoryPageProps, TItems } from "@/types";
import { ProductCard } from "@/components/parts/ProductCard";

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { id } = params;
  let items: TItems[] = [];

  let categories = await fetchCategoryId(id);
  items = await fetchCategoryItems(id);

  return (
    <div className="container">
      <p className="text-2xl font-bold mb-4">{categories.category.name}</p>
      <div className="flex flex-1 flex-wrap gap-3 md:basis-1/2 lg:basis-1/3">
        {items.map((item) => (
          <ProductCard
            key={item.offerId}
            title={item.params.GoodName}
            oldPrice={item.params.RetailPriceWithDiscount}
            newPrice={item.params.RetailPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
