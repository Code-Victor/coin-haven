import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Box, Text } from "@components/base";
import { useGetCoinListQuery } from "@store/services/coin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, error, isLoading } = useGetCoinListQuery();
  if (isLoading) {
    return (
      <Box>
        {" "}
        <Text>Loading</Text>
      </Box>
    );
  }

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
          <Text fs="lg" ta="center">
            {JSON.stringify(data, null, 2)}
          </Text>
        </Box>
      </main>
    </>
  );
}
