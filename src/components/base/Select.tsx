import React, { ReactNode } from "react";
import * as Select from "@radix-ui/react-select";
import { styled } from "stitches.config";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@components/icons";

type RootProps = React.ComponentProps<typeof Select.Root>;
type Items = { value: string; label: string }[];
export const BaseSelect = ({
  data,
  ...RootProps
}: RootProps & { data: Items }) => (
  <Select.Root {...RootProps}>
    <SelectTrigger aria-label="Food">
      <Select.Value placeholder="currency" />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <Select.Portal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select.Portal>
  </Select.Root>
);

const SelectTrigger = styled(Select.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: "$bgPrimary",
  color: "$text",
  boxShadow: `0 2px 10px rgba($colors$textRGB,0.4) , 0 0 0 1px rgba($colors$textRGB,0.4)`,
  "&:focus": { boxShadow: `0 0 0 2px $colors$text` },
  "&[data-placeholder]": { color: "$text" },
});

const SelectIcon = styled(Select.SelectIcon, {
  color: `$highlightSecondary`,
});

const SelectContent = styled(Select.Content, {
  overflow: "hidden",
  backgroundColor: "$bgSecondary",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const SelectViewport = styled(Select.Viewport, {
  padding: 5,
});

type StyledItemProps = React.ComponentProps<typeof StyledItem>;
const SelectItem = React.forwardRef<HTMLDivElement, StyledItemProps>(
  function SelectItemBare({ children, ...props }, forwardedRef) {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <StyledItemIndicator>
          <CheckIcon />
        </StyledItemIndicator>
      </StyledItem>
    );
  }
);

const StyledItem = styled(Select.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: "$highlightPrimary",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: `$bgSecondary`,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$highlightPrimary",
    color: "$text",
  },
});

const SelectLabel = styled(Select.Label, {
  padding: "0 25px",
  fontSize: 12,
  lineHeight: "25px",
  color: "gray",
});

const SelectSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: "$bgSecondary",
  margin: 5,
});

const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  color: "$highlightPrimary",
  cursor: "default",
};

const SelectScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);

const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles
);

export default BaseSelect;
