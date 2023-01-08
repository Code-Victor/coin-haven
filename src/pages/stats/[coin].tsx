import { useRouter } from "next/router";
import type { ReactElement } from "react";
import {
  MainLayout,
  CenterLayout,
  CoinInfo,
  Exchange,
  Stats,
} from "@components/inc";
import { Box, Skeleton } from "@components/base";
import { useGetCoinInfoQuery } from "@store/services/coin";

const Coin = () => {
  const router = useRouter();
  const { coin } = router.query;
  const { data,isLoading, isError } = useGetCoinInfoQuery(coin as string);
  const coinInfo = {
    name: data?.name ?? "",
    symbol: data?.symbol,
    image: data?.image.large ?? "",
    description: data?.description,
    country_origin: data?.country_origin,
    links: data?.links,
    hashing_algorithm: data?.hashing_algorithm,
    categories: data?.categories,
    total_supply: data?.market_data.total_supply,
    circulating_supply: data?.market_data.circulating_supply,
    max_supply: data?.market_data.max_supply,
  };
  return (
    <CenterLayout
      main1={isLoading ? <LayoutSkeleton /> : <Stats id={data?.id ?? ""} />}
      main2={
        isLoading ? (
          <LayoutSkeleton />
        ) : (
          <Exchange
            data={data?.market_data.current_price}
            symbol={data?.symbol ?? ""}
          />
        )
      }
      aSide={isLoading ? <LayoutSkeleton /> : <CoinInfo data={coinInfo} />}
    />
  );
};

const LayoutSkeleton = () => {
  return <Skeleton css={{ bg: "$bgSecondary", br: "$3",minHeight:250 }}></Skeleton>;
};
export default Coin;

Coin.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
