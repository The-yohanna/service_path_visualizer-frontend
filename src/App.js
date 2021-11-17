import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SummaryView from "./components/summaryView";
import ListView from "./components/listView";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/summaryview" element={<SummaryView />} />
        <Route path="/listview" element={<ListView />} />
      </Routes>
    </Router>
  );
};

export default hot(App);
