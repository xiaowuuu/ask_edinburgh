// import { useState } from 'react'
import HomePage from "./components/HomePage/HomePage";
import History from "./components/HistoryPage/History";
import Logo from "./components/Logo";
import styles from "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Logo/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
