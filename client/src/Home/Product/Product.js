import { useState, useEffect } from "react";
import Productitem from "./Productitem";
import classes from './Productlist.module.css';
const Product = () => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const response = await fetch("/home/products");
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
    <div
      className={`${classes.c}`}
    >
      {data.map((curr) => {

        return (
          <Productitem
            key={curr._id}
            id={curr._id}
            img={curr.img}
            name={curr.name}
            quantity={curr.quantity}
            price={curr.amount}
            p={true}
          />
        );
      })}
    </div>
  );
};

export default Product;
