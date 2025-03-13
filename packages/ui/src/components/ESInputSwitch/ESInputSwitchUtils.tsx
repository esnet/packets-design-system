import React from "react";
import { XIcon, CheckIcon } from "lucide-react";

export const getIconByCheckedState = (checked = false) => {
  const _size = 16;

  return checked ? <CheckIcon size={_size} /> : <XIcon size={_size} />;
};
