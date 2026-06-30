export interface PktsInputFileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "branded";
  label?: string;
  showFilenames?: boolean;
  asButton?: boolean;
  maxFiles?: number;
}
