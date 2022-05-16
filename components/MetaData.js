import Head from "next/head";
import { useEffect, useState } from "react";
export default function MetaData({ title, description, previewImage }) {
  const [URL, setURL] = useState("");

  useEffect(() => {
    setURL(window.location.href);
  }, []);

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || "Jatin Sharma"} />
      <title>{`${title || ""} Jatin Sharma`}</title>
      <meta name="theme-color" content="#000" />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Jatin Sharma"></meta>

      {/* Og */}
      <meta property="og:title" content={`${title || ""} Jatin Sharma`} />
      <meta property="og:description" content={description || "Jatin Sharma"} />
      <meta property="og:site_name" content="Jatin Sharma" />
      <meta property="og:url" content={URL} key="ogurl" />
      <meta property="og:image" content={previewImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@j471n_" />
      <meta name="twitter:title" content={`${title || ""} Jatin Sharma`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage} />
      <meta name="twitter:image:alt" content={title || "Jatin Sharma"}></meta>
      <meta name="twitter:domain" content={URL} />
    </Head>
  );
}