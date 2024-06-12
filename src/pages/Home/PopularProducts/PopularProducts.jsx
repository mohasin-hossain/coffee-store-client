import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProductCard from "../ProductCard/ProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://coffee-store-server-elksww2x2-md-mohasin-hossains-projects.vercel.app/coffee")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-elksww2x2-md-mohasin-hossains-projects.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {

              const remaining = products.filter(
                (product) => product._id !== id
              );
              setProducts(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-10">
      <h2 className="text-center font-extrabold text-5xl mb-8">
        Our Popular Products
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleDelete={handleDelete}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
