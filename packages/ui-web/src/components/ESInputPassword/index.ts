import { ESInputPassword as BaseESInputPassword } from "./ESInputPassword";
import type { ESInputPasswordProps } from "./ESInputPassword.types";

type ESInputPasswordConstructor = typeof BaseESInputPassword & ESInputPasswordProps;

export const ESInputPassword = BaseESInputPassword as ESInputPasswordConstructor;
