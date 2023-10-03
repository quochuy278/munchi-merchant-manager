import React from "react";
import { Box, Typography, Avatar, Switch } from "@mui/material";

type BusinessItemProps = {
  business: any;
};

const BusinessItem = ({ business }: BusinessItemProps) => {
  return (
    <Box
      sx={{
        marginY: 1,
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>{business?.business.name}</Typography>
        <Avatar src={business?.business.logo} />
      </Box>
      <Box>
        <Switch />
      </Box>
    </Box>
  );
};

export default BusinessItem;
