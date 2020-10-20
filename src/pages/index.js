import React from "react";
import { Helmet } from "react-helmet";

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet defer={false}>
          <meta charSet="utf-8" />
          <title>Durosyan</title>
          <link rel="canonical" href="https://durosyan.com" />
        </Helmet>
      </div>
    );
  }
};

export default function Home() {
  return <div>Hey!</div>
}
