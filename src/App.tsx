import "./App.css";
import { Route, Routes } from "react-router-dom";
import OrderBoardPage from "./pages/OrderBoardPage";
import BusinessPage from "./pages/BusinessPage";
import Layout from "./components/Layout";
import { BusinessHeader, OrderHeader } from "./components/Header";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout renderHeader={() => <OrderHeader />}>
            <OrderBoardPage />
          </Layout>
        }
      />
      <Route
        path="/business"
        element={
          <Layout renderHeader={() => <BusinessHeader />}>
            <BusinessPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
