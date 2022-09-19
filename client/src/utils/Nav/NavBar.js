import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <header>
    <div className={classes.nav}>
      <div className={classes.header}>
        <div className={classes.title}>Fit Culture</div>
      </div>
      <div className={classes.btn}>
        <label htmlFor={classes.check}>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className={classes.links}>
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive ? classes.active : classes.act
          }
        >
          Login
        </NavLink>
        <NavLink
          to="Signup"
          className={({ isActive }) =>
            isActive ? classes.active : classes.act
          }
        >
          Signup
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? classes.active : classes.act
          }
        >
          About
        </NavLink>
       
      </div>
    </div>
    </header>
  );
};

export default NavBar;
