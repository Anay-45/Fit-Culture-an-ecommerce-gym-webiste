import { useDispatch } from "react-redux";
import { incCartData,decCartData,fetchCartData } from "../../store/cartaction";
import { useSelector } from "react-redux";
const parseJwt = (token) =>{
  return JSON.parse(atob(token.split('.')[1]));
}
const Cartitem = (props) => {
  const token = useSelector((state) =>state.webtoken.token)
  const {username}=parseJwt(token);
  const dispatch = useDispatch();
  const addtocart = () => {
    const data = {
      username,
      productId: props.id,
    };
    dispatch(incCartData(data));
    dispatch(fetchCartData(username));
  };
  const dectocart = () => {
    const data = {
      username,
      productId: props.id,
    };
    dispatch(decCartData(data));
    dispatch(fetchCartData(username));
  };
  return (
    
      <tr>
        <th scope="row" className="border-0">
          <div className="p-2">
            <img
              src={props.img}
              alt=""
              width="70"
              className="img-fluid rounded shadow-sm"
            />
            <div className="ml-3 d-inline-block align-middle">
              <h5 className="mb-0">
                {" "}
                <a href="/product" className="text-dark d-inline-block align-middle">
                  {props.name}
                </a>
              </h5>
            </div>
          </div>
        </th>
        <td className="border-0">
          <strong>${props.quantity*props.price}</strong>
        </td>
        <td className="border-0">
        <button type="button" className="btn btn-secondary btn-circle btn-sm" onClick={dectocart}>-</button><strong>{props.quantity}</strong><button type="button" onClick={addtocart} className="btn btn-secondary btn-circle btn-sm">+</button>
        </td>
        <td className="border-0">
          <a href="/proceed" className="text-dark">
            X
          </a>
        </td>
      </tr>
  );
};

export default Cartitem;
