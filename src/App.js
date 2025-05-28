import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar Component/Navbar";
import Banner from "./Components/BannerComponent/Banner";
import Footer from "./Components/Footer Component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagedAccount from "./Components/ManagedAccounts Component/ManagedAccounts";
import Affiliates from "./Components/ForAffiliates Component/ForAffiliates";
import AboutUs from "./Components/AboutUs_nav Component/AboutUs_nav";
import ContactUs from "./Components/ContactUs Component/ContactUs";
import Login from "./Components/Login Component/Login";
import Register from "./Components/Register Component/Register";

function App() {
  return (
    <>
      <div>
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-grow text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/*Page*/}
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/managed-accounts" element={<ManagedAccount />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Banner /> */}
        <Footer />
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </>
  );
}

export default App;