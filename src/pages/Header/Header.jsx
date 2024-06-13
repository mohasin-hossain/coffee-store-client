import { NavLink } from "react-router-dom";
import logo from "../../assets/more/logo1.png";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addCoffee">Add a Coffee</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="font-rancho bg-header-img">
      <div className="container mx-auto">
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="bg-header-img menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost text-2xl md:text-4xl">
              <img className="w-10 mr-2" src={logo} alt="" />
              Espresso Emporium
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
