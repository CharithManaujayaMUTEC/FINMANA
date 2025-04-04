import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Income from "./Pages/Income";
import Expenditure from "./Pages/Expenditure";
import Bankbalance from "./Pages/Unused/Bankbalance";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenditure" element={<Expenditure />} />
          <Route path="/bankbalance" element={<Bankbalance />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
