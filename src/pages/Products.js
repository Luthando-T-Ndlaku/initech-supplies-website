import products from "../data/products";
import { Link } from "react-router-dom";

function Products({ addToCart }) {
  return (
    <div className="container mt-4">
      <h2>Products</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />

              <div className="card-body">
                <h5>{product.name}</h5>
                <p>R{product.price}</p>
                <p>{product.description}</p>

                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary me-2"
                >
                  View Details
                </Link>

                <button
                  className="btn btn-success"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;