import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const BusinessHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton
          sx={{
            ":focus": {
              outline: "none",
            },
          }}
          disableRipple
          disableTouchRipple
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BusinessHeader;
