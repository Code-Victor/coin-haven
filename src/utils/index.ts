import { theme, CSS } from "stitches.config";

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
