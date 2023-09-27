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
