import { ComponentPropsWithRef } from "react";

export interface ESInputTextAreaProps
  extends ComponentPropsWithRef<"textarea"> {
  variant?: "primary" | "branded";
  error?: boolean;
  // conveniently allows the textarea to be resizable without having to touch CSS
  resize?: "vertical" | "horizontal" | "both" | "none";
}
