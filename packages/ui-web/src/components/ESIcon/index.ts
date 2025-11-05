import { ESIcon as BaseESIcon } from "./ESIcon";
import type { ESIconProps } from "./ESIcon.types";

type ESIconConstructor = typeof BaseESIcon & ESIconProps;

export const ESIcon = BaseESIcon as ESIconConstructor;
