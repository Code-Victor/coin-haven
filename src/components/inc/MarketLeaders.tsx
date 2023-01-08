import React from "react";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
import { Flex, Text, Box, ScrollArea, Skeleton } from "@components/base";
import Image from "next/image";
import Link from "next/link";
import { useGetCoinsQuery } from "@store/services/coin";

function MarketLeaders() {
  const { data: coins, isLoading: coinsLoading, isError } = useGetCoinsQuery(1);

  return (
    <Box bg="bgSecondary" br="3" px="3" py="3">
      <ScrollArea css={{ height: "100%" }}>
        <Text
          as="h1"
          ta={{ "@initial": "center", "@lg": "left" }}
          fs={{ "@initial": "xl", "@lg": "4xl" }}
          fw="medium"
        >
          Market leaders
        </Text>
        <Flex gap="2" fd="column" css={{ mt: "$2", height: "100%" }}>
          {isError && (
            <Text fs="lg" fw="medium">
              oh Snap an Error Occured
            </Text>
          )}
          {coinsLoading &&
            [...Array(5)].map((_, i) => (
              <Skeleton
                key={i}
                css={{ bg: "$highlightPrimary", br: "$4", height: 100 }}
              />
            ))}
          {coins?.map((coin) => {
            return (
              <Link key={coin.id} href={`/stats/${coin.id}`}>
                <MarketLeaderCard
                  img={coin.image.large}
                  sparkline={coin.market_data.sparkline_7d.price}
                  price={coin.market_data.current_price["usd"]}
                  change={
                    coin.market_data.price_change_percentage_7d_in_currency[
                      "usd"
                    ]
                  }
                  name={`${coin.name}(${coin.symbol})`}
                />
              </Link>
            );
          })}
        </Flex>
      </ScrollArea>
    </Box>
  );
}

function MarketLeaderCard({
  name,
  img,
  price,
  change,
  sparkline,
}: {
  name: string;
  img: string;
  price: number;
  change: number;
  sparkline: number[];
}) {
  const isNegative = change < 0;
  const color = isNegative ? "var(--colors-failure)" : "var(--colors-success)";
  return (
    <Flex
      br="5"
      gap="5"
      bg="highlightPrimary"
      jc="between"
      ai="center"
      py="2"
      px="4"
      fd={{ "@initial": "column", "@lg": "row" }}
      css={{
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 10,
          left: -10,
          width: 10,
          height: 20,
          bg: color,
          br: "$1",
        },
      }}
    >
      <Flex gap="2" ai="center">
        <Image width={50} height={50} src={img} alt={name} />
        <Text fs={{ "@initial": "md", "@lg": "lg" }}>{name}</Text>
      </Flex>
      <Flex
        jc="center"
        ai="center"
        css={{
          flex: 1,
          position: "relative",
          "&::before": {
            content: `"${isNegative ? change : "+" + change}"`,
            position: "absolute",
            color: color,
            // right: 10,
            fontSize: "$sm",
            top: -15,
            "@lg": {
              top: 0,
              right: 10,
            },
          },
        }}
      >
        <ResponsiveContainer height={80} width={"70%"} minWidth={200}>
          <LineChart data={transormData(sparkline)}>
            <YAxis hide domain={["dataMin", "dataMax"]} />
            <Line
              type="monotone"
              dataKey="price"
              stroke={color}
              dot={{ r: 0 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
      <Text fs={{ "@initial": "lg", "@lg": "2xl" }}>
        ${price.toLocaleString()}
      </Text>
    </Flex>
  );
}

function transormData(data: number[]) {
  return data.map((item, index) => ({
    name: `crypto data ${index}`,
    price: item,
  }));
}

export default MarketLeaders;
