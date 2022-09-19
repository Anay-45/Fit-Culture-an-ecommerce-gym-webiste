import {NavLink} from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai';
import { useDispatch ,useSelector} from 'react-redux';
import { uiactions } from '../../store/uislice';
const parseJwt = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};
const Productitem = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.webtoken.token);
  const { username } = parseJwt(token);
  const addtofavourite = async() =>{
    try {
      dispatch(uiactions.setLoading({content:"adding"}));
      const result = await fetch("/favour/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          productId:props.id,
        }),
      });
      const res = await result.json();
      if (res.status === "ok") {
        console.log("added");
        dispatch(uiactions.setsuccess({content:res.message}));
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        align:"center",
        float:"left",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        className="card-img-top"
        src={props.img}
        alt="Cardcap"
        width={"100px"}
        height={"200px"}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <NavLink to={`/home/${props.id}`} className="btn btn-primary">
          View
        </NavLink>
        {props.p && <button className="btn btn-light" style={{float:"right"}} onClick={addtofavourite}><AiFillHeart /></button>}
      </div>
    </div>
  );
};

export default Productitem;
