import React, { useState } from "react";

function DatePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getMonth(),
      currentDate.getFullYear()
    );
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const calendarDays = [];
    let day = 1;

    // Add empty days for the first week
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }

    // Add days of the month
    for (let i = 0; i < daysInMonth; i++) {
      calendarDays.push(day);
      day++;
    }

    return calendarDays;
  };

  const formattedDate = selectedDate
    ? `${selectedDate.getDate()}/${
        selectedDate.getMonth() + 1
      }/${selectedDate.getFullYear()}`
    : "Select Date";

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <div className="bg-gray-200 p-2 flex justify-between items-center">
        <span className="text-gray-500 font-medium text-sm">
          <span className="font-bold">
            {currentDate.toLocaleString("default", { month: "long" })}
          </span>{" "}
          {currentDate.getFullYear()}
        </span>
        <button
          className="bg-gray-300 p-1 rounded hover:bg-gray-400"
          onClick={handlePrevMonth}
        >
          Prev
        </button>
        <button
          className="bg-gray-300 p-1 rounded hover:bg-gray-400"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 p-2">
        {generateCalendar().map((day, index) => (
          <div
            key={index}
            className={`p-2 text-center ${
              day ? "cursor-pointer hover:bg-blue-200" : "bg-transparent"
            }`}
            onClick={() =>
              day &&
              handleDateClick(
                new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
              )
            }
          >
            {day || ""}
          </div>
        ))}
      </div>
      <div className="p-2 text-center">
        <span className="text-lg font-semibold">{formattedDate}</span>
      </div>
    </div>
  );
}

export default DatePicker;
