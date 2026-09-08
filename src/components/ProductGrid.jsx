import { ProductCard } from "./ProductCard";
import productData from "../data/products.json";
export const ProductGrid = () => {
  return productData.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
};
