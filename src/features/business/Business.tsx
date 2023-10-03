import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BusinessList from "./BusinessList";

const Business = () => {
  const [status, setStatus] = useState<string>("success");
  console.log(status);
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {status === "success" && (
        <>
          {/* Section for choosing business */}
          <Box sx={{ width: "70%", height: "50%" }}>
            <Typography
              sx={{ color: "black", textAlign: "center", marginBottom: "1rem" }}
            >
              Select your businesses
            </Typography>
            <BusinessList />
          </Box>

          {/* A confirm button */}
          <Box>
            <Button variant="contained">Confirm</Button>
          </Box>
        </>
      )}

      {status === "error" && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Something wrong happened
            </Typography>
            <Button variant="contained" onClick={handleReload}>
              Reload
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Business;
