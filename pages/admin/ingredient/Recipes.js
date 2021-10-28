import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function Recipes() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap p-3 justify-end">
          <h1 className="p-3 border-2 rounded-md ml-92">Total : 61</h1>
          <button className="ml-10 p-3 bg-blue-500 rounded-lg text-white">
            Create Item
          </button>
        </div>
        <div className="grid grid-cols-4 p-3 bg-gainsboro">
          <h1 className="text-left">Item Name</h1>
          <h1 className="text-center">Variant</h1>
          <h1 className="text-center">Ingredient</h1>
          <h1 className="text-right">Ingredient Stock Alert</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Bakso Urat</h1>
          <h1 className="text-center">Bakso</h1>
          <h1 className="text-center">5 Ingredients</h1>
          <h1 className="text-right">16 Low</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Ayam Goreng</h1>
          <h1 className="text-center">Gorengan</h1>
          <h1 className="text-center">3 Ingredients</h1>
          <h1 className="text-right">20 High</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Steak Wagyu</h1>
          <h1 className="text-center">Steak</h1>
          <h1 className="text-center">4 Ingredients</h1>
          <h1 className="text-right">1 Out</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Kambing Gulai</h1>
          <h1 className="text-center">Berkuah</h1>
          <h1 className="text-center">7 Ingredients</h1>
          <h1 className="text-right">20 High</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Ikan Bakar</h1>
          <h1 className="text-center">bakaran</h1>
          <h1 className="text-center">6 Ingredients</h1>
          <h1 className="text-right">30 High</h1>
        </div>
      </Admin>
    </div>
  );
}
