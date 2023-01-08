import React, { ReactNode } from "react";
import { IconButton } from "@components/base";
import type { IconButtonProps } from "@components/base/IconButton";

export function MenuButton({
  active = false,
  icon,
  label,
  ...props
}: {
  active?: boolean;
} & IconButtonProps) {
  return (
    <IconButton
      size="md"
      bg={active ? "highlightPrimary" : "bgSecondary"}
      icon={icon}
      label={label}
      {...props}
      css={{
        $$highlight: active ? "$colors$text" : "$colors$highlightPrimary",
        position: "relative",
        "&::after": {
          content: `"${label}"`,
          color: "$text",
          position: "absolute",
          left: "calc(100% + 10px)",
          fontWeight: "normal",
          fontSize: "$lg",
        },
      }}
    />
  );
}
