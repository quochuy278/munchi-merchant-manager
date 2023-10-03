import { Box } from "@mui/material";
import { DUMMY_DATA as data } from "../../../data";
import BusinessItem from "../BusinessItem";
const BusinessList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
        borderRadius: "0.6rem",
        padding: 2,
        overflowY: 'scroll',
        marginBottom: 1
      }}
    >
      {data.map((business:any) => {
        return <BusinessItem business={business} key={business.id}/>
      })}
    </Box>
  );
};

export default BusinessList;
