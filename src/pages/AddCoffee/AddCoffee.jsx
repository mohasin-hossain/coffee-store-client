import Swal from "sweetalert2";

const AddCoffee = () => {
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
    fetch("https://coffee-store-server-7on2nx692-md-mohasin-hossains-projects.vercel.app/coffee", {
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

  return (
    <div className="container mx-auto my-10 px-10">
      <h1 className="text-4xl font-extrabold text-center">Add a Coffee</h1>
      <form onSubmit={handleAddCoffee} className="card-body">
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
            placeholder="Enter Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <input type="submit" value="Add Coffee" className="btn mt-4" />
      </form>
    </div>
  );
};

export default AddCoffee;
