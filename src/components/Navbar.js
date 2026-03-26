 import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Initech Supplies</Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">Home</Link>
          <Link className="btn btn-outline-light me-2" to="/about">About</Link>
          <Link className="btn btn-outline-light me-2" to="/services">Services</Link>
          <Link className="btn btn-outline-light me-2" to="/blog">Blog</Link>
          <Link className="btn btn-outline-light me-2" to="/products">Products</Link>
          <Link className="btn btn-warning" to="/cart">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;