export interface ESInputDatePickerPromptProps {
  type?: "date" | "time" | "datetime";

  date?: Date;
  /** Callback to when a date is selected from the prompt. */
  onClickDate?: (date: Date) => void;
}

export interface ESInputDatePickerDateProps {
  date?: Date;
  /** Callback to when a date is selected from the prompt. */
  onClickDate?: (date: Date) => void;
}
