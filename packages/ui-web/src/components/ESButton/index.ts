import { ESButton as BaseESButton } from "./ESButton";
import type { ESButtonProps } from "./ESButton.types";

type ESButtonConstructor = typeof BaseESButton & ESButtonProps;

export const ESButton = BaseESButton as ESButtonConstructor;

