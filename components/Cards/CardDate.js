import React from "react";
import DateDropdown from "components/Dropdowns/DateDropdown.js";
import OutletDropdown from "components/Dropdowns/OutletDropdown.js";

export default function CardDate() {
  return (
    <div className="block">
      <div className="static mb-4">
        <OutletDropdown />
      </div>
      <div className="static mb-4">
        <DateDropdown />
      </div>
    </div>
  );
}
