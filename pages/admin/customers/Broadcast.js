import CardDate from "components/Cards/CardDate";
import Admin from "layouts/Admin";
import React from "react";

export default function Broadcast() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="flex flex-wrap p-3 justify-end">
          <button className="ml-10 p-3 bg-blue-500 rounded-lg text-white">
            Create Broadcast
          </button>
        </div>
        <div className="grid grid-cols-4 p-3 bg-gainsboro">
          <h1 className="text-left">Broadcaster Name</h1>
          <h1 className="text-center">Total Broadcasted</h1>
          <h1 className="text-right">Broadcasted Using</h1>
          <h1 className="text-right">Date</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Adi</h1>
          <h1 className="text-center">120</h1>
          <h1 className="text-right">Whatsapp</h1>
          <h1 className="text-right">17/10/2021 10:45</h1>
        </div>
        <div className="grid grid-cols-4 p-3 ">
          <h1 className="text-left">Rianto</h1>
          <h1 className="text-center">125</h1>
          <h1 className="text-right">Email</h1>
          <h1 className="text-right">18/10/2021 11:50</h1>
        </div>
      </Admin>
    </div>
  );
}
