import React from "react";
import { Box, Flex, Grid, Text } from "@components/base";
import { SideBar } from "./SideBar";
import ButtomBar from "./ButtomBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex fd="column" bg="bgPrimary" css={{ minHeight: "100vh" }}>
      <Navbar />
      <Grid
        gap="3"
        container
        mx="auto"
        px="1"
        css={{ "@lg": { gridTemplateColumns: "auto 1fr" }, flex: 1, pd: "$2" }}
      >
        <SideBar />
        {children}
      </Grid>
      <ButtomBar />
    </Flex>
  );
};

export default MainLayout;

function Navbar() {
  return (
    <Box py="3">
      <Text ta="center" fs="xl" as="h1" fw="bold" color="text">
        Coin Haven
      </Text>
    </Box>
  );
}
