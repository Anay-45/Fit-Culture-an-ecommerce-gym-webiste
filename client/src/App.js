import AboutContent from "./Home/About/AboutContent";
import About from "./Pages/About";
import { Routes, Route} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./loginandregster/Login";
import Signup from "./loginandregster/Signup";
import Home from "./Pages/Home";
import Product from "./Home/Product/Product";
import Productdetail from "./Home/Product/Productdetails";
import Cart from "./Home/Cart/Cart";
import Favourite from "./Home/Product/Favourite";

function App() {
  const islogin = useSelector((state) => state.webtoken.isloggedIn);

  return (
    <div>
      <Routes>
        {!islogin && (
          <Route path="/" element={<About />}>
            <Route index element={<AboutContent />} />
            <Route path="login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
          </Route>
        )}
        {islogin && (
          <Route path="/home" element={<Home />}>
            <Route index element={<Product />} />
            <Route path=":id" element={<Productdetail />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="favourite" element={<Favourite />} />
          </Route>
        )}
        
      </Routes>
    </div>
  );
}

export default App;
