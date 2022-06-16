import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '@mui/material/Button';
import logo from "../images/logo.jpeg"


function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


export default function ElevateAppBar(props) {
  const styles = {
    logoStyles: {
      height: 100
    },
    navStyles: {
      backgroundColor: "white"
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="inherit">
          <Toolbar style={styles.navStyles}>
            <img style={styles.logoStyles} src={logo} alt="" />
            <Typography fontFamily="Helvetica" variant="h4" component="div" sx={{ flexGrow: 1 }}>
              The Deli
            </Typography>
            <Button href="/" color="inherit">Welcome</Button>
            <Button href="/food-menu" color="inherit">Food Menu</Button>
            <Button href="/drink-menu" color="inherit">Drink Menu</Button>
            <Button href="/reserve" color="inherit">Reserve</Button>
            <Button href="/togo" color="inherit">Togo</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

    </React.Fragment>
  )
};