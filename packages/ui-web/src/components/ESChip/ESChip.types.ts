export interface ESChipProps {
  variant?: "primary" | "outline";
  rounded?: boolean;
  disabled?: boolean;
  deletable?: boolean;
  onDelete?: () => void;
}
