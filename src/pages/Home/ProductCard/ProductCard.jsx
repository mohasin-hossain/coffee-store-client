import { Link } from "react-router-dom";

const ProductCard = ({ product, handleDelete }) => {
  const { _id, name, photo, supplier, taste, category, quantity, details } =
    product;

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
            <Link to={`/updateCoffee/${_id}`}>
              <button
                // onClick={() => handleUpdate(_id)}
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
      </div>
    </div>
  );
};

export default ProductCard;
