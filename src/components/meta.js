import React from "react"
import { Helmet } from "react-helmet"

const SiteMetadata = () => {
  return (
    <Helmet defer={false} defaultTitle={"durosyan"}>
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content="durosyan.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="durosyan" />
      <meta
        property="og:image"
        content={`https://www.durosyan.com/profile.jpg`}
      />
      <meta property="og:image:alt" content="Durosyan Logo" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
    </Helmet>
  )
}

export default SiteMetadata
