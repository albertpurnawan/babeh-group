import React from "react";
import Admin from "layouts/Admin";
import CardDate from "components/Cards/CardDate";
export default function Shift() {
  return (
    <div>
      <Admin>
        <CardDate />
        <div className="grid grid-cols-6 p-3 bg-gainsboro">
          <h1 className="text-left">Name</h1>
          <h1 className="text-right">Start Time</h1>
          <h1 className="text-right">End Time</h1>
          <h1 className="text-right">Total Expected</h1>
          <h1 className="text-right">Total Actual</h1>
          <h1 className="text-right">Difference</h1>
        </div>
        <div className="grid grid-cols-6 p-3">
          <h1 className="text-left">Jonathan Albert</h1>
          <h1 className="text-right">18/10/2021 11:00</h1>
          <h1 className="text-right">18/10/2021 21:00</h1>
          <h1 className="text-right">Rp 3.000.000</h1>
          <h1 className="text-right">Rp 3.000.000</h1>
          <h1 className="text-right">Rp 0</h1>
        </div>
        <div className="grid grid-cols-6 p-3">
          <h1 className="text-left">Jonathan Albert</h1>
          <h1 className="text-right">18/10/2021 11:00</h1>
          <h1 className="text-right">18/10/2021 21:00</h1>
          <h1 className="text-right">Rp 3.000.000</h1>
          <h1 className="text-right">Rp 3.000.000</h1>
          <h1 className="text-right">Rp 0</h1>
        </div>
        <div className="grid grid-cols-6 p-3">
          <h1 className="text-left">Jonathan Albert</h1>
          <h1 className="text-right">18/10/2021 11:00</h1>
          <h1 className="text-right">18/10/2021 21:00</h1>
          <h1 className="text-right">Rp 3.000.000</h1>
          <h1 className="text-right">Rp 3.000.000</h1>
          <h1 className="text-right">Rp 0</h1>
        </div>
      </Admin>
    </div>
  );
}
