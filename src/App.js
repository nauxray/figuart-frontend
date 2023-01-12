import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="p-4 text-white min-w-[100vw] min-h-[100vh] pb-20">
      <Navbar />
      <Routes>
        <Route path="/product/:id" element={<ProductListing />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
