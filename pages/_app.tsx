import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import useDarkMode from "@hooks/useDarkMode";
function MyApp({ Component, pageProps }: AppProps) {
  const { checkThemeFirstRender } = useDarkMode();
  useEffect(() => {
    checkThemeFirstRender();
  });
  return <Component {...pageProps} />;
}

export default MyApp;
