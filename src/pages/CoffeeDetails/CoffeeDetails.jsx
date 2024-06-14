import { IoMdArrowRoundBack } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, photo, supplier, taste, category, quantity, details } =
    coffee;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="container mx-auto px-10">
        <button
          style={{ textShadow: "0px 1px 8px #818181" }}
          className="mt-20 mb-8 font-rancho text-3xl flex items-center gap-3"
          onClick={handleGoBack}
        >
          <IoMdArrowRoundBack />
          Back to Home
        </button>

        <div className="font-raleway flex flex-col lg:flex-row justify-center items-center bg-tertiary mb-20">
          <div className="lg:w-1/5">
            <img className="w-96 mx-auto" src={photo} alt="coffee" />
          </div>
          <div className="lg:w-4/5 p-8 ">
            <div className="space-y-2">
              <h3  style={{ textShadow: "0px 1px 8px #818181" }} className="font-rancho text-4xl">{name}</h3>
              <p>
                <strong>In Stock: </strong>
                {quantity}
              </p>
              <p>
                <strong>Supplier: </strong>
                {supplier}
              </p>
              <p>
                <strong>Taste: </strong>
                {taste}
              </p>
              <p>
                <strong>Category: </strong>
                {category}
              </p>
            </div>
            <p className="mt-8 text-justify first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
