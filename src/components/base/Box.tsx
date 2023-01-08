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
    container:{
      true:{
        width: "100%",
        "@sm": {
          maxWidth:640
        },
        "@md": {
          maxWidth:768
        },
        "@lg": {
          maxWidth:1024
        },
        "@xl": {
          maxWidth:1280
        },
        "@xxl": {
          maxWidth:1536
        },
    }
  }
  },
});
export default Box