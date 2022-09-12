import React from "react";
import ReactVersionManagement from "pages/ReactVersionManagement";
import Home1 from "pages/Home1";
import FlutterVersionManagement from "pages/FlutterVersionManagement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/flutterversionmanagement"
          element={<FlutterVersionManagement />}
        />
        <Route
          path="/reactversionmanagement"
          element={<ReactVersionManagement />}
        />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
