import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleDelete }) => {
  const { _id, name, photo, supplier, taste, category, quantity, details } =
    product;

  return (
    <div className="z-10">
      <div className="flex flex-col md:flex-row bg-tertiary rounded-lg p-8 justify-center items-center gap-8 font-raleway text-lg">
        <div>
          <img className="w-36 h-40" src={photo} alt="Coffee" />
        </div>
        <div className="space-y-2 grow">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>In Stock:</strong> {quantity}
          </p>
          <p>
            <strong>Supplier:</strong> {supplier}
          </p>
        </div>
        <div className="join md:join-vertical md:space-y-2">

          <Link to={`/coffee/${_id}`}>
            <button className="btn btn-outline text-white border-none bg-primary hover:bg-primary join-item rounded-none">
              <FaEye />
            </button>
          </Link>

          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn btn-outline bg-black join-item border-none text-white">
              <FaPencilAlt />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline text-white bg-red-500 hover:bg-red-500 border-none  rounded-none"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
