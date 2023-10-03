import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
type Anchor = "top" | "left" | "bottom" | "right";

const OrderHeader = () => {
  const [state, setState] = useState({
    left: false,
  });

  //Method to toggle the main drawer
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ padding: 0 }}
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon sx={{ color: "#000000" }} />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          disableSwipeToOpen
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          <Box
            sx={{
              width: "auto",
            }}
            role="presentation"
          >
            <List>
              <ListItem key={"Logout"} disablePadding>
                <Box>
                  <ListItemButton>
                    <ListItemIcon>
                      <MenuIcon />
                    </ListItemIcon>
                    <ListItemText>Log out</ListItemText>
                  </ListItemButton>
                </Box>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
};

export default OrderHeader;
