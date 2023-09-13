import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import OrderBoardPage from "./pages/OrderBoardPage";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<OrderBoardPage />} />
    </Routes>
  );
}

export default App;
