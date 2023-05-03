import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Cart from "./components/Cart";
import Account from "./components/Account";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import SignIn from "./components/SignIn";
import CheckoutSuccess from "./components/CheckoutSuccess";
import CheckoutError from "./components/CheckoutError";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="p-4 text-white min-w-[100vw] min-h-[100vh] pb-20">
      <Navbar />
      <Routes>
        <Route path="/product/:id" element={<ProductListing />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/error" element={<CheckoutError />} />
      </Routes>
    </div>
  );
}

export default App;
