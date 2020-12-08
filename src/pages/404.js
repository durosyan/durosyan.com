import React from "react"

import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

import Meta from "../components/meta.js"

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Meta />
      <CssBaseline />
      <Container style={{ textAlign: "center", padding: "10vh" }}>
        <Typography component="div">404, go back</Typography>
        <img alt="star wars trap meme" src="/trap.gif" />
      </Container>
    </React.Fragment>
  )
}
