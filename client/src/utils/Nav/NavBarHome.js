import { NavLink, useNavigate } from "react-router-dom";
import classes from "./NavBarHome.module.css";
import { useDispatch, useSelector } from "react-redux";
import { webtokenactions } from "../../store/webtoken";
import { useEffect } from "react";
import { fetchCartData } from "../../store/cartaction";

const parseJwt = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};
const NavBarHome = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.webtoken.token);
  const { username } = parseJwt(token);
  const Quantity = useSelector((state) => state.cart.Quantity);
  const logouthandler = () => {
    dispatch(webtokenactions.logout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchCartData(username));
  }, [dispatch, username, props.p]);
  return (
    <nav className="navbar navbar-expand-md navbar navbar-dark bg-dark">
      <button type="button" className="btn btn-primary">
        Hello {username}
      </button>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <NavLink
              to="/home/favourite"
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
            >
              Favourites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Orders"
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
            >
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? classes.active : classes.link
              }
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              style={{ marginTop: "2px" }}
              onClick={() => {
                navigate("cart");
              }}
            >
              Cart {Quantity}
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              onClick={logouthandler}
              style={{ marginTop: "2px" }}
              className="btn btn-secondary btn-lg"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarHome;
