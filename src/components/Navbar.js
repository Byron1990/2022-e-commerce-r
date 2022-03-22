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

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            marginRight="10px"
            sx={{ mr: 2 }}
          >
            <img src={logo} height="50rem" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            component="p"
          >
            Hello User
          </Typography>
          <Button color="inherit" variant="outlined">
            <strong>Login</strong>
          </Button>
          <IconButton
            arial-label="show cart items"
            color="inherit"
            variant="outlined"
          >
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart fontSize="large" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
