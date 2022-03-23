import React from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Product /> */}
      <Products />
    </div>
  );
}

export default App;
