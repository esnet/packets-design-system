import { ESInputText as BaseESInputText } from './ESInputText';
import type { ESInputTextProps } from './ESInputText.types';

export const ESInputText = BaseESInputText as typeof BaseESInputText & ESInputTextProps;
