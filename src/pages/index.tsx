import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Box, Text } from "@components/base";

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
      <main>
        <Box color="text" px="5" py="4" bg="bg" br="3">
          <Text fs="lg" ta="center">Hello World</Text>
        </Box>
      </main>
    </>
  );
}
