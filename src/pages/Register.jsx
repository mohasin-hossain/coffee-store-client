import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createdAt = result.user.metadata.creationTime;
        const user = { email, createdAt };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="my-20 bg-form-img">
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
          onSubmit={handleRegister}
          className="card-body lg:w-1/2 mx-auto bg-quaternary"
        >
          <h1
            style={{ textShadow: "0px 1px 8px #818181" }}
            className="text-4xl font-extrabold text-center font-rancho my-6"
          >
            Register Now
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input text-gray-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input text-gray-500"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Regsiter"
              className="btn btn-outline rounded-none bg-primary border-black border-2 font-rancho text-xl mt-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
