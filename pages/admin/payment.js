import Admin from "layouts/Admin";
import React from "react";

export default function payment() {
  return (
    <div>
      <Admin>
        <div className="grid grid-cols-4 p-3 bg-gainsboro">
          <h1 className="text-left">Payment Method</h1>
          <h1 className="text-center">MDR</h1>
          <h1 className="text-center">Status</h1>
          <h1 className="text-right">Outlet</h1>
        </div>
        <div className="grid grid-cols-4 p-3">
          <img
            alt="..."
            src="/img/ovo.jpg"
            className="align-middle border-none absolute"
            width="80px"
          />
          <h1>OVO</h1>
          <h1 className="text-center">1,5%</h1>
          <h1 className="text-center text-green-400">Active</h1>
          <h1 className="text-right">Babeh Steak</h1>
        </div>
        <div className="grid grid-cols-4 p-3">
          <img
            alt="..."
            src="/img/gopay.jpg"
            className="align-middle border-none absolute"
            width="80px"
          />
          <h1>Gopay</h1>
          <h1 className="text-center">0,7%</h1>
          <h1 className="text-center text-green-400">Active</h1>
          <h1 className="text-right">Babeh Steak</h1>
        </div>
        <div className="grid grid-cols-4 p-3">
          <img
            alt="..."
            src="/img/linkaja.png"
            className="align-middle border-none absolute"
            width="80px"
          />
          <h1 className="text-white">LinkAja</h1>
          <h1 className="text-center">0,7%</h1>
          <h1 className="text-center text-red-500">Inactive</h1>
          <h1 className="text-right">Babeh Steak</h1>
        </div>
        <div className="grid grid-cols-4 p-3">
          <img
            alt="..."
            src="/img/shopeepay.jpg"
            className="align-middle border-none absolute"
            width="80px"
          />
          <h1>ShopeePay</h1>
          <h1 className="text-center">0,7%</h1>
          <h1 className="text-center text-green-400">Active</h1>
          <h1 className="text-right">Babeh Steak</h1>
        </div>
        <div className="grid grid-cols-4 p-3">
          <img
            alt="..."
            src="/img/dana.jpg"
            className="align-middle border-none absolute"
            width="80px"
          />
          <h1>Dana</h1>
          <h1 className="text-center">0,7%</h1>
          <h1 className="text-center text-red-500">Inactive</h1>
          <h1 className="text-right">Babeh Steak</h1>
        </div>
      </Admin>
    </div>
  );
}
