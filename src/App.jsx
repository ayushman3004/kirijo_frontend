import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Collection from "./Pages/collection";
import Gift from "./Pages/gift";
import Story from "./Pages/story";
import Login from "./Pages/login";
import Craft from "./Pages/craft";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gift" element={<Gift/>} />
      <Route path="/craft" element={<Craft/>} />
      <Route path="/collection" element={<Collection/>} />
      <Route path="/story" element={<Story/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
