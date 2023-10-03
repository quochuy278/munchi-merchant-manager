import { Box } from "@mui/material";
import OrderBoard from "../features/order/OrderBoard";

const OrderBoardPage = () => {
  return (
      <Box height={"calc(100vh - 64px)"}>
        <OrderBoard />
      </Box>
  );
};

export default OrderBoardPage;
