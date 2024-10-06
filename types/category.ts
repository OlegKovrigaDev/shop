import { ProductParams } from "./reduxTypes";

export type ProductListProps = {
  items: {
    offerId: string;
    params: ProductParams;
  }[];
  categoryId: string;
};
