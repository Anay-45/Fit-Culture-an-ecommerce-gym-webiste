import classes from "./Product.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCartData, sendCartData } from "../../store/cartaction";
import { useDispatch, useSelector } from "react-redux";

const parseJwt = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};
const Productdetail = (props) => {
  const [data, setData] = useState({});
  const token = useSelector((state) => state.webtoken.token);
  const { username } = parseJwt(token);
  const dispatch = useDispatch();
  const { id } = useParams();
  const getdata = async () => {
    const response = await fetch(`/home/products/${id}`);
    const data = await response.json();
    if (data.status === "ok") {
      setData(data.result);
      console.log(data.result);
    } else {
      console.log(data.err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const addtocart = () => {
    const data = {
      username,
      productId: id,
      quantity: 1,
    };
    dispatch(sendCartData(data));
    dispatch(fetchCartData(username))
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.productimg}>
        <img src={data.img} alt="ishshsh" />
      </div>
      <div className={classes.productinfo}>
        <div className={classes.producttext}>
          <h1>{data.name}</h1>
          <h2>
            {data.type}
            <br />
            By {data.Company}
          </h2>
        </div>
        <div className={classes.productpricebtn}>
          <p>
            <span>{data.price} Rs</span>
          </p>
          <br />
          <br />
          <button type="button" onClick={addtocart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
