import { PktsInputTextProps } from "../PktsInputText/PktsInputText.types";

export interface PktsInputNumberProps extends PktsInputTextProps {
  min?: string;
  max?: string;
  step?: string;
  onAddClick?: () => void;
  onMinusClick?: () => void;
}
