import {
  BaseSelect,
  Box,
  Flex,
  Text,
  Grid,
  ScrollArea,
} from "@components/base";
import React from "react";
import { styled } from "stitches.config";
import { vsCurrency } from "@utils/constants";

type Data =
  | {
      [key: string]: number;
    }
  | undefined;
type availableVsCurrency = typeof vsCurrency[number];

function Exchange({ data, symbol }: { data: Data; symbol: string }) {
  const [prices, setPrices] = React.useState({
    sellPrice: 0,
    sellCurrency: "usd",
  });
  const value = prices.sellPrice / (data?.[prices.sellCurrency] ?? 1);
  return (
    <Grid gap={3} columns={{ "@initial": 1, "@lg": 3 }}>
      <Box
        br={3}
        bg="bgSecondary"
        px="4"
        py="3"
        css={{ "@lg": { gridColumn: "span 2" } }}
      >
        <Text fs="xl" fw="medium" as="h1" css={{ mb: "$3" }}>
          Exchange
        </Text>
        <Box>
          <Flex
            ai="center"
            gap="3"
            css={{ maxWidth: 700, width: "100%" }}
          >
            <Text fs="sm" color="text" css={{ opacity: "0.7" }}>
              Sell
            </Text>
            <Box css={{ flex: 1 }}>
              <StyledInput
                type="number"
                value={prices.sellPrice}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    sellPrice: parseFloat(e.target.value),
                  })
                }
                placeholder="Sell Price"
              />
            </Box>
            <BaseSelect
              value={prices.sellCurrency}
              onValueChange={(value) =>
                setPrices({ ...prices, sellCurrency: value })
              }
              data={vsCurrency.map((cur) => ({
                label: cur.toUpperCase(),
                value: cur,
              }))}
            />
          </Flex>
          <Flex
            ai="center"
            gap="3"
            css={{ maxWidth: "min(700px,50%)", mt: "$4" }}
          >
            <Text fs="sm" color="text" css={{ opacity: "0.7" }}>
              Buy
            </Text>
            <Text fs="xl" fw="semibold" css={{ pd: "$2", br: "$2", flex: 1 }}>
              {value.toFixed(4).toLocaleString()}
            </Text>
            <Box>
              <Text>{symbol.toUpperCase()}</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box br={3} bg="bgSecondary" px="4" py="3">
        <Text fs="xl" fw="medium" as="h1" css={{ mb: "$3" }}>
          Price
        </Text>
        <Box>
          <ScrollArea css={{ height: 100 }}>
            {Object.entries(data ?? {}).map(([key, value]) => (
              <Flex
                key={key}
                ai="center"
                gap="3"
                css={{ maxWidth: "min(700px,50%)", mt: "3" }}
              >
                <Text fs="sm" color="text" css={{ opacity: "0.7" }}>
                  {key.toUpperCase()}
                </Text>
                <Text
                  fs="xl"
                  fw="semibold"
                  css={{ pd: "$2", br: "$2", flex: 1 }}
                >
                  {value.toFixed(4).toLocaleString()}
                </Text>
              </Flex>
            ))}
          </ScrollArea>
          <Text
            fs="lg"
            fw="medium"
            as="button"
            css={{
              px: "$3",
              py: "$2",
              br: "$2",
              bg: "$highlightSecondary",
              display: "inline-block",
              mx: "auto",
              mt: "3",
            }}
          >
            Buy
          </Text>
        </Box>
      </Box>
    </Grid>
  );
}

const StyledInput = styled("input", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "$xl",
  fontWeight: "$semibold",
  lineHeight: 1,
  flex: 1,
  width: "90%",
  pd: "$2",
  br: "$2",
  color: "$text",
  "&::placeholder": {
    color: "$text",
    opacity: 0.9,
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 1px $colors$text",
  },
});

export default Exchange;
