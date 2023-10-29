import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/controller/product";

export default async function WomenAllProducts() {
  const getAllProducts = await productByCategory("women");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
