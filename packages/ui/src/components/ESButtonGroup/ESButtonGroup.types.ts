export interface ESButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hideLabel?: boolean;
  direction?: "vertical" | "horizontal";
}
