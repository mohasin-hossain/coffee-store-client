import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleDelete }) => {
  const { _id, name, photo, supplier, taste, category, quantity, details } =
    product;

  return (
    <div>
      <div className="flex bg-tertiary rounded-lg p-8 justify-center items-center gap-8 font-raleway text-lg">
        <div>
          <img className="w-36 h-40" src={photo} alt="Coffee" />
        </div>
        <div className="space-y-2">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>In Stock:</strong> {quantity}</p>
          <p><strong>Supplier:</strong> {supplier}</p>
        </div>
        <div className="join join-vertical space-y-4">
          <button className="btn btn-outline text-white rounded-md border-none bg-primary hover:bg-primary join-item">
          <FaEye />
          </button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn btn-outline bg-black join-item border-none text-white">
            <FaPencilAlt />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline text-white bg-red-500 hover:bg-red-500 border-none join-item"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>

      {/* <div className="card card-side bg-base-100 shadow-lg">
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
            <Link to={`/updateCoffee/${_id}`}>
              <button
                className="btn btn-accent join-item"
              >
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-secondary join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
