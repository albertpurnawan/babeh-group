import React from "react";
import Admin from "layouts/Admin";

export default function account() {
  return (
    <div>
      <Admin>
        <div className="block">
          <h1 className="text-2xl">Personal Detail</h1>
          <div className="flex flex-wrap w-full">
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Name:</h1>
              <h1>Jonathan Albert Purnawan</h1>
            </div>
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Address:</h1>
              <h1>Jalan melati raya,anggrek timur</h1>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Email:</h1>
              <h1>albertpurnawan1@gmail.com</h1>
            </div>
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Number Phone:</h1>
              <h1>085156845984</h1>
            </div>
          </div>
          <a
            className="text-lightBlue-600 hover:text-blueGray-300"
            href="/profile"
          >
            More Detail
          </a>
          <h1 className="text-2xl mt-8">Business Detail</h1>
          <div className="flex flex-wrap w-full">
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Business Name:</h1>
              <h1>Babeh Steak and Grill</h1>
            </div>
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Business Address:</h1>
              <h1>Jalan Radar Auri No 100, RT 01/ RW01, Cisalak - Cimanggis</h1>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Email:</h1>
              <h1>babehsteak@gmail.com</h1>
            </div>
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Province:</h1>
              <h1>Jawa Barat</h1>
            </div>
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">City:</h1>
              <h1>Kota Depok</h1>
            </div>
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">District:</h1>
              <h1>Cimanggis</h1>
            </div>
            <div className="grid grid-cols-2 p-3 w-1/2">
              <h1 className="text-gray-400">Postal Code:</h1>
              <h1>13720</h1>
            </div>
          </div>
        </div>
      </Admin>
    </div>
  );
}
