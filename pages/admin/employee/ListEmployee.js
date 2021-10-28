import CardDate from "components/Cards/CardDate";
import React from "react";
import Admin from "layouts/Admin";

export default function LIstEmployee() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap p-3 justify-end">
          <button className="ml-10 p-3 bg-blue-500 rounded-lg text-white">
            Create ListEmployee
          </button>
        </div>
        <div className="grid grid-cols-4 p-3 bg-gainsboro">
          <h1 className="text-left">Employee Name</h1>
          <h1 className="text-center">Role</h1>
          <h1 className="text-right">Assigned Outlet</h1>
          <h1 className="text-right">Date</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Adi</h1>
          <h1 className="text-center">Cashier</h1>
          <h1 className="text-right">Babeh Steak</h1>
          <h1 className="text-right">01/11/2018</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Rianto</h1>
          <h1 className="text-center">Chef</h1>
          <h1 className="text-right">Babeh Steak</h1>
          <h1 className="text-right">27/06/2017</h1>
        </div>
      </Admin>
    </div>
  );
}
