import { ESInputSwitch as BaseESInputSwitch } from './ESInputSwitch';
import type { ESInputSwitchProps } from './ESInputSwitch.types';

export const ESInputSwitch = BaseESInputSwitch as typeof BaseESInputSwitch & ESInputSwitchProps;
