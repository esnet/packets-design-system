import { ESButton as BaseESButton } from "./ESButton";
import type { ESButtonProps } from "./ESButton.types";

export const ESButton = BaseESButton as typeof BaseESButton & ESButtonProps;