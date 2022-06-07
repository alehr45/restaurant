import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={styles.navStyles} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={styles.titleStyles}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Big Belly Deli
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const styles = {
  navStyles: {
    backgroundColor: "#c21923",
    position: "fixed"
  },
  titleStyles: {
    fontFamily: "Helvetica",
    color: "black"
  }
};

export default NavBar;
