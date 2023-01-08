import React from "react";
import { Flex, IconButton } from "@components/base";
import { Home, BarChart } from "@components/icons";

function ButtomBar() {
  return (
    <Flex
      br="pill"
      px="4"
      py="2"
      gap="4"
      css={{
        "@lg": { display: "none" },
        position: "fixed",
        bottom: 20,
        right: "50%",
        transform: "translateX(50%)",
        bg: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <IconButton icon={<Home color="white" />} bg="highlightPrimary" label="home" />
      <IconButton icon={<BarChart color="white" />} label="stats" />
    </Flex>
  );
}

export default ButtomBar;
