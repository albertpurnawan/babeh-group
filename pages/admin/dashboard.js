import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import CardDate from "components/Cards/CardDate";
// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <CardDate />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <HeaderStats />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardPageVisits />
      </div>
      <div className="w-full xl:w-8/12 px-4">
        <CardSocialTraffic />
      </div>
    </>
  );
}

Dashboard.layout = Admin;