export interface ButtonProps {
  size: "medium-tablet" | "small-mobile" | "medium-desktop" | "small-tablet";
  isAdded: boolean;
  onClick: () => void;
}
