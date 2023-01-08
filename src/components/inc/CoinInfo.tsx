import { Box, Flex, IconButton, Text } from "@components/base";
import Image from "next/image";
import { Description, Links } from "@store/services/types/CoinInfo";
import { Github, Globe } from "@components/icons";

export type Info = {
  name: string;
  symbol: string | undefined;
  image: string;
  description: Description | undefined;
  country_origin: string | undefined;
  links: Links | undefined;
  hashing_algorithm: string | undefined;
  categories: string[] | undefined;
  total_supply: string | undefined;
  circulating_supply: string | undefined;
  max_supply: number | undefined;
};

const CoinInfo = ({ data: data }: { data: Info }) => {
  return (
    <Box bg="bgSecondary" br="3" px="3">
      <Box
        bg="text"
        br="4"
        css={{ ml: "auto", mr: "$2", mt: "-$4", pd: 1, width: "fit-content" }}
      >
        <Image height={50} width={50} src={data.image} alt={data.name} />
      </Box>
      <Text fs="xl" fw="medium" css={{ mb: "$3" }}>
        Info Card
      </Text>
      <Box br="5" bg="highlightPrimary" px="4" py="3">
        <Text
          fs="md"
          css={{
            display: " -webkit-box",
            "-webkit-line-clamp": 5,
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
          }}
        >
          {data.description?.en}
        </Text>
      </Box>
      <Flex
        css={{ color: "$text", bg: "$bgPrimary" }}
        px="2"
        py="1"
        gap="3"
        my="4"
        br="4"
      >
        <a href={data.links?.homepage[0]} target="__blank">
          <IconButton
            icon={<Globe color="var(--colors-text)" />}
            label="website link"
          />
        </a>
        <a href={data.links?.repos_url.github[0]} target="__blank">
          <IconButton
            icon={<Github color="var(--colors-text)" />}
            label="github link"
          />
        </a>
      </Flex>
      <Box>
        <Text
          fs="xl"
          fw="medium"
          css={{
            my: "$3",
            pb: "$2",
            borderBottom: "1px solid $colors$highlightPrimary",
          }}
        >
          Facts
        </Text>
        <Box>
          <Flex fd="column" gap={4} px="2" py="3">
            <InfoBox title="Hashing Algorithm" info={data.hashing_algorithm} />
            <InfoBox
              title="Country of Origin"
              info={data.country_origin || "unknown"}
            />
            <InfoBox title="Category" info={data.categories?.[0]} />
          </Flex>

          <Flex
            fd="column"
            gap={4}
            br="4"
            bg="highlightPrimary"
            px="2"
            py="3"
            css={{ mt: "$5" }}
          >
            <InfoBox title="Total supply" info={data.total_supply} />
            <InfoBox title="Max suppy" info={data.max_supply?.toString()??"unknown"} />
            <InfoBox title="Circulating" info={data.circulating_supply} />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

const InfoBox = ({
  title,
  info,
}: Record<"title" | "info", string | undefined>) => {
  return (
    <Flex jc="between">
      <Text fs="md" fw="medium">
        {title}
      </Text>
      <Text fs="md">{info}</Text>
    </Flex>
  );
};
export default CoinInfo;
