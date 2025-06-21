import { Box } from "@mui/material";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { color } from "../../typhograpy";
import { dataPelanggan } from "../../data";

export const DateInput = React.memo(({ label = "Tanggal" }) => {
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

    useMemo(() => {
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
      }
    });

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
              ? "bg-primary text-white hover:bg-blue-600"
              : isToday
              ? "bg-blue-50 text-primary"
              : "text-text hover:text-primary"
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

        <div
          style={{ color: color.textColor }}
          className="flex flex-col gap-[10px]"
        >
          <label
            className={`text-text transition-all duration-200 pointer-events-none top-3 text-[16px] font-normal`}
          >
            {label}
          </label>
          <input
            ref={inputRef}
            type="text"
            value={formatDate(selectedDate)}
            onClick={handleInputClick}
            readOnly
            className={`w-full border-2 px-[20px] py-[10px] text-[10px] rounded-[10px] focus:outline-none transition-all duration-200 cursor-pointer hover:border-gray-300 bg-white`}
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
});

export const DistrictInput = () => {
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
  const [isSubDistrictDropdownOpen, setIsSubDistrictDropdownOpen] =
    useState(false);
  const subDistrictDropdownRef = useRef(null);

  const subDistricts = [
    ...new Set(dataPelanggan.map((customer) => customer.dusunJalan)),
  ];

  const handleSubDistrictSelect = (subDistrict) => {
    setSelectedSubDistrict(subDistrict);
    setIsSubDistrictDropdownOpen(false);
  };

  return (
    <div className="w-full">
      <div className="relative" ref={subDistrictDropdownRef}>
        <div
          style={{ color: color.textColor }}
          className=" flex flex-col gap-[10px]"
        >
          <label className="text-text text-[16px] font-normal">Dusun</label>
          <button
            type="button"
            onClick={() =>
              setIsSubDistrictDropdownOpen(!isSubDistrictDropdownOpen)
            }
            className="w-full px-[20px] py-[10px] border-2 rounded-[10px] focus:outline-none transition-all duration-200 cursor-pointer hover:border-gray-300 bg-white text-left flex items-center justify-between"
          >
            <span
              className={`${
                selectedSubDistrict ? "text-gray-900" : "text-gray-500"
              } text-[10px]
              `}
            >
              {selectedSubDistrict || "Masukan Dusun"}
            </span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {isSubDistrictDropdownOpen && (
          <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {subDistricts.map((subDistrict) => (
              <button
                key={subDistrict}
                type="button"
                onClick={() => handleSubDistrictSelect(subDistrict)}
                className="w-full px-2 py-1 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 text-[10px]"
              >
                {subDistrict}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const NormalInput = React.memo(
  ({ label, placeholder, value, onChange }) => {
    return (
      <div className="w-full flex flex-col gap-[10px]">
        <label htmlFor="" className="text-text text-[16px]">
          {label}
        </label>
        <input
          onChange={onChange}
          type="text"
          value={value ?? ""}
          placeholder={placeholder}
          className="w-full focus:outline-none text-text border-2 border-text px-[20px] py-[10px] font-reguler text-[10px] rounded-[10px]
      "
        />
      </div>
    );
  }
);

// export const OrderForm = () => {
//   // Form state
//   const [selectedCustomer, setSelectedCustomer] = useState("");
//   const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
//   const [village, setVillage] = useState("");
//   const [hamletStreet, setHamletStreet] = useState("");

//   // Dropdown states
//   const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
//   const [isSubDistrictDropdownOpen, setIsSubDistrictDropdownOpen] =
//     useState(false);
//   const customerDropdownRef = useRef(null);
//   const subDistrictDropdownRef = useRef(null);

//   // Get unique sub-districts
//   const subDistricts = [
//     ...new Set(dataPelanggan.map((customer) => customer.subDistrict)),
//   ];

//   // Get filtered customers based on selected sub-district
//   const filteredCustomers = selectedSubDistrict
//     ? dataPelanggan.filter(
//         (customer) => customer.subDistrict === selectedSubDistrict
//       )
//     : customerData;

//   // Handle customer selection
//   const handleCustomerSelect = (customer) => {
//     setSelectedCustomer(customer.name);
//     setVillage(customer.village);
//     setHamletStreet(customer.hamletStreet);
//     setIsCustomerDropdownOpen(false);
//   };

//   // Handle sub-district selection
//   const handleSubDistrictSelect = (subDistrict) => {
//     console.log(subDistrict);
//     setSelectedSubDistrict(subDistrict);
//     // Clear customer selection and address fields when sub-district changes
//     setSelectedCustomer("");
//     setVillage("");
//     setHamletStreet("");
//     setIsSubDistrictDropdownOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       date: selectedDate,
//       customer: selectedCustomer,
//       subDistrict: selectedSubDistrict,
//       village,
//       hamletStreet,
//     };
//     console.log("Form submitted:", formData);
//     alert("Form submitted! Check console for details.");
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Form</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Sub-District Dropdown */}
//         <div className="relative" ref={subDistrictDropdownRef}>
//           <div className="relative">
//             <button
//               type="button"
//               onClick={() =>
//                 setIsSubDistrictDropdownOpen(!isSubDistrictDropdownOpen)
//               }
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 cursor-pointer hover:border-gray-300 bg-white text-left flex items-center justify-between"
//             >
//               <span
//                 className={
//                   selectedSubDistrict ? "text-gray-900" : "text-gray-500"
//                 }
//               >
//                 {selectedSubDistrict || "Select Sub-District"}
//               </span>
//               <svg
//                 className="w-4 h-4 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//           </div>

//           {isSubDistrictDropdownOpen && (
//             <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
//               {subDistricts.map((subDistrict) => (
//                 <button
//                   key={subDistrict}
//                   type="button"
//                   onClick={() => handleSubDistrictSelect(subDistrict)}
//                   className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
//                 >
//                   {subDistrict}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Customer Dropdown */}
//         <div className="relative" ref={customerDropdownRef}>
//           <div className="relative">
//             <button
//               type="button"
//               onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 cursor-pointer hover:border-gray-300 bg-white text-left flex items-center justify-between"
//             >
//               <span
//                 className={selectedCustomer ? "text-gray-900" : "text-gray-500"}
//               >
//                 {selectedCustomer || "Select Customer"}
//               </span>
//               <svg
//                 className="w-4 h-4 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//             <label
//               className={`absolute left-4 transition-all duration-200 pointer-events-none ${
//                 selectedCustomer || isCustomerDropdownOpen
//                   ? "-top-2 text-xs text-blue-500 bg-white px-1"
//                   : "top-3 text-gray-500"
//               }`}
//             >
//               Customer
//             </label>
//           </div>

//           {isCustomerDropdownOpen && (
//             <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
//               {filteredCustomers.map((customer) => (
//                 <button
//                   key={customer.id}
//                   type="button"
//                   onClick={() => handleCustomerSelect(customer)}
//                   className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
//                 >
//                   <div>
//                     <div className="font-medium">{customer.name}</div>
//                     <div className="text-sm text-gray-500">
//                       {customer.subDistrict}
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Village Input */}
//         <div className="relative">
//           <input
//             type="text"
//             value={village}
//             onChange={(e) => setVillage(e.target.value)}
//             className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
//             placeholder=" "
//           />
//           <label
//             className={`absolute left-4 transition-all duration-200 pointer-events-none ${
//               village
//                 ? "-top-2 text-xs text-blue-500 bg-white px-1"
//                 : "top-3 text-gray-500"
//             }`}
//           >
//             Village
//           </label>
//         </div>

//         {/* Hamlet/Street Input */}
//         <div className="relative">
//           <input
//             type="text"
//             value={hamletStreet}
//             onChange={(e) => setHamletStreet(e.target.value)}
//             className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
//             placeholder=" "
//           />
//           <label
//             className={`absolute left-4 transition-all duration-200 pointer-events-none ${
//               hamletStreet
//                 ? "-top-2 text-xs text-blue-500 bg-white px-1"
//                 : "top-3 text-gray-500"
//             }`}
//           >
//             Hamlet/Street
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
//         >
//           Submit Order
//         </button>
//       </form>
//     </div>
//   );
// };
