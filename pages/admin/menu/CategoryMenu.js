import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function CategoryMenu() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap justify-end">
          <button className="p-3 bg-blue-500 rounded-md text-white">
            Create Category
          </button>
        </div>

        <div className="grid grid-cols-3 p-3 bg-gainsboro">
          <h1 className="text-left">Category Name</h1>
          <h1 className="text-center">Item Stocks</h1>
          <h1></h1>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="grid grid-cols-2 p-3 w-10/12 ">
            <h1 className="text-left">Category Name</h1>
            <h1 className="text-left ml-12">10 Items</h1>
          </div>
          <button className="border-2 rounded-md text-right p-2 hover:bg-blue-300">
            Assign to item
          </button>
        </div>
      </Admin>
    </div>
  );
}
