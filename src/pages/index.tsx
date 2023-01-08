import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Box, Text } from "@components/base";
import {
  AllCoins,
  MainLayout,
  MarketLeaders,
  News,
  CenterLayout,
} from "@components/inc";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Coin Haven</title>
        <meta
          name="description"
          content="Get the best information about your crypto asset"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CenterLayout main1={<MarketLeaders/>} main2={<AllCoins/>} aSide={<News/>} />
    </>
  );
}

Home.getLayout = function getLayout(page:ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
