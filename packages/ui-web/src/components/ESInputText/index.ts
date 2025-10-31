import { ESInputText as BaseESInputText } from "./ESInputText";
import type { ESInputTextProps } from "./ESInputText.types";

type ESInputTextConstructor = typeof BaseESInputText & ESInputTextProps;

export const ESInputText = BaseESInputText as ESInputTextConstructor;
