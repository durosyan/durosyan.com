import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';

import Meta from '../common/meta.js';

const useStyles = makeStyles((theme) => ({
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  grid: {
    textAlign: "center",
    flexWrap: "nowrap",
    width: "100vw",
    padding: theme.spacing(2),
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden"
  },
  icon: {
    [theme.breakpoints.down("md")]: { width: theme.spacing(7), height: theme.spacing(7) },
    [theme.breakpoints.up("md")]: { width: theme.spacing(14), height: theme.spacing(14) }
  },
  pageTitle: {
    [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(5) },
    fontSize: theme.spacing(10)
  },
}));

export default function FrontPage() {
  const classes = useStyles();

  return (
    <CssBaseline>
      <Meta />
      <Grid container className={classes.page}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12}>
            <Avatar src="/profile.jpg" className={classes.icon} />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.pageTitle}>DUROSYAN DESIGN</Typography>
            <Typography>
              Hey, I'm Ryan, this is my personal site, you want one?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </CssBaseline>
  );
}