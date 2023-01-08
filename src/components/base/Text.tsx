import { styled } from "stitches.config";
import { getVariants } from "@utils";

const Text = styled("p", {
  variants: {
    fs: getVariants("fontSizes", {
      fontSize: "$$",
    }),
    color: getVariants("colors", {
      color: "$$",
    }),
    ta: {
      center: {
        textAlign: "center",
      },
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
    fw: {
      light: {
        fontWeight: "$1",
      },
      normal: {
        fontWeight: "$2",
      },
      medium: {
        fontWeight: "$3",
      },
      semibold: {
        fontWeight: "$4",
      },
      bold: {
        fontWeight: "$5",
      },
    },
  },
  defaultVariants: {
    fs: "md",
    fw: "normal",
    ta: "left",
    color: "text",
  },
});

export default Text;
