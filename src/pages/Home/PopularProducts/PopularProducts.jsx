import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProductCard from "../ProductCard/ProductCard";
import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";
import productListBgLeft from "../../../assets/more/4.png";
import productListBgRight from "../../../assets/more/5.png";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/coffee")
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
        fetch(`http://localhost:3000/coffee/${id}`, {
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
    <div className="px-10 mt-20 relative">
      <div className="container mx-auto">
        <p className="font-rancho text-center text-xl">-- Sip & Savor --</p>
        <h2
          style={{ textShadow: "0px 1px 8px #818181" }}
          className="text-center font-rancho text-secondary font-extrabold text-5xl mb-8"
        >
          Our Popular Products
        </h2>
        <div className="flex justify-center">
          <Link to="/addCoffee">
            <button
              style={{ textShadow: "0px 3px 8px #818181" }}
              className="btn btn-outline content-center rounded-none bg-primary text-white font-rancho text-xl border-black border-2"
            >
              Add Coffee
              <BsCup />
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10 relative">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            ></ProductCard>
          ))}
        </div>
      </div>
      <img className="absolute left-0 top-0" src={productListBgLeft} alt="" />
      <img className="absolute right-0 bottom-0" src={productListBgRight} alt="" />
    </div>
  );
};

export default PopularProducts;
