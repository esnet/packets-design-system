import { PktsInputTextProps } from "../PktsInputText/PktsInputText.types";

export interface PktsInputSearchProps extends PktsInputTextProps {
  onSearchClick?: () => void;
  onXClick?: () => void;
}
