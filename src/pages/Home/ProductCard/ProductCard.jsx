import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const { _id, name, photo, supplier, taste, category, quantity, details } =
    product;

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
    <div>
      <div className="card card-side bg-base-100 shadow-lg">
        <figure>
          <img src={photo} alt="Coffee" />
        </figure>
        <div className="ml-2 flex justify-between gap-4">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
            <p>{quantity}</p>
            <p>{category}</p>
          </div>
          <div className="join join-vertical space-y-4">
            <button className="btn btn-primary join-item">View</button>
            <button className="btn btn-accent join-item">Update</button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-secondary join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
