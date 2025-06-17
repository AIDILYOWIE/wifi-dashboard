import { Box } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { color } from "../../typhograpy";


const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const inputRef = useRef(null);
  const calendarRef = useRef(null);

  // Handle clicks outside the component to close calendar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const handleInputClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + direction,
        1
      )
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(date)}
          className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-100 ${
            isSelected
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : isToday
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="w-full">
      <div className="relative">
        {/* Input Container */}

        <div className="flex flex-col gap-[10px]">
          <label
            className={` transition-all duration-200 pointer-events-none top-3 text-[${color.textColor}] text-[16px] font-normal`}
          >
            Tanggal
          </label>
          <input
            ref={inputRef}
            type="text"
            value={formatDate(selectedDate)}
            onClick={handleInputClick}
            readOnly
            className={`w-full border-2 px-2 py-1 text-[10px] text-[${color.textColor}] border-[${color.textColor}] rounded-lg focus:outline-none transition-all duration-200 cursor-pointer hover:border-gray-300 bg-white`}
            placeholder="Masukan Tanggal"
          />
        </div>

        {/* Calendar */}
        {isCalendarOpen && (
          <div
            ref={calendarRef}
            className="absolute top-full w-xs mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 animate-in fade-in duration-200"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h3 className="text-lg font-semibold text-gray-800">
                {monthNames[currentMonth.getMonth()]}{" "}
                {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateInput;
