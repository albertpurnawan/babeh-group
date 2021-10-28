import Admin from "layouts/Admin";
import React from "react";
import CardDate from "components/Cards/CardDate";

export default function ListIngredient() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap p-3">
          <div className="grid grid-cols-1 p-3 border-2 border-solid rounded-full cursor-pointer mr-5">
            <h1 className="text-center">
              All Categories <i className="fas fa-sort"></i>
            </h1>
          </div>
          <div className="grid grid-cols-1 p-3 border-2 border-solid rounded-full cursor-pointer">
            <h1 className="text-center">
              All Inventory <i className="fas fa-sort"></i>
            </h1>
          </div>
          <h1 className="p-3 border-2 rounded-md ml-92">Total : 61</h1>
          <button className="ml-10 p-3 bg-blue-500 rounded-lg text-white">
            Create Item
          </button>
        </div>
        <div className="grid grid-cols-5 p-3 bg-gainsboro">
          <h1 className="text-left">Name</h1>
          <h1 className="text-center">Category</h1>
          <h1 className="text-center">In Stock</h1>
          <h1 className="text-right">Unit</h1>
          <h1 className="text-right">Stock Alert</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Ayam</h1>
          <h1 className="text-center">Daging</h1>
          <h1 className="text-center">2.000</h1>
          <h1 className="text-right">Gram(gr)</h1>
          <h1 className="text-right">1.000</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Wagyu</h1>
          <h1 className="text-center">Daging</h1>
          <h1 className="text-center">4.000</h1>
          <h1 className="text-right">Gram(gr)</h1>
          <h1 className="text-right">500</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Kambing</h1>
          <h1 className="text-center">Daging</h1>
          <h1 className="text-center">2.500</h1>
          <h1 className="text-right">Gram(gr)</h1>
          <h1 className="text-right">1.000</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Ikan</h1>
          <h1 className="text-center">Daging</h1>
          <h1 className="text-center">3.000</h1>
          <h1 className="text-right">Gram(gr)</h1>
          <h1 className="text-right">1.000</h1>
        </div>
      </Admin>
    </div>
  );
}
