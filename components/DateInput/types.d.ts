import type { Value as DateValue } from "react-multi-date-picker";

export interface DateInputProps {
  value: DateValue;
  onChangeInput: (value) => void;
}
