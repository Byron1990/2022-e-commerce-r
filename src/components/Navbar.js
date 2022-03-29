import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Logo.png";
import { createTheme } from "@mui/material/styles";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} height="50rem" />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            align="right"
            sx={{ flexGrow: 1, marginRight: 2 }}
            component="p"
          >
            Hello User
          </Typography>
          <Button color="inherit" variant="outlined">
            <strong>Login</strong>
          </Button>
          <Link to="/checkout-page">
            <IconButton
              arial-label="show cart items"
              color="inherit"
              variant="outlined"
            >
              <Badge badgeContent={basket.length} color="secondary">
                <ShoppingCart fontSize="large" />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
