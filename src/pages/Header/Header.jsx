import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul className="flex gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/addCoffee'>Add a Coffee</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </ul>
        </div>
    );
};

export default Header;