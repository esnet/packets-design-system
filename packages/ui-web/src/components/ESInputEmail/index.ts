import { ESInputEmail as BaseESInputEmail } from "./ESInputEmail";
import type { ESInputEmailProps } from "./ESInputEmail.types";

type ESInputEmailConstructor = typeof BaseESInputEmail & ESInputEmailProps;

export const ESInputEmail = BaseESInputEmail as ESInputEmailConstructor;
