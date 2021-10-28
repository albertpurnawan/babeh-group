import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function Discounts() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap justify-between">
          <div className="grid grid-cols-1 p-3 border-2 border-solid rounded-full cursor-pointer mr-5">
            <h1 className="text-center">
              All Outlets <i className="fas fa-sort"></i>
            </h1>
          </div>
          <button className="p-3 bg-blue-500 rounded-md text-white">
            Create Discount
          </button>
        </div>
        <div className="grid grid-cols-3 p-3 bg-gainsboro">
          <h1 className="text-left">Discount Name</h1>
          <h1 className="text-center">Amount</h1>
          <h1 className="text-center">Outlet</h1>
        </div>
        <div className="grid grid-cols-3 p-3">
          <h1 className="text-left">Go food</h1>
          <h1 className="text-center">20%</h1>
          <h1 className="text-center">Outlet 1</h1>
        </div>
        <div className="grid grid-cols-3 p-3">
          <h1 className="text-left">Hari pelanggan nasional</h1>
          <h1 className="text-center">50%</h1>
          <h1 className="text-center">Outlet 1</h1>
        </div>
      </Admin>
    </div>
  );
}
