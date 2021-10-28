import React from "react";
import Admin from "layouts/Admin.js";
import Sales from "layouts/Sales.js";
import Link from "next/link";
export default function ItemSales() {
  return (
    <div>
      <Admin>
        <div className="flex flex-1">
          <Sales>
            <div className="relative block w-full px-6 py-6">
              <div className="flex flex-wrap md:flex-nowrap md:overflow-hidden md:overflow-y-scroll md:flex-col">
                <div className="grid grid-cols-10 bg-gainsboro font-bold border-r-2 border-black">
                  <a className="text-left p-5">
                    Name <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    Name <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    sadasasdasdasd <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    Namsdaadsasde <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    Nasdasdasdasme <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    Name <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    Name <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    Name <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    Name <i className="fas fa-sort "></i>
                  </a>
                  <a className="text-left p-5">
                    Name <i className="fas fa-sort "></i>
                  </a>
                </div>
                <div className="grid grid-cols-10 p-5 bg-gainsboro font-bold">
                  <a className="text-left ">
                    SKU<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    Category<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    Item Sold<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    Item Refunded<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    Gross Sales<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    Refund<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    Net Sales<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    COGS<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    Gross Profit<i className="fas fa-sort"></i>
                  </a>
                  <a className="text-left">
                    Gross Margin<i className="fas fa-sort"></i>
                  </a>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="grid grid-cols-1 font-bold p-5 border-r-2 border-black">
                  <h1 className="text-left">Name</h1>
                </div>
                <div className="grid grid-cols-10 p-5 font-bold">
                  <h1 className="text-left ">SKU</h1>
                  <h1 className="text-left">Category</h1>
                  <h1 className="text-left">Item Sold</h1>
                  <h1 className="text-left">Item Refunded</h1>
                  <h1 className="text-left">Gross Sales</h1>
                  <h1 className="text-left">Refund</h1>
                  <h1 className="text-left">Net Sales</h1>
                  <h1 className="text-left">COGS</h1>
                  <h1 className="text-left">Gross Profit</h1>
                  <h1 className="text-left">Gross Margin</h1>
                </div>
              </div>
            </div>
          </Sales>
        </div>
      </Admin>
    </div>
  );
}
