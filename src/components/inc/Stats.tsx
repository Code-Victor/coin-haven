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
import { Range, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { styled } from "stitches.config";

const today = new Date();
const lastMonth = new Date(
  today.getFullYear(),
  today.getMonth() - 1,
  today.getDate()
);
function Stats({ id }: { id: string }) {
  const [selectionRange, setSelectionRange] = React.useState<Range[]>([
    {
      endDate: today,
      startDate: lastMonth,
      key: "selection",
    },
  ]);
  const [show, setShow] = React.useState(false);
  const { data, isLoading, isError } = useGetRangeQuery([
    id,
    "usd",
    selectionRange[0]?.startDate?.getTime()! / 1000,
    selectionRange[0]?.endDate?.getTime()! / 1000,
  ]);
  const transformData = (data: [number, number][] | undefined) => {
    const transformedData = data?.map((item) => ({
      date: new Date(item[0]).toLocaleDateString(),
      price: item[1],
    }));
    return transformedData;
  };
  return (
    <Flex fd="column" bg="bgSecondary" px="3" py="2">
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>oh Snap an Error occured</Text>}
      <Flex css={{ mb: "$2" }} jc="between">
        <Text fs="2xl" fw="medium">
          Chart Data
        </Text>
        <Box
          css={{
            position: "relative",
            "& > div": {
              position: "absolute",
              display: show ? "auto" : "none",
              zIndex: 10,
              right: 0,
              top: "$7",
            },
            "& .recharts-wrapper": {
              position: "absolute !important",
            },
          }}
        >
          <Button onClick={() => setShow(!show)}>
            {selectionRange[0]?.startDate?.toLocaleDateString()} -{" "}
            {selectionRange[0]?.endDate?.toLocaleDateString()}
          </Button>
          <DateRangePicker
            color="var(--colors-highlightPrimary)"
            ranges={selectionRange}
            editableDateInputs={true}
            displayMode="date"
            rangeColors={["var(--colors-highlightPrimary)"]}
            moveRangeOnFirstSelection={false}
            onChange={(item) => setSelectionRange([item.selection])}
          />
        </Box>
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
            <YAxis strokeWidth={0} />
            <Tooltip />
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              color={"rgba(var(--colors-textRGB),1)"}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
}

const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  color: "$text",
  backgroundColor: "$highlightPrimary",
  border: "1px solid $borderPrimary",
  borderRadius: "$1",
  padding: "$2 $3",
  "&:hover": {},
});

export default Stats;
