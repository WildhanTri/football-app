import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/content/home";
import Header from "./shared/header";
import ScrollToTop from "./utils/scrollToTop";

const AppRoute = () => {

  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '64px' }}>
        <ScrollToTop />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
};

export default AppRoute;