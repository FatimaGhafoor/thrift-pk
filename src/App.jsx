import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { FilterSidebar } from "./components/FilterSidebar";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 flex gap-8">
        <FilterSidebar
          setSelectedCategory={setSelectedCategory}
          setSelectedSize={setSelectedSize}
          setSelectedCondition={setSelectedCondition}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
        <ProductGrid
          selectedCategory={selectedCategory}
          selectedSize={selectedSize}
          selectedCondition={selectedCondition}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </div>
    </>
  );
};

export default App;
