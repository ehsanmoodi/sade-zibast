import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";

import type { DateInputProps } from "./types";

const DateInput: React.FC<DateInputProps> = ({ value, onChangeInput }) => {
  return (
    <DatePicker
      className="rmdp-mobile"
      value={value}
      format="YYYY-MM-DD"
      onChange={onChangeInput}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-center"
    />
  );
};

export default DateInput;
