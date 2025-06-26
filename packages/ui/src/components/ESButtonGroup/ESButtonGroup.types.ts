export interface ESButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  labelCopy?: React.ReactNode;
  className?: string;
  hideLabel?: boolean;
  direction?: "vertical" | "horizontal";
}
