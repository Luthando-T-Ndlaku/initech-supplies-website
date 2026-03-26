 import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>

      <img src={product.image} alt={product.name} width="300" />

      <p>R{product.price}</p>
      <p>{product.fullDescription}</p>

      <button
        className="btn btn-success"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;