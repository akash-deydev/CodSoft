import ProductCatalog from "../components/ProductCatalog";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const Homepage = ({ products }) => {
  const { state, dispatch } = useCart();
  return (
    <div>
      <ProductCatalog products={products} />
      <Footer />
    </div>
  );
};

export default Homepage;
