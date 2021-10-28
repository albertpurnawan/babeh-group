import React from "react";

import Admin from "layouts/Admin.js";
import Sales from "layouts/Sales.js";
export default function SalesSummary() {
  return (
    <div>
      <Admin>
        <div className="flex flex-1">
          <Sales>
            <div className="block w-full px-6 py-6">
              <div className="flex flex-1 p-8 space-x-6 bg-gainsboro"></div>
              <div className="p-5 mb-6">
                <div className="flex flex-1 justify-between mb-4">
                  <h1>Gross Sales</h1>
                  <h1>amount</h1>
                </div>
                <div className="flex flex-1 justify-between mb-4">
                  <h1>Discounts</h1>
                  <h1>amount</h1>
                </div>
                <div className="flex flex-1 justify-between mb-2">
                  <h1>Refunds</h1>
                  <h1>amount</h1>
                </div>
                <hr className="border-solid border-2" />
                <div className="flex flex-1 justify-between mb-4 font-bold">
                  <h1>Net Sales</h1>
                  <h1>amount</h1>
                </div>
                <div className="flex flex-1 justify-between mb-4">
                  <h1>Gratuity</h1>
                  <h1>amount</h1>
                </div>
                <div className="flex flex-1 justify-between mb-4">
                  <h1>Tax</h1>
                  <h1>amount</h1>
                </div>
                <div className="flex flex-1 justify-between mb-2">
                  <h1>Rounding</h1>
                  <h1>amount</h1>
                </div>
                <hr className="border-solid border-2" />
                <div className="flex flex-1 justify-between mb-4 font-bold">
                  <h1>Total Collected</h1>
                  <h1>amount</h1>
                </div>
              </div>
            </div>
          </Sales>
        </div>
      </Admin>
    </div>
  );
}
