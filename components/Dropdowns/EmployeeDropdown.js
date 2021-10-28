import React from "react";
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
      <ul className="md:flex-col md:min-w-full flex flex-col list-none">
        <li className="items-center">
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
            <i className="fas fa-user-friends mr-2 text-sm text-blueGray-300"></i>{" "}
            Employees
            <i
              className={"fas fa-chevron-down = ml-2 text-sm text-blueGray-300"}
            ></i>
          </a>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "text-base z-50 float-left py-2 list-none text-left"
            }
          >
            <a
              href="/admin/employee/ListEmployee"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              List employee
            </a>
            <a
              href="EmployeeAccess"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              Employee access
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default EmployeeDropdown;
