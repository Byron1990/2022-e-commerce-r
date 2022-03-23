import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import CheckOutCard from "./CheckOutCard";
import products from "../product-data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ShoppingProducts() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {products.map((product) => (
        <Grid product xs={12} sm={8} md={6} lg={4}>
          <CheckOutCard key={product.id} product={product} />
        </Grid>
      ))}
    </Box>
  );
}

export default function FullWidthGrid() {
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
          <Item>Total</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
