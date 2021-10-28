import CardDate from "components/Cards/CardDate";
import React from "react";
import Admin from "layouts/Admin";
import GeneratePDF from "components/PDF/GeneratePDF";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function PrintReport() {
  return (
    <div>
      <Admin>
        <CardDate />
        <GeneratePDF />
        <div id="print">
          <h1 className="p-2">Report Sheet </h1>
          <h1 className="p-2">Date: 20/9/2021 - 22/9/2021</h1>
          <div className="grid grid-cols-5 p-3 bg-gainsboro">
            <h1 className="text-left">Date</h1>
            <h1 className="text-left">Total Transaction</h1>
            <h1 className="text-center">Gross Sales</h1>
            <h1 className="text-right">Gross Profit</h1>
            <h1 className="text-right">Net Sales</h1>
          </div>
          <div className="grid grid-cols-5 p-3">
            <h1 className="text-left">20/9/2021</h1>
            <h1 className="text-left">124</h1>
            <h1 className="text-center">Rp 4.354.000</h1>
            <h1 className="text-right">Rp 3.987.000</h1>
            <h1 className="text-right">Rp 3.500.000</h1>
          </div>
          <div className="grid grid-cols-5 p-3">
            <h1 className="text-left">21/9/2021</h1>
            <h1 className="text-left">109</h1>
            <h1 className="text-center">Rp 3.540.000</h1>
            <h1 className="text-right">Rp 3.354.000</h1>
            <h1 className="text-right">Rp 3.000.000</h1>
          </div>
          <div className="grid grid-cols-5 p-3">
            <h1 className="text-left">22/9/2021</h1>
            <h1 className="text-left">140</h1>
            <h1 className="text-center">Rp 5.879.000</h1>
            <h1 className="text-right">Rp 5.534.000</h1>
            <h1 className="text-right">Rp 5.100.000</h1>
          </div>
          <FooterAdmin />
        </div>
      </Admin>
    </div>
  );
}
