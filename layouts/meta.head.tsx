import React from "react";
import Head from "next/head";

const SITE_URL = "https://sociaket.vercel.app";
const DESCRIPTION =
  "Sociaket Is The First Decentralized Social NFT Network With You At The Center!";

const MetaHead = () => {
  return (
    <Head>
      <title>Sociaket, The First Social NFT Network</title>

      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content="Sociaket,login,sign up" />
      <meta name="author" content="Sociaket" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE_URL}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Sociaket, The First Social NFT Network" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:site_name" content="Sociaket" />
      <meta
        property="og:image"
        itemProp="image"
        content={`${SITE_URL}/images/logo-bg-550-420.png`}
      />
      <meta property="og:image:width" content="550" />
      <meta property="og:image:height" content="420" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta
        name="twitter:title"
        content="Sociaket, The First Social NFT Network"
      />
      <meta
        name="twitter:image"
        content={`${SITE_URL}/images/logo-bg-550-420.png`}
      />
      <meta
        name="google-site-verification"
        content="cmqFPwe-1bs7Dscw6QxvdWPAQ52MuaUV2RrfhE17oo8"
      />

      {/* Only the true LCP asset — must match the <img src> exactly (not /_next/image). */}
      <link
        rel="preload"
        as="image"
        href="/images/socialnftwork.webp"
        // @ts-expect-error lowercase fetchpriority is required in the DOM
        fetchpriority="high"
      />
      <link
        rel="preload"
        href="/fonts/montserrat/montserrat-alternates-600.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#141416"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#141416" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#141416" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
    </Head>
  );
};

export default MetaHead;
