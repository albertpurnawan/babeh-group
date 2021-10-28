import React, { useState } from "react";

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
  };
  return (
    <>
      <div className="border-2 p-2 placeholder-black text-black relative bg-white border-black rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10">
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
          <i className="pr-4 fas fa-home"></i>
          Outlet
          <i className="pl-4 fas fa-chevron-down"></i>
        </a>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50  w-full"
          }
        >
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black"
            }
            onClick={(e) => e.preventDefault()}
          >
            Action
          </a>
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black"
            }
            onClick={(e) => e.preventDefault()}
          >
            Another action
          </a>
        </div>
      </div>
    </>
  );
};

export default EmployeeDropdown;
