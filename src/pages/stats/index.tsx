import type { ReactElement } from "react";
import { MainLayout, CenterLayout } from "@components/inc";
import { Box, Grid, Text } from "@components/base";
import Link from "next/link";

const Stats = () => {
  return (
    <CenterLayout
      main1={
        <Grid bg="bgSecondary" css={{ placeItems: "center" }}>
          <Text fs="2xl" fw="bold" ta="center">
            Go <Link href="/" style={{textDecoration:"underline"}}>Home</Link> or search for a crytocurrency to get
            its stats
          </Text>
        </Grid>
      }
      main2={<Box />}
      aSide={<Box />}
    />
  );
};

export default Stats;

Stats.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
