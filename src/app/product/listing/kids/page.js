import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/controller/product";

export default async function KidsAllProducts() {
  const getAllProducts = await productByCategory("kids");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
