export interface ESInputNumberProps extends Partial<HTMLInputElement> {
  variant?: "default" | "branded";
  error?: boolean;
  onAddClick?: () => void;
  onMinusClick?: () => void;
}
