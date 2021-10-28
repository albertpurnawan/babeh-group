import React from "react";
import Admin from "layouts/Admin";
import CardDate from "components/Cards/CardDate";

export default function ListMenu() {
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
          <h1 className="text-center">Pricing</h1>
          <h1 className="text-right">In Stock</h1>
          <h1 className="text-right">Stock Alert</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Bakso</h1>
          <h1 className="text-center">Berkuah</h1>
          <h1 className="text-center">Rp 15.000</h1>
          <h1 className="text-right">16</h1>
          <h1 className="text-right">5</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Ayam Goreng</h1>
          <h1 className="text-center">Gorengan</h1>
          <h1 className="text-center">Rp 20.000</h1>
          <h1 className="text-right">20</h1>
          <h1 className="text-right">10</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Steak Wagyu</h1>
          <h1 className="text-center">Steak</h1>
          <h1 className="text-center">60.000</h1>
          <h1 className="text-right">10</h1>
          <h1 className="text-right">5</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Kambing Gulai</h1>
          <h1 className="text-center">Berkuah</h1>
          <h1 className="text-center">Rp 25.000</h1>
          <h1 className="text-right">20</h1>
          <h1 className="text-right">10</h1>
        </div>
        <div className="grid grid-cols-5 p-3 ">
          <h1 className="text-left">Ikan Bakar</h1>
          <h1 className="text-center">bakaran</h1>
          <h1 className="text-center">Rp 30.000</h1>
          <h1 className="text-right">30</h1>
          <h1 className="text-right">10</h1>
        </div>
      </Admin>
    </div>
  );
}
