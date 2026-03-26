
 
 function Cart({ cart, removeFromCart, clearCart }) {





  const handleCheckout = () => {
  alert("✅ Checkout successful! Thank you for your purchase.");
  clearCart();
};

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Cart</h2>

 

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="card p-3 mb-3 d-flex justify-content-between align-items-center">
              
              <div className="d-flex align-items-center gap-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />

                <div>
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                </div>
              </div>

              <button 
                className="btn btn-danger"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <h4>Total: ${total}</h4>

          <button 
            className="btn btn-success mt-3"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;