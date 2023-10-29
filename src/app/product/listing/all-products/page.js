import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/controller/product";

export default async function AllProducts() {
  const getAllProducts = await getAllAdminProducts();

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
