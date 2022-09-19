import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";
import Cartcheckout from "./Cartcheckout";

const Cart = () => {
  const { products, price,Quantity } = useSelector((state) => state.cart);
  return (
    <div className="px-4 px-lg-0">
      <div className="container text-white py-5 text-center">
        <h1 className="display-4">Shopping Cart</h1>
        <p className="lead mb-0">
          Total number of items {Quantity}
        </p>
      </div>
      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Remove</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => {
                      return (
                        <Cartitem key={product.productId}
                          id={product.productId}
                          img={product.img}
                          name={product.name}
                          quantity={product.quantity}
                          price={product.price}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Cartcheckout totalPrice={price}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
