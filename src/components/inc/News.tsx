import React from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  ScrollArea,
  Skeleton,
} from "@components/base";
import { styled } from "stitches.config";
import { Link } from "@components/icons";
import { useGetNewsQuery } from "@store/services/coin";

function News() {
  const {
    data: news,
    isLoading: newsLoading,
    isError: newsError,
  } = useGetNewsQuery();
  return (
    <Box bg="bgSecondary" br="3" px="2" py="2" css={{ height: "min-content" }}>
      <ScrollArea css={{ height: "100%" }}>
        <Text as="h1" fs="2xl" fw="medium">
          News
        </Text>
        <Flex fd="column" gap="2" css={{ mt: "$3" }}>
          {newsError && (
            <Text fs="lg" fw="medium">
              oh Snap an Error Occured
            </Text>
          )}
          {newsLoading &&
            [...Array(5)].map((_, i) => (
              <Skeleton
                key={i}
                css={{ bg: "$highlightPrimary", br: "$3", height: 125 }}
              />
            ))}
          {news?.data.slice(0, 5).map(({ url, description, title }) => (
            <NewsCard key={url}>
              <Text as="h2" fs="lg" fw="medium">
                {title}
              </Text>
              <Text as="p" fs="sm" fw="medium">
                {description}
              </Text>
              <a href={url} target="__blank">
                <IconButton
                  size="sm"
                  css={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    $: "$colors$text",
                  }}
                  icon={<Link color="var(--colors-text)" />}
                  label="link"
                />
              </a>
            </NewsCard>
          ))}
        </Flex>
      </ScrollArea>
    </Box>
  );
}

const NewsCard = styled("div", {
  px: "$2",
  py: "$2",
  pb: "$6",
  bg: "$highlightPrimary",
  br: "$4",
  position: "relative",
  h2: {
    mb: "$2",
    display: " -webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  p: {
    display: " -webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
});

export default News;
