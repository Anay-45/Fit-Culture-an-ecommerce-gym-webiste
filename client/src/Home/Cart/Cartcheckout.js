const Cartcheckout = (props) => {
  return (
    <div className="row py-5 p-4 bg-white rounded shadow-sm">
      <div className="col-lg-6">
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Order summary{" "}
        </div>
        <div className="p-4">
          <p className="font-italic mb-4">
            Shipping and additional costs are calculated based on values you
            have entered.
          </p>
          <table className="table table-dark">
            <tbody>
              <tr>
                <th scope="col">Order Subtotal</th>
                <th scope="col">{props.totalPrice}</th>
              </tr>
              <tr>
                <th scope="col">Shipping</th>
                <th scope="col">0.0</th>
              </tr>
              <tr>
                <th scope="col">tax</th>
                <th scope="col">0.0</th>
              </tr>
              <tr>
                <th scope="col">total</th>
                <th scope="col">{props.totalPrice}</th>
                
              </tr>
            </tbody>
          </table>
          <a href="/" className="btn btn-dark rounded-pill py-2 btn-block">
            Procceed to checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cartcheckout;
