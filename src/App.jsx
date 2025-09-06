import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Collection from "./Pages/collection";
import Gift from "./Pages/gift";
import Story from "./Pages/story";
import Login from "./Pages/login";
import Craft from "./Pages/craft";
import Northeast from "./Pages/northeast";
import Signup from "./Pages/signup";
import Bag from "./Pages/bag";
import Checkout from "./Pages/checkout";
import Shipping from "./Pages/shipping";
import Payment from "./Pages/payment";
import Assam from "./Pages/assam";
import ScrollToTop from "./components/ScrollTop";
import Weavers from "./Pages/weavers";
function App() {
  return (
    <>
      <ScrollToTop />
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
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/shipping" element={<Shipping/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/assam" element={<Assam/>} />
      <Route path="/weavers" element={<Weavers/>} />
    </Routes>
    </>
  );
}

export default App;
