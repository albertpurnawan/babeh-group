import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function SalesType() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap justify-end">
          <button className="p-3 bg-blue-500 rounded-md text-white">
            Create Tax
          </button>
        </div>
        <div className="grid grid-cols-3 p-3 bg-gainsboro">
          <h1 className="text-left">Name</h1>
          <h1 className="text-center">Tax</h1>
          <h1 className="text-right">Status</h1>
        </div>
        <div className="grid grid-cols-3 p-3">
          <h1 className="text-left">Delivery Order</h1>
          <h1 className="text-center">5%</h1>
          <h1 className="text-right text-green-400">Active </h1>
        </div>
        <div className="grid grid-cols-3 p-3">
          <h1 className="text-left">Dine In</h1>
          <h1 className="text-center">10%</h1>
          <h1 className="text-right text-green-400">Active</h1>
        </div>
      </Admin>
    </div>
  );
}
