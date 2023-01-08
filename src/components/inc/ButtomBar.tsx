import React from "react";
import { Flex, IconButton } from "@components/base";
import { Home, BarChart } from "@components/icons";
import { useRouter } from "next/router";
import Link from "next/link";

function ButtomBar() {
  const router = useRouter();

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
      <Link href="/">
        <IconButton
          icon={<Home color="white" />}
          bg={router.pathname === "/" ? "highlightPrimary" : "bgSecondary"}
          label="home"
        />
      </Link>
      <Link href="/stats">
        <IconButton
          bg={
            router.pathname.includes("stats")
              ? "highlightPrimary"
              : "bgSecondary"
          }
          icon={<BarChart color="white" />}
          label="stats"
        />
      </Link>
    </Flex>
  );
}

export default ButtomBar;
