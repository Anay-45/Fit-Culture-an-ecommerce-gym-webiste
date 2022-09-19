import { cartactions } from "./cart";
import { uiactions } from "./uislice";


export const fetchCartData = (username) => {
  return async (dispatch) => {
    try {
      
      const response = await fetch(`/carts/cart/${username}`);
      const res = await response.json();
      if (res.status === "ok") {
        const { result } = res;
        const [{ Products, Quantity, totalPrice }] = result;
        dispatch(
          cartactions.replacecart({
            products: Products || [],
            Quantity: Quantity ,
            totalPrice: totalPrice,
          })
        );
      }
      
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendCartData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(uiactions.setLoading({content:"adding"}));
      const { username, productId, quantity } = data;
      const result = await fetch("/carts/addcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          productId,
          quantity,
        }),
      });
      const res = await result.json();
      if (res.status === "ok") {
        console.log("added")
        dispatch(uiactions.setsuccess({content:res.message}));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const incCartData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(uiactions.setLoading({content:"adding"}));
      const { username, productId} = data;
      const result = await fetch("/carts/inccart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          id:productId,
        }),
      });
      const res = await result.json();
      if (res.status === "ok") {
        console.log("added");
        dispatch(uiactions.setsuccess({content:res.message}));
      }
      else{
        dispatch(uiactions.seterror({content:"max cart reached"}));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const decCartData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(uiactions.setLoading({content:"adding"}));
      const { username, productId} = data;
      const result = await fetch("/carts/deccart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          id:productId,
        }),
      });
      const res = await result.json();
      if (res.status === "ok") {
        console.log("remove")
        dispatch(uiactions.setsuccess({content:res.message}));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
