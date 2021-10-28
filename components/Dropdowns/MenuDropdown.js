import React from "react";
import { createPopper } from "@popperjs/core";

const MenuDropdown = () => {
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
            <i className="fas fa-hamburger mr-2 text-sm text-blueGray-300"></i>{" "}
            Menu
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
              href="/admin/menu/ListMenu"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              List menu
            </a>
            <a
              href="/admin/menu/CategoryMenu"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              Category menu
            </a>
            <a
              href="/admin/menu/Promos"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              Promos
            </a>
            <a
              href="/admin/menu/Discounts"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              Discounts
            </a>
            <a
              href="/admin/menu/Taxes"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              Taxes
            </a>
            <a
              href="/admin/menu/SalesType"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              Sales type
            </a>
            <a
              href="/admin/menu/Brands"
              className={
                "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              Brands
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MenuDropdown;
