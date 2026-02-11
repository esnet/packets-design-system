export const PktsButtonDefaultAsType = "button" as const;

export type ButtonOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  className?: string;
  variant: "primary" | "secondary" | "branded" | "tertiary" | "destructive"; // Type of Button
  size?: "medium" | "xxlarge";
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  fill?: boolean;
  disabled?: boolean;
  as?: E;
};

export type PktsButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E>>;
