import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function Category() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap justify-end">
          <button className="p-3 bg-blue-500 rounded-md text-white">
            Create Ingredient Category
          </button>
        </div>

        <div className="grid grid-cols-3 p-3 bg-gainsboro">
          <h1 className="text-left">Ingredient Category Name</h1>
          <h1 className="text-left ml-10">Ingredient Stocks</h1>
          <h1></h1>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="grid grid-cols-2 p-3 w-1/2 ">
            <h1 className="text-left">Bahan Beku</h1>
            <h1 className="text-right ">10 Ingredient</h1>
          </div>
          <button className="border-2 rounded-md text-right p-2 hover:bg-blue-300 ml-60">
            Assign to ingredient
          </button>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="grid grid-cols-2 p-3 w-1/2 ">
            <h1 className="text-left">Bahan Kuah</h1>
            <h1 className="text-right ">5 Ingredient</h1>
          </div>
          <button className="border-2 rounded-md text-right p-2 hover:bg-blue-300 ml-60">
            Assign to ingredient
          </button>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="grid grid-cols-2 p-3 w-1/2 ">
            <h1 className="text-left">Bahan Goreng</h1>
            <h1 className="text-right">20 Ingredient</h1>
          </div>
          <button className="border-2 rounded-md text-right p-2 hover:bg-blue-300 ml-60">
            Assign to ingredient
          </button>
        </div>
      </Admin>
    </div>
  );
}
