export interface PktsButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  labelCopy?: React.ReactNode;
  hideLabel?: boolean;
  direction?: "vertical" | "horizontal";
}
