import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/coffee")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto px-10">
      <h2 className="text-center font-extrabold text-5xl mb-8">
        Our Popular Products
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
