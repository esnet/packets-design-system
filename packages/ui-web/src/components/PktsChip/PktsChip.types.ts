export interface PktsChipProps {
  variant?: "primary" | "outline";
  rounded?: boolean;
  disabled?: boolean;
  deletable?: boolean;
  onDelete?: () => void;
}
