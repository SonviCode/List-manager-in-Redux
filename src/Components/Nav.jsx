import { NavLink } from "react-router-dom";

const Nav = () => {
  const checkIsActive = ({ isActive }) => {
    return {
      color: isActive ? "black" : "gray",
    };
  };

  return (
    <nav className="w-full">
      <ul className="flex justify-around py-5 uppercase">
        <li>
          <NavLink style={checkIsActive} to="/">
            Dragon
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsActive} to="/knight">
            Knight
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsActive} to="/log">
            Logs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
