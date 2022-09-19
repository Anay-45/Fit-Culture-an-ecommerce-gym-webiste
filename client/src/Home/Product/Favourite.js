import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Productitem from "./Productitem";
import classes from "./Productlist.module.css";

const parseJwt = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};

const Favourite = () => {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.webtoken.token);
  const { username } = parseJwt(token);
  const getdata = async () => {
    const response = await fetch(`/favour/favourites/${username}`);
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

  return (
    <div className={`${classes.c}`}>
      {data.map((curr) => {
        return (
          <Productitem
            key={curr.productId}
            id={curr.productId}
            img={curr.img}
            name={curr.productName}
            p={false}
          />
        );
      })}
    </div>
  );
};

export default Favourite;
