import CommonDetails from "@/components/CommonDetails";
import { productById } from "@/controller/product";

export default async function ProductDetails({ params }) {
  const productDetailsData = await productById(params.details);

  console.log(productDetailsData, "sangam");

  return <CommonDetails item={productDetailsData && productDetailsData.data} />;
}
