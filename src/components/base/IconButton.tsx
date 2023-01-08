import { getVariants, utilityClasses } from "@utils";
import React from "react";
import { styled } from "stitches.config";

type ButtonProps= JSX.IntrinsicElements["button"];
const IconButton = ({
  icon,
  className,
  label,
    ...props
}: {
  icon: React.ReactNode;
  label: string;
}&ButtonProps) => {
  return (
    <button className={className} {...props}>
      {icon}
      <span className={utilityClasses.visuallyHidden}>{label}</span>
    </button>
  );
};
const StyledIconButton = styled(IconButton, {
  appearance: "none",
  $$highlight:" $colors$highlightPrimary",
  border: "none",
  transition: "transform 0.2s ease-in-out",
  "&:active": {
    transfrom: "scale(0.95)",
    transformOrigin: "center",
  },
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 1px $$highlight inset",
  },
  display: "grid",
  placeItems: "center",
  variants: {
    size: {
      sm: {
        width: "$6",
        height: "$6",
        borderRadius: "$1",
      },
      md: {
        width: "$7",
        height: "$7",
        borderRadius: "$2",
      },
      lg: {
        width: "$8",
        height: "$8",
        borderRadius: "$3",
      },
    },
    bg: getVariants("colors", { bg: "$$" }),
  },
  defaultVariants: {
    size: "md",
    bg: "bgSecondary",
  },
});
export default StyledIconButton;

export type IconButtonProps= React.ComponentProps<typeof StyledIconButton>;