import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        const lastLoggedAt = result.user.metadata.lastSignInTime;
        const user = { email, lastLoggedAt };

        fetch("http://localhost:3000/users", {
          method: "PATCH",
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

  return (
    <div className="my-20 container mx-auto px-10">
      <h1 className="text-center font-semibold text-3xl">Login Now</h1>
      <form onSubmit={handleLogin} className="card-body w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
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
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
