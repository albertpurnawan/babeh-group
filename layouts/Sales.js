import Reports from "pages/admin/reports";
import React from "react";
import CardDate from "components/Cards/CardDate";

// components

export default function Sales({ children }) {
  return (
    <>
      <Reports />
      <div className="block w-full">
        <CardDate />
        {children}
      </div>
    </>
  );
}
