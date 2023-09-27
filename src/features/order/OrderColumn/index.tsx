import {
  Box,
  Grid,
  styled
} from "@mui/material";
import React from "react";
type OrderColumnProps = {
  renderOrderTab: () => React.ReactNode;
  renderOrderList: () => React.ReactNode;
  gridColumnSpan: string;
  //define load state
  //1 is using letter: ready, loading ??? make sure to put it in ENUM // more recommended because maybe need to use wolt later
  //2 is using status order maybe using [number]
};

const StyledGrid = styled(Grid)({
  backgroundColor: "grey",
  height: "100%",
  width: "100%",
  borderRadius: "0.5rem",
  overflowY: "scroll",
  paddingTop: "0.5rem",
  overscrollBehavior: "none",
});

const OrderColumn = ({
  renderOrderTab,
  renderOrderList,
  gridColumnSpan,
}: OrderColumnProps) => {
  return (
    <StyledGrid item gridColumn={`span ${gridColumnSpan}`}>
      {renderOrderTab()}
      <Box marginX={1} marginY={1} gap={1} display={"grid"}>
        {renderOrderList()}
      </Box>
    </StyledGrid>
  );
};

export default OrderColumn;
