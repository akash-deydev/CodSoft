import { useCart } from "../context/CartContext";
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  const handleRemoveFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    toast.error("Product removed from cart");
  };

  const handleChangeItemQty = (quantity, itemId) => {
    dispatch({
      type: "CHANGE_ITEM_QTY",
      payload: { qty: quantity, id: itemId },
    });
  };

  const calCartTotal = (itemsInCart) => {
    const total = itemsInCart.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    );
    return Number(total).toFixed(2);
  };

  return (
    <div className="cart-container">
      <Toaster />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Shopping Cart</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th style={{ width: "35%" }}>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <select
                      name="qty"
                      id="qty"
                      onChange={(e) =>
                        handleChangeItemQty(e.target.value, item.id)
                      }
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                  <td>₹{item.price * item.qty}</td>
                  <td>
                    <AiFillDelete
                      className="delete-item"
                      onClick={() => handleRemoveFromCart(item)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {cart.length == 0 ? (
          <div className="empty-cart">Shopping Cart is empty!</div>
        ) : (
          ""
        )}
      </div>
      <div className="cart-summary">
        <h3 id="cart-total">Cart Summary</h3>
        <div id="totals">
          <span>Cart Totals</span>
          <span>Number of items: {cart.length}</span>
          <span>
            Sub Total: <strong>₹{calCartTotal(cart)}</strong>
          </span>
        </div>
        <button id="checkout" disabled={cart.length === 0 ? true : false}>
          Checkout
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
