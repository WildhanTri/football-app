import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/content/home";
import { Context } from "./stores/provider";
import ScrollToTop from "./utils/scrollToTop";

const AppRoute = () => {

  const { } = useContext(Context)
  return (
    <Router>
      <div style={{ paddingTop: 64 }}>
        <ScrollToTop />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
};

export default AppRoute;