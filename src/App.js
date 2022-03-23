import React from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckOutPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CheckoutPage/>
      {/* <Products /> */}
    </div>
  );
}

export default App;
