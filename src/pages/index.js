import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Avatar from "@material-ui/core/Avatar"
import GithubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import FacebookIcon from "@material-ui/icons/Facebook"

import Meta from "../components/meta.js"
import Terminal from "../components/Terminal/index.js"
import { Button, ButtonGroup } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      background: "radial-gradient(circle, #FFF 0%, #DDD 100%) no-repeat",
    },
  },
  page: {
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  grid: {
    flexWrap: "nowrap",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  },
  pageTitle: {
    [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(3) },
    fontSize: theme.spacing(10),
    textAlign: "center"
  }
}))

export default function FrontPage() {
  const classes = useStyles()

  return (
    <CssBaseline>
      <Meta />
      <Grid container className={classes.page}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12}>
            <Avatar src="/profile.jpg" className={classes.icon} />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.pageTitle}>
              DUROSYAN DESIGN
            </Typography>
            <Terminal />
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup variant="outlined" size="large">
              <Button aria-label="Github profile" onClick={() => window.open('https://github.com/durosyan')}>
                <GithubIcon />
              </Button>
              <Button aria-label="Facebook page" onClick={() => window.open('https://www.facebook.com/DurosyanDesign')}>
                <FacebookIcon />
              </Button>
              <Button aria-label="Send an email" onClick={() => window.open('mailto:durosyan@outlook.com')}>
                <EmailIcon />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </CssBaseline>
  )
}
