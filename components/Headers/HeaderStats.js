import React, { useState } from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      {/* Header */}
      <div className="relative md:pt-12 pb-12 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-6/12 m-4">
                <CardStats
                  statSubtitle="GROSS SALES"
                  statTitle="Rp. 350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-money-bill-wave"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-6/12 m-4">
                <CardStats
                  statSubtitle="NET SALES"
                  statTitle="Rp. 2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-money-bill-wave"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-6/12 m-4">
                <CardStats
                  statSubtitle="GROSS PROFIT"
                  statTitle="Rp. 924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-money-bill-wave"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-6/12 m-4">
                <CardStats
                  statSubtitle="GROSS MARGIN"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-6/12 m-4">
                <CardStats
                  statSubtitle="TRANSACTIONS"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-shopping-cart"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-6/12 m-4">
                <CardStats
                  statSubtitle="AVERAGE SALE PER TRANSACTION"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-money-bill-wave"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
