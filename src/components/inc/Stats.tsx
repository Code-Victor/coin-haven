import { Box, Text, Flex } from "@components/base";
import { useGetRangeQuery } from "@store/services/coin";
import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Stats({ id }: { id: string }) {
  const { data, isLoading, isError } = useGetRangeQuery([
    id,
    "usd",
    1392577232,
    1422577232,
  ]);
  console.log(data);
  const transformData = (data: [number, number][] | undefined) => {
    const transformedData = data?.map((item) => ({
      date: new Date(item[0]).toLocaleDateString(),
      price: item[1],
    }));
    return transformedData;
  };
  return (
    <Flex fd="column" bg="bgSecondary" px="3" py="2">
      <Flex css={{ mb: "$2" }}>
        <Text fs="2xl" fw="medium">
          Chart Data
        </Text>
      </Flex>
      <Box
        css={{
          flex: 1,
          "& .recharts_wrapper": {
            position: "absolute !important",
          },
        }}
      >
        <ResponsiveContainer width="100%" height={"100%"} minHeight={200}>
          <LineChart data={transformData(data?.prices)}>
            <Line
              type="monotone"
              dataKey="price"
              stroke="var(--colors-highlightPrimary)"
              dot={{ r: 0 }}
            />
            <XAxis dataKey="date" />
            <YAxis strokeWidth={0}/>
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
}

export default Stats;
