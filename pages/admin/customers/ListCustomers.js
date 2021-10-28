import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function ListCustomers() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap p-3 justify-end">
          <h1 className="p-3 border-2 rounded-md ml-92">Total : 61</h1>
          <button className="ml-10 p-3 bg-blue-500 rounded-lg text-white">
            Create Customer
          </button>
        </div>
        <div className="grid grid-cols-4 p-3 bg-gainsboro">
          <h1 className="text-left">Customer Name</h1>
          <h1 className="text-center">Number Phone/Whatsapp</h1>
          <h1 className="text-right">Email</h1>
          <h1 className="text-right">Date</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Ferdi</h1>
          <h1 className="text-center">081234567890</h1>
          <h1 className="text-right">ferdi@ferdi.com</h1>
          <h1 className="text-right">10/10/2021 15:41</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Matthew</h1>
          <h1 className="text-center">089876543211</h1>
          <h1 className="text-right">matthew@matthew.com</h1>
          <h1 className="text-right">10/10/2021 16:50</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Pieter</h1>
          <h1 className="text-center">085512312344</h1>
          <h1 className="text-right">pieter@pieter.com</h1>
          <h1 className="text-right">11/10/2021 17:25</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Kenzie</h1>
          <h1 className="text-center">089900776655</h1>
          <h1 className="text-right">kenzie@kenzie.com</h1>
          <h1 className="text-right">12/10/2021 10:11</h1>
        </div>
      </Admin>
    </div>
  );
}
