import "../styles/globals.css";
import Layout from "../layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Script from "next/script";
import { DarkModeProvider } from "../context/darkModeContext";

NProgress.configure({
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                  page_path: window.location.pathname,
                  page_location : window.location.href,
                });
            `,
            }}
          />
        </>
      )}
      <DarkModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkModeProvider>
    </>
  );
}

export default MyApp;
