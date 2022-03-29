import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import CheckOutCard from "./CheckOutCard";
import Total from "./Total";
import products from "../product-data";
import { useStateValue } from "../StateProvider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ShoppingProducts() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {basket.map((item) => (
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <CheckOutCard key={item.id} product={item} />
        </Grid>
      ))}
    </Box>
  );
}

export default function CheckOutPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>Shopping Cart</Item>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <ShoppingProducts />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Total />
        </Grid>
      </Grid>
    </Box>
  );
}
