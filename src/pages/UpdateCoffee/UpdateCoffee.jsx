import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, photo, supplier, taste, category, quantity, details } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // Send data to the server
    fetch(`https://coffee-store-server-7on2nx692-md-mohasin-hossains-projects.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="container mx-auto my-10 px-10">
      <h1 className="text-4xl font-extrabold text-center">
        Update Coffee: {name}
      </h1>
      <form onSubmit={handleUpdateCoffee} className="card-body">
        {/* Name and Chef Row */}
        <div className="md:flex gap-8 w-full">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter Coffee Name"
              className="input input-bordered"
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
              defaultValue={quantity}
              placeholder="Quantity"
              className="input input-bordered"
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
              defaultValue={supplier}
              placeholder="Enter Supplier Name"
              className="input input-bordered"
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
              defaultValue={taste}
              placeholder="Taste"
              className="input input-bordered"
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
              defaultValue={category}
              placeholder="Category"
              className="input input-bordered"
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
              defaultValue={details}
              placeholder="Add Details"
              className="input input-bordered"
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
            defaultValue={photo}
            placeholder="Enter Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <input type="submit" value="Update Coffee" className="btn mt-4" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
