import { ProductCard } from "./ProductCard";
import productData from "../data/products.json";
export const ProductGrid = ({ selectedCategory, selectedSize }) => {
  const filteredProducts = productData.filter((product) => {
    return (
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedSize === "" || product.size === selectedSize)
    );
  });

  
  return (
    <div className="flex-1 bg-white border rounded-lg p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
