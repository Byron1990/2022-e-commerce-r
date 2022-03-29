import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import accounting from "accounting";
import Button from "@mui/material/Button";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Total() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket: " + basket);
  console.log(getBasketTotal(basket));
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} align="center">
        <h3>Total items: {basket.length}</h3>
        <h3>Total price: {accounting.formatMoney(getBasketTotal(basket))}</h3>
        <Button variant="contained">Check Out</Button>
      </Stack>
    </Box>
  );
}
