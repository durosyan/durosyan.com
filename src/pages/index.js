import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function App() {
  return (
    <React.Fragment>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>Durosyan</title>
        <link rel="canonical" href="https://durosyan.com" />
      </Helmet>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
