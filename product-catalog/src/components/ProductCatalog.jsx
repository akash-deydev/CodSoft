import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductCatalog = ({ products }) => {
  const { state, dispatch } = useCart();

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success("Product added to cart");
  };

  const handleRemoveItemFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    toast.error("Product removed from cart");
  };

  return (
    <div className="product-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <div className="card-head">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-body">
              <div className="product-title">{product.title}</div>
              <div className="product-price">₹{product.price}</div>
              <div>
                {state.cart.some((item) => item.id === product.id) ? (
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItemFromCart(product)}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button onClick={() => handleAddToCart(product)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCatalog;
