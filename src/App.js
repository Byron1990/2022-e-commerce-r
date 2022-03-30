import React, { useEffect } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckOutPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import auth from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("Usuario: " + user);
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        console.log("User is not signed");
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/checkout-page" element={<CheckoutPage />}></Route>
          <Route path="/" element={<Products />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
