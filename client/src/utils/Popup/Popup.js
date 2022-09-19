import Loader from "../Loader/Loader";
import Sucess from "../Sucess/Sucess";
import Error from "../Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { uiactions } from "../../store/uislice";
import classes from "./Popup.module.css";

const Popup = () => {
  const l = useSelector((state) => state.uislice);
  const dispatch = useDispatch();
  const turnof = () => {
    dispatch(uiactions.initit());
  };
  return (
    <div onClick={turnof} className={classes.overlay}>
      <div className="row">
        <div className="col-md-4 mx-auto " style={{marginTop:"300px"}}>
          {l.loading && <Loader text={l.content} />}
          {l.sucess && <Sucess content={l.content} />}
          {l.error && <Error content={l.content} />}
        </div>
      </div>
    </div>
  );
};

export default Popup;
