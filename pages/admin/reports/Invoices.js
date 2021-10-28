import React from "react";
import Admin from "layouts/Admin";
import CardDate from "components/Cards/CardDate";
import { createPopper } from "@popperjs/core";

export default function Invoices() {
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
    <div>
      <Admin>
        <CardDate />
        <div className="grid grid-cols-3 p-3 bg-gainsboro">
          <h1 className="text-left">info pelanggan</h1>
          <h1 className="text-center">batas pembayaran</h1>
          <h1 className="text-right">Catatan</h1>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
          className="grid grid-cols-3 p-3 cursor-pointer bg-white group hover:bg-blue-300"
        >
          <h1 className="text-left">info pelanggan</h1>
          <h1 className="text-center">batas pembayaran</h1>
          <h1 className="text-right">Catatan</h1>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
          className="grid grid-cols-3 p-3 cursor-pointer bg-white group hover:bg-blue-300"
        >
          <h1 className="text-left">info pelanggan</h1>
          <h1 className="text-center">batas pembayaran</h1>
          <h1 className="text-right">Catatan</h1>
        </div>

        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "flex flex-wrap" : "hidden") +
            " text-base z-50 float-left py-2  text-left "
          }
        >
          <a
            href="#pablo"
            className={
              "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Edit
          </a>
          <a
            href="#pablo"
            className={
              "text-xs uppercase font-semibold py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={(e) => e.preventDefault()}
          >
            Delete
          </a>
        </div>
      </Admin>
    </div>
  );
}
