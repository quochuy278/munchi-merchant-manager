import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Icon,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import OrderQuantity from "../../../components/Order/OrderQuantity";
import OrderColumn from "../OrderColumn";
import { DUMMY_DATA as data } from "../../../data";
import OrderCard from "../OrderCard";
const StyledTab = styled(Tab)({
  minHeight: "50px",
  "&:focus": {
    outline: "none",
  },
  "&.Mui-focusVisible": {
    outline: "none", // Remove the focus outline
  },
});

const StyledTabs = styled(Tabs)({
  display: "flex",
  color: "black",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  top: 0,
  position: "sticky",
  zIndex: 1,
  "& .MuiTabs-flexContainer": {
    justifyContent: "space-between",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .Mui-selected": {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    padding: "1rem",
  },
});

const OrderBoard = () => {
  const [value, setValue] = useState<string>("pending");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <Grid
      container
      gap={2}
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        backgroundColor: "white",
      }}
      gridTemplateColumns="repeat(5, 1fr)"
      padding={1.5}
    >
      <OrderColumn
        gridColumnSpan="2"
        renderOrderTab={() => {
          return (
            <StyledTabs value={value} onChange={handleChange}>
              <StyledTab
                value="pending"
                label="Pending"
                sx={{
                  textTransform: "none",
                }}
                icon={<OrderQuantity quantity={2} />}
                iconPosition="end"
                disableRipple
                disableFocusRipple
                disableTouchRipple
              />
              <StyledTab
                value="sheduled"
                label="Scheduled"
                sx={{
                  textTransform: "none",
                }}
                icon={<OrderQuantity quantity={4} />}
                iconPosition="end"
                disableRipple
                disableFocusRipple
                disableTouchRipple
              />
            </StyledTabs>
          );
        }}
        renderOrderList={() => {
          return (
            <>
              {value === "pending" && (
                <>
                  {data.map((order: any) => {
                    return <OrderCard order={order} key={Math.random()} />;
                  })}
                </>
              )}
              {value === "sheduled" && (
                <>
                  {data.map((order: any) => {
                    return <OrderCard order={order} key={Math.random()} />;
                  })}
                </>
              )}
            </>
          );
        }}
      />

      {/* using tab from material UI to divide pending order and schedule order */}
      {/* Use switch in order detail, condition rendering `*/}
      {/* <OrderList
          renderOrderList={() => {
            return <div>Column1</div>;
          }}
        /> */}
      <OrderColumn
        gridColumnSpan="2"
        renderOrderTab={() => {
          return (
            <StyledTabs value={0}>
              <StyledTab
                label="Accepted"
                sx={{
                  textTransform: "none",
                  padding: "1rem",
                }}
                icon={<OrderQuantity quantity={2} />}
                iconPosition="end"
                disableRipple
                disableFocusRipple
                disableTouchRipple
              />
            </StyledTabs>
          );
        }}
        renderOrderList={() => {
          return (
            <>
              {data.map((order: any) => {
                return (
                  <Card key={Math.random()}>
                    <CardHeader
                      avatar={
                        <Avatar src="https://res.cloudinary.com/ordering2/image/upload/v1694207449/peperoni/xkubj7gxc1jrv9wtfqkj.png" />
                      }
                      title={"Test Venue (Juicy Burger)"}
                      sx={{
                        backgroundColor: "aqua",
                        padding: "0.5rem",
                        textAlign: "center",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.5rem",
                      }}
                    >
                      <Typography>
                        {" "}
                        # {order.id} | {order.customer.name}{" "}
                        {order.customer.lastName}
                      </Typography>
                      <Box display={"flex"} flexDirection={"column"}>
                        <Icon>fa</Icon>
                        <Icon>fa</Icon>
                      </Box>
                    </CardContent>
                    <CardContent>render product list here</CardContent>
                    <CardActions>List of buttons here</CardActions>
                  </Card>
                );
              })}
            </>
          );
        }}
      />
      <OrderColumn
        gridColumnSpan="1"
        renderOrderTab={() => {
          return (
            <StyledTabs value={0}>
              <StyledTab
                label="Ready"
                sx={{
                  textTransform: "none",
                  padding: "1rem",
                }}
                icon={<OrderQuantity quantity={2} />}
                iconPosition="end"
                disableRipple
                disableFocusRipple
                disableTouchRipple
              />
            </StyledTabs>
          );
        }}
        renderOrderList={() => {
          return (
            <>
              {data.map((order: any) => {
                return (
                  <Card>
                    <CardHeader
                      title={`#${order.id}`}
                      subheader={`${order.customer.name} ${order.customer.lastName}`}
                      sx={{
                        backgroundColor: "aqua",
                        padding: "0.5rem",
                        textAlign: "center",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0.5rem",
                      }}
                    >
                      <Box display={"flex"} flexDirection={"column"}>
                        <Icon>fa</Icon>
                        <Icon>fa</Icon>
                      </Box>
                    </CardContent>
                    <CardActions>List of buttons here</CardActions>
                  </Card>
                );
              })}
            </>
          );
        }}
      />
    </Grid>
  );
};

export default OrderBoard;
