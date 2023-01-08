import React from "react";
import { Box, Flex, IconButton } from "@components/base";
import { BarChart, Hamburger, Home, Sun } from "@components/icons";
import Link from "next/link";
import { MenuButton } from "./MenuButton";
import { useRouter } from "next/router";

export function SideBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  return (
    <Box
      css={{
        height: "calc(100vh - 60px)",
        width: isOpen ? "150px" : "$8",
        transition: "width 0.3s ease-in-out",
        display: "none",
        "@lg": { display: "block" },
      }}
    >
      <Flex
        fd="column"
        css={{
          width: isOpen ? "150px" : "$8",
          height: "90%",
          overflowX: "hidden",
          transition: "width 0.3s ease-in-out",
          alignItems: "start",
          position: "fixed",
        }}
        gap="5"
      >
        <Box
          css={{ width: "100%", overflow: "hidden" }}
          br="3"
          bg="bgSecondary"
          py="2"
          px="2"
        >
          <MenuButton
            onClick={() => setIsOpen(!isOpen)}
            size="md"
            icon={<Hamburger color="white" />}
            label="menu"
          />
        </Box>
        <Flex
          fd="column"
          css={{ flex: 1, width: "100%" }}
          br="3"
          py="2"
          px="2"
          jc="between"
          bg="bgSecondary"
        >
          <Flex fd="column" gap="2" css={{ overflow: "hidden" }}>
            <Link href="/">
              <MenuButton
                icon={<Home color="white" />}
                active={router.pathname === "/"}
                label="home"
              />
            </Link>
            <Link href="/stats">
              <MenuButton
                icon={<BarChart color="white" />}
                active={router.pathname.includes("stats")}
                label="stats"
              />
            </Link>
          </Flex>
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            css={{ alignSelf: "center" }}
            size="md"
            bg="highlightPrimary"
            icon={<Sun color="white" />}
            label="sun"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
