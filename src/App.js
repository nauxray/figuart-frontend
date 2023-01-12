import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="p-4 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
