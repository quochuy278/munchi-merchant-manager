import { Box } from "@mui/material";
import React from "react";
import Business from "../features/business/Business";

const BusinessPage = () => {
  return (
    <Box height={"calc(100vh - 64px)"}>
      <Business />
    </Box>
  );
};

export default BusinessPage;
