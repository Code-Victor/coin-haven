import { Box } from "@components/base";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import React from "react";
import { CSS, styled } from "stitches.config";

const SCROLLBAR_SIZE = 7;

const ScrollAreaScrollbar = styled(RadixScrollArea.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  background: "$bgSecondary",
  opacity: 0.8,
  transition: "background 160ms ease-out",
  "&:hover": { opacity:1 },
  "&[data-orientation='vertical']": { width: SCROLLBAR_SIZE },
  "&[data-orientation='horizontal']": {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});
const ScrollAreaThumb = styled(RadixScrollArea.Thumb, {
  flex: 1,
  background: "$text",
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 20,
    minHeight: 20,
  },
});
const ScrollAreaViewport = styled(RadixScrollArea.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});
const ScrollAreaCorner = styled(RadixScrollArea.Corner, {
  background: "black",
});
const ScrollAreaRoot = styled(RadixScrollArea.Root, {});
const ScrollArea = ({
  children,
  css,
  asChild=false
}: {
  children: React.ReactNode;
  css?: CSS;
  asChild?:boolean
}) => {
  return (
    <ScrollAreaRoot css={css}>
      <ScrollAreaViewport asChild={asChild}>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};

export default ScrollArea;
