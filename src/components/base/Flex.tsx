import { styled } from "stitches.config";
import { Box } from ".";

const Flex = styled(Box, {
  boxSizing: "border-box",
  display: "flex",

  variants: {
    fd: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    ai: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    jc: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    gap: {
      0: {
        gap: 0,
      },
      1: {
        gap: "$1",
      },
      2: {
        gap: "$2",
      },
      3: {
        gap: "$3",
      },
      4: {
        gap: "$4",
      },
      5: {
        gap: "$5",
      },
      6: {
        gap: "$6",
      },
      7: {
        gap: "$7",
      },
      8: {
        gap: "$8",
      },
      9: {
        gap: "$9",
      },
    },
  },
  defaultVariants: {
    fd: "row",
    ai: "stretch",
    jc: "start",
    wrap: "noWrap",
  },
});

export default Flex;
