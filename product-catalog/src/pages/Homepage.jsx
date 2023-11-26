import ProductCatalog from "../components/ProductCatalog";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Toaster } from "react-hot-toast";

const Homepage = ({ products }) => {
  const { state, dispatch } = useCart();
  return (
    <div>
      <Toaster />
      <ProductCatalog products={products} />
      <Footer />
    </div>
  );
};

export default Homepage;
