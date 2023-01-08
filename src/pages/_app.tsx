import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@store";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import { lightTheme } from "stitches.config";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: "dark",
      }}
    >
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </ThemeProvider>
  );
}
