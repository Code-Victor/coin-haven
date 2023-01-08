import { Box, Flex, Grid, ScrollArea, Text } from "@components/base";
import { Search } from "@components/icons";
import { styled } from "stitches.config";

import { ReactNode } from "react";
export default function CenterLayout({main1,main2,aSide}:Record<"main1"|"main2"|"aSide",ReactNode>) {
  return (
    <Grid
      gap="3"
      css={{
        gridTemplateColumns: "1fr",
        // gridTemplateRows: "auto 1fr 1fr",
        "@md": {
          gridTemplateColumns: "minmax(500px,1fr) minmax(200px,300px)",
          gridTemplateRows: "auto 1fr",
        },
      }}
    >
      <Flex
        ai="center"
        css={{
          "@md": { gridColumn: "span 2" },
          height: "min-content",
          ml: "$2",
        }}
      >
        <Text as="label" css={{ mr: "-$5" }}>
          <Search color="white" />
        </Text>
        <StyledInput type="text" placeholder="search" />
      </Flex>
      <Grid
        gap="3"
        css={{ "@lg": { gridTemplateRows: "calc( 50% - $1) calc( 50% - $2)" } }}
      >
        {main1}
        {main2}
      </Grid>
      {aSide}
    </Grid>
  );
}
const StyledInput = styled("input", {
  $$border: "$colors$bgSecondary",
  width: "100%",

  height: "$7",
  border: "1px solid $$border",
  br: "$3",
  bg: "transparent",
  pl: "$6",
  fontSize: "$md",
  transition: "all 300ms ease-in-out",
  color: "$text",
  "&:focus": {
    $$border: "$colors$highlightPrimary",
    outline: "none",
  },
  "@lg": {
    width: "85%",
  },
});
