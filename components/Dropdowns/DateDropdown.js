import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { createPopper } from "@popperjs/core";

const EmployeeDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
    setStartDate("");
    setEndDate("");
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <>
      <div className="border-2 p-2 placeholder-black text-black bg-white border-black rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10 relative">
        <a
          href="#pablo"
          className="text-xs uppercase py-3 font-bold block hover:text-blueGray-500"
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <i className="pr-4 fas fa-calendar-alt"></i>
          Date
          <i className="pl-4 fas fa-chevron-down"></i>
        </a>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block absolute" : "hidden ") +
            "bg-white w-full md:w-1/2 xl:md:w-3/12"
          }
        >
          <DateRangePicker
            ranges={[selectionRange]}
            maxDate={new Date()}
            onChange={handleSelect}
            className="relative w-full"
          />
          <button className="flex-grow text-blueGray-500">Set</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover();
            }}
            className="flex-grow text-blue-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeDropdown;
