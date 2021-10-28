import React from "react";
import Admin from "layouts/Admin";
import CardDate from "components/Cards/CardDate";

export default function Transactions() {
  return (
    <div>
      <Admin>
        <div className="block">
          <CardDate />
          <div className="border-2 p-5">
            <div className="grid grid-cols-3 p-3 text-center">
              <h1>364</h1>
              <h1>Rp. 10.000</h1>
              <h1>Rp. 20.000</h1>
            </div>
            <div className="grid grid-cols-3 p-3 text-center">
              <h1>Transactions</h1>
              <h1>Total Collected</h1>
              <h1>Net Sales</h1>
            </div>
          </div>
          <div className="flex flex-wrap p-3 justify-between bg-gainsboro">
            <h1>Day, Month date, year</h1>
            <h1>total</h1>
          </div>
          <div className="grid grid-cols-5 p-3">
            <h1 className="text-left">outlet</h1>
            <h1 className="text-center">outlet</h1>
            <h1 className="text-center">outlet </h1>
            <h1 className="text-center">outlet</h1>
            <h1 className="text-right">outlet</h1>
          </div>
        </div>
      </Admin>
    </div>
  );
}
