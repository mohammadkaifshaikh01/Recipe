import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"; 
import Signup from "./pages/Singup"; 
import Login from "./pages/Login"; 
import AddToCart from "./pages/AddToCart"
import { useState ,useEffect} from "react";
import Home from "./pages/Home";
// import Navbar from "./component/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);
  return (
    <BrowserRouter>
    <Navbar isLoggedIn = {isLoggedIn} />
      <Routes>

        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn= {setIsLoggedIn} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
