import React from "react";
import { IconButton, Flex, Grid, Text, Box } from "@components/base";
import { SideBar } from "./SideBar";
import ButtomBar from "./ButtomBar";
import { Moon, Sun } from "@components/icons";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Box
      as={Flex}
      container
      px="2"
      py="3"
      jc={{ "@initial": "between", "@lg": "center" }}
      css={{ mx: "auto", "@lg": { width: "100%" } }}
    >
      <Text ta="center" fs="xl" as="h1" fw="bold" color="text">
        Coin Haven
      </Text>
      <IconButton
        onClick={() => toggleTheme()}
        css={{ alignSelf: "center", "@lg": { display: "none" } }}
        size="md"
        bg="highlightPrimary"
        icon={
          theme === "light" ? (
            <Moon color="var(--colors-text)" />
          ) : (
            <Sun color="var(--colors-text)" />
          )
        }
        label="sun"
      />
    </Box>
  );
}
