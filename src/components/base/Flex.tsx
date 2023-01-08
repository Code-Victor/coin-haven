import { getVariants } from "@utils";
import { styled } from "stitches.config";
import { Box } from ".";

const Flex = styled("div", {
  boxSizing: "border-box",
  display: "flex",

  variants: {
    px: getVariants("space", { px: "$$" }),
    py: getVariants("space", { py: "$$" }),
    mx: getVariants("space", { mx: "$$" }),
    my: getVariants("space", { my: "$$" }),
    bg: getVariants("colors", { bg: "$$" }),
    color: getVariants("colors", { color: "$$" }),
    br: getVariants("radii", { br: "$$" }),
    container: {
      true: {
        width: "100%",
        "@sm": {
          maxWidth: 640,
        },
        "@md": {
          maxWidth: 768,
        },
        "@lg": {
          maxWidth: 1024,
        },
        "@xl": {
          maxWidth: 1280,
        },
        "@xxl": {
          maxWidth: 1536,
        },
      },
    },
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
