import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { SlCalender } from "react-icons/sl";

dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const displayFormat = "DD/MM/YYYY";

const CalenderDatePicker = () => (
  <DatePicker
    defaultValue={dayjs()}
    minDate={dayjs("2019-08-01", dateFormat)}
    maxDate={dayjs("2020-10-31", dateFormat)}
    format={displayFormat}
  />
);
export default CalenderDatePicker;
