import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function Promos() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap justify-between">
          <div className="grid grid-cols-1 p-3 border-2 border-solid rounded-full cursor-pointer mr-5">
            <h1 className="text-center">
              All Status <i className="fas fa-sort"></i>
            </h1>
          </div>
          <button className="p-3 bg-blue-500 rounded-md text-white">
            Create Promo
          </button>
        </div>
        <div className="grid grid-cols-4 p-3 bg-gainsboro">
          <h1 className="text-left">Promo Name</h1>
          <h1 className="text-center">Time Period</h1>
          <h1 className="text-center">Outlet</h1>
          <h1 className="text-center">Promo Status</h1>
        </div>
        <div className="grid grid-cols-4 p-3">
          <h1 className="text-left">Buy 1 Get 1</h1>
          <h1 className="text-center">18/10/2021 - 25/10/2021</h1>
          <h1 className="text-center">Outlet 1</h1>
          <h1 className="text-center">Active</h1>
        </div>
        <div className="grid grid-cols-4 p-3">
          <h1 className="text-left">Buy 2 Get 30% Discount</h1>
          <h1 className="text-center">10/10/2021 - 18/10/2021</h1>
          <h1 className="text-center">Outlet 1</h1>
          <h1 className="text-center">Inactive</h1>
        </div>
      </Admin>
    </div>
  );
}
