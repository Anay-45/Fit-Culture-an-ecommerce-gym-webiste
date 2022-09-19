import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="/login" className="text-muted">
                  Login
                </a>
              </li>
              <li className="mb-2">
                <a href="/Signup" className="text-muted">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              itaque temporibus.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-light py-4">
        <div className="container text-center">
          <p className="text-muted mb-0 py-2">
            © 2019 FitCulture All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
