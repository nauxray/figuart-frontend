import { Route, Routes } from "react-router-dom";

import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="p-4 text-white min-w-[100vw] min-h-[100vh] pb-20">
      <Navbar />
      <Routes>
        <Route path="/product/:id" element={<ProductListing />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
