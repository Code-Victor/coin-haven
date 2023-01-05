import { getVariants } from "@utils";
import { styled } from "stitches.config";

const Box = styled("div", {
  // Reset
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0,
  variants: {
    // Variants
    px: getVariants("space", { px: "$$" }),
    py: getVariants("space", { py: "$$" }),
    mx: getVariants("space", { mx: "$$" }),
    my: getVariants("space", { my: "$$" }),
    bg: getVariants("colors", { bg: "$$" }),
    color: getVariants("colors", { color: "$$" }),
    br: getVariants("radii", { br: "$$" }),
  },
});
export default Box