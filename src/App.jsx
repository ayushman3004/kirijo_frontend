import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/collection";
import Gift from "./Pages/gift";
import Story from "./Pages/story";
import Login from "./Pages/login";
import Craft from "./Pages/craft";
import Northeast from "./Pages/northeast";
import Signup from "./Pages/signup";
import Bag from "./Pages/bag";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/checkout";
import Shipping from "./Pages/shipping";
import Payment from "./Pages/payment";
import OrderSuccess from "./Pages/OrderSuccess";
import Assam from "./Pages/assam";
import ScrollToTop from "./components/ScrollTop";
import Weavers from "./Pages/weavers";
import CartSidebar from "./components/CartSidebar";
function App() {
  return (
    <>
      <ScrollToTop />
      <CartSidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gift" element={<Gift />} />
      <Route path="/northeast" element={<Northeast />} />
      <Route path="/craft" element={<Craft />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/story" element={<Story />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/bag" element={<Bag/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/shipping" element={<Shipping/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/order-success" element={<OrderSuccess/>} />
      <Route path="/assam" element={<Assam/>} />
      <Route path="/weavers" element={<Weavers/>} />
    </Routes>
    </>
  );
}

export default App;
