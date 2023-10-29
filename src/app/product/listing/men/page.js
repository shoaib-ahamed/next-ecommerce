import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/controller/product";

export default async function MenAllProducts() {
  const getAllProducts = await productByCategory("men");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
