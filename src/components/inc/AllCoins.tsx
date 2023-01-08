import React from "react";
import { Flex, Text, Box, ScrollArea, Grid, Skeleton } from "@components/base";
import { useGetCoinListQuery } from "@store/services/coin";
import { styled } from "stitches.config";
import Link from "next/link";

function AllCoins() {
  const {
    data: coinList,
    isLoading: coinListLoading,
    isError: listError,
  } = useGetCoinListQuery();
  return (
    <Box bg="bgSecondary" br="3" px="3" py="3">
      <ScrollArea
        css={{
          height: "100%",
        }}
      >
        <Text
          as="h1"
          ta={{ "@initial": "center", "@lg": "left" }}
          fs={{ "@initial": "xl", "@lg": "4xl" }}
          fw="medium"
        >
          All Coins
        </Text>
        <Grid
          css={{
            gridTemplateColumns: "repeat(auto-fit,minmax(80px,150px))",
            gap: "$2",
            mt: "$2",
          }}
        >
          {listError && (
            <Text fs="lg" fw="medium">
              oh Snap an Error Occured
            </Text>
          )}
          {coinListLoading &&
            [...Array(15)].map((_, i) => (
              <Skeleton
                key={i}
                css={{ bg: "$highlightPrimary", br: "$3", height: 100 }}
              />
            ))}
          {coinList?.slice(0, 15)?.map((coin) => {
            return (
              <Link key={coin.id} href={`/stats/${coin.id}`}>
                <CoinCard>
                  <Text
                    fs="lg"
                    fw="medium"
                    css={{
                      display: " -webkit-box",
                      "-webkit-line-clamp": 2,
                      "-webkit-box-orient": "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {`${coin.name}(${coin.symbol})`}
                  </Text>
                </CoinCard>
              </Link>
            );
          })}
        </Grid>
      </ScrollArea>
    </Box>
  );
}

export default AllCoins;
const CoinCard = styled("div", {
  bg: "$highlightPrimary",
  br: "$4",
  px: "$3",
  py: "$5",
});
