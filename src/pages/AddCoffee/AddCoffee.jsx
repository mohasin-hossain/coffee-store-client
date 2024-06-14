import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();

  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // Send data to the server
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-form-img mt-10 mb-20">
   <div className="container mx-auto px-10">
   <button
        style={{ textShadow: "0px 1px 8px #818181" }}
        className="mt-20 mb-8 font-rancho text-3xl flex items-center gap-3"
        onClick={handleGoBack}
      >
        <IoMdArrowRoundBack />
        Back to Home
      </button>

      <form
        onSubmit={handleAddCoffee}
        className="card-body bg-quaternary mt-8 md:px-28 md:py-16"
      >
        <h1
          style={{ textShadow: "0px 1px 8px #818181" }}
          className="text-4xl font-extrabold text-center font-rancho my-6"
        >
          Add a Coffee
        </h1>
        {/* Name and Chef Row */}
        <div className="md:flex gap-8 w-full">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Coffee Name"
              className="input text-gray-500 border-4"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input text-gray-500"
              required
            />
          </div>
        </div>
        {/* Supplier and Taste Row */}
        <div className="md:flex gap-8 w-full">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter Supplier Name"
              className="input text-gray-500"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input text-gray-500"
              required
            />
          </div>
        </div>
        {/* Category and details Row */}
        <div className="md:flex gap-8 w-full">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input text-gray-500"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Add Details"
              className="input text-gray-500"
              required
            />
          </div>
        </div>
        {/* Photo URL */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter Photo URL"
            className="input text-gray-500"
            required
          />
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-outline rounded-none bg-primary border-black border-2 font-rancho text-xl mt-10"
        />
      </form>
   </div>
    </div>
  );
};

export default AddCoffee;
