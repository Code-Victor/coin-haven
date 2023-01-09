import { Flex, Text, ScrollArea } from "@components/base";
import { Search } from "@components/icons";
import { Command } from "cmdk";
import React from "react";
import { styled } from "stitches.config";
import { useGetCoinListQuery } from "@store/services/coin";
import Link from "next/link";

function SearchBar() {
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState(false);
  const {
    data: coinList,
    isLoading: coinListLoading,
    isError: listError,
  } = useGetCoinListQuery();
  const Filter =
    coinList
      ?.filter((coin) => `${coin.name}(${coin.symbol})`.toLowerCase().includes(value))
      .slice(0, 20) ?? [];
  return (
    <StyledCommand>
      <Flex ai="center" cmdk-input-wrapper="">
        <Text as="label" css={{ mr: "-$5" }}>
          <Search color="white" />
        </Text>
        <StyledInput
          placeholder="search"
          onFocus={() => setActive(true)}
          onBlur={() => setTimeout(() => setActive(false), 1000)}
          value={value}
          onValueChange={setValue}
        />
      </Flex>
      <CommandList active={active}>
        {Filter?.map((coin) => {
          return (
            <Command.Item key={coin.id} value={coin.name}>
              <Link href={`/stats/${coin.id}`}>
                {coin.name}({coin.symbol})
              </Link>
            </Command.Item>
          );
        })}
        <Command.Empty>No results</Command.Empty>
      </CommandList>
    </StyledCommand>
  );
}

const StyledInput = styled(Command.Input, {
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

export default SearchBar;
const StyledCommand = styled(Command, {
  "@md": { gridColumn: "span 2" },
  height: "min-content",
  ml: "$2",
  position: "relative",
});
const CommandList = styled(Command.List, {
  display: "none",
  ml: "-$2",
  bg: "$bgSecondary",
  px: "$3",
  py: "$2",
  br: "$3",
  position: "absolute",
  zIndex: 1,
  right: 0,
  left: 0,
  boxShadow: `0 2px 5px rgba($colors$textRGB,0.4)`,
  overflowY: "scroll",
  "& [cmdk-list-sizer]": {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxHeight: 150,

    "&  [cmdk-item]": {
      py: "$2",
      px: "$2",
    },
    "& [cmdk-item]:not(:first-child)": {
      borderTop: "1px solid $highlightPrimary",
    },
  },
  variants: {
    active: {
      true: {
        display: "flex",
      },
    },
  },
});
