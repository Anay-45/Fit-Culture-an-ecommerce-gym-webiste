
import Card from "../utils/Card/Card";
import NavBarHome from "../utils/Nav/NavBarHome";
import url from "./fitness-16.jpg";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Popup from "../utils/Popup/Popup";

const Home = (props) => {
  const p = useSelector((state)=> state.uislice.popup);
 
  const l = useSelector((state)=> state.uislice.loading)
  return (
    <>
      <Card url={url}>
        <NavBarHome p={l}/>
        
          <Outlet />
          {(p) && <Popup/>}
      </Card>
    </>
  );
};

export default Home;
