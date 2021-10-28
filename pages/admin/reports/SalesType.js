import React from "react";

import Admin from "layouts/Admin.js";
import Sales from "layouts/Sales.js";
export default function SalesType() {
  return (
    <div className="">
      <Admin>
        <div className="flex flex-1">
          <Sales>
            <div className="relative block w-full px-6 py-6">
              <div className="grid grid-cols-3 p-5 bg-gainsboro font-bold">
                <h1 className="text-left">Sales Type</h1>
                <h1 className="text-center">Total Transaction</h1>
                <h1 className="text-right">Total Gain</h1>
              </div>
              <div className="p-5 mb-6">
                <div className="grid grid-cols-3 justify-between px-2 mb-4">
                  <h1 className="text-left">Dine in </h1>
                  <h1 className="text-center">1</h1>
                  <h1 className="text-right">amount</h1>
                </div>
                <div className="grid grid-cols-3 justify-between px-2 mb-2">
                  <h1 className="text-left">Delivery Order</h1>
                  <h1 className="text-center">1</h1>
                  <h1 className="text-right">amount</h1>
                </div>
                <hr className="border-solid border-2" />
                <div className="grid grid-cols-3 justify-between px-2 mb-4 font-bold">
                  <h1 className="text-left">Total</h1>
                  <h1 className="text-center">1</h1>
                  <h1 className="text-right">amount</h1>
                </div>
              </div>
            </div>
          </Sales>
        </div>
      </Admin>
    </div>
  );
}
