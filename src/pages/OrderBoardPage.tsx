import { Box } from "@mui/material";
import Layout from "../components/Layout";
import OrderBoard from "../features/order/OrderBoard";

const OrderBoardPage = () => {
  return (
    <Layout>
      <Box height={"calc(100vh - 64px)"}>
        <OrderBoard />
      </Box>
    </Layout>
  );
};

export default OrderBoardPage;
