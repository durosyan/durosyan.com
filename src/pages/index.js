import React from 'react';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import EmailIcon from '@material-ui/icons/Email';

import Meta from '../meta.js';
import Icon from '../assets/face_logo.svg';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    height: "100vh",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    margin: theme.spacing(1)
  },
  iconBox: {
    flexFlow: "column nowrap",
    alignItems: "center"
  },
  icon: {
    marginBottom: theme.spacing(3),
    width: "300px"
  },
  buttonBox: {
    justifyContent: "center",
    marginTop: theme.spacing(3),
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Meta />
        <CssBaseline />
        <Container className={classes.root}>
          <Box display="flex" className={classes.iconBox}>
            <Icon className={classes.icon} />
            <Typography variant="h2">DUROSYAN</Typography>
          </Box>

          <Box display="flex" className={classes.buttonBox}>
            <a href="https://github.com/durosyan" className={classes.link}>
              <Button>
                <Box display="flex" className={classes.iconBox}>
                  <WallpaperIcon />
                  <Typography>Projects</Typography>
                </Box>
              </Button>
            </a>

            <a href="mailto:durosyan@outlook.com" className={classes.link}>
              <Button >
                <Box display="flex" className={classes.iconBox}>
                  <EmailIcon />
                  <Typography>Contact</Typography>
                </Box>
              </Button>
            </a>
          </Box>
        </Container>
      </ThemeProvider >
    </React.Fragment >
  );
}
