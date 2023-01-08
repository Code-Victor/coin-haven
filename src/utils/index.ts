import { theme, CSS, css } from "stitches.config";

export function getVariants<T extends availableProperties>(
  property: T,
  style: CSS
): Record<keyof typeof theme[T], CSS> {
  const cssString = JSON.stringify(style);

  return Object.values(theme[property]).reduce((prev, propertyToken) => {
    return {
      ...prev,
      [propertyToken.token]: JSON.parse(
        cssString.replace("$$", `$${propertyToken.token}`)
      ),
    };
  }, {});
}
type availableProperties =
  | "colors"
  | "space"
  | "sizes"
  | "radii"
  | "fontSizes"
  | "fonts"
  | "fontWeights"
  | "zIndices";

const visuallyHidden = css({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});
export const utilityClasses = {
  visuallyHidden: visuallyHidden(),
};
