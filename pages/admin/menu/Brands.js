import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function Brands() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap justify-end">
          <button className="p-3 bg-blue-500 rounded-md text-white">
            Create Brand
          </button>
        </div>
        <div className="grid grid-cols-3 p-3 bg-gainsboro">
          <h1 className="text-left">Brand Name</h1>
          <h1 className="text-center">Item Stock</h1>
          <h1 className="text-right">Status</h1>
        </div>
        <div className="grid grid-cols-3 p-3">
          <h1 className="text-left">Cubo</h1>
          <h1 className="text-center">50</h1>
          <h1 className="text-right text-green-400">Active </h1>
        </div>
        <div className="grid grid-cols-3 p-3">
          <h1 className="text-left">Kaluochi</h1>
          <h1 className="text-center">0</h1>
          <h1 className="text-right text-red-400">Inactive</h1>
        </div>
      </Admin>
    </div>
  );
}
