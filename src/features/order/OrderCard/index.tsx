import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Icon,
    Typography
} from "@mui/material";

const OrderCard = ({order}:any) => {
  return (
    <Card>
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
          # {order?.id} | {order?.customer.name} {order?.customer.lastName}
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
};

export default OrderCard;
