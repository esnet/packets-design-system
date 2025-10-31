import { ESInputNumber as BaseESInputNumber } from "./ESInputNumber";
import type { ESInputNumberProps } from "./ESInputNumber.types";

type ESInputNumberConstructor = typeof BaseESInputNumber & ESInputNumberProps;

export const ESInputNumber = BaseESInputNumber as ESInputNumberConstructor;
