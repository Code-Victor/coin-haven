import { Box, Flex, Grid, ScrollArea, Text } from "@components/base";
import { Search } from "@components/icons";
import { styled } from "stitches.config";

import { ReactNode } from "react";
import { SearchBar } from ".";
export default function CenterLayout({
  main1,
  main2,
  aSide,
}: Record<"main1" | "main2" | "aSide", ReactNode>) {
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
      <SearchBar />
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
