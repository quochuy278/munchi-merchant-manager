import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

type OrderQuantity = {
  quantity: number;
};

const StyledBox = styled(Box)({
    backgroundColor: 'aliceblue',
    padding: '0.25rem',
    borderRadius: '0.35rem',
    marginLeft: '0.25rem'
  });


const OrderQuantity = ({ quantity }: OrderQuantity) => {
  return <StyledBox>{quantity ? quantity : 0}</StyledBox>;
};

export default OrderQuantity;
