export const ESButtonDefaultAsType = "button" as const;
export type ESButtonDefaultAsType = typeof ESButtonDefaultAsType;

export type ESButtonCoreProps<E extends React.ElementType> = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "branded" | "tertiary" | "destructive"; // Type of Button
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  fill?: boolean;
  disabled?: boolean;
  as?: E;
};

export type ESButtonProps<E extends React.ElementType> = ESButtonCoreProps<E> &
  Omit<React.ComponentProps<E>, keyof ESButtonCoreProps<E>>;
