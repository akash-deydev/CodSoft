import { useCart } from "../context/CartContext";

const ProductCatalog = ({ products }) => {
  const { state, dispatch } = useCart();

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
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCatalog;
