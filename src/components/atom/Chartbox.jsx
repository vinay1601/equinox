"use client";
import React, { useState } from "react";

const Chartbox = () => {
  const [activeTab, setActiveTab] = useState("Sites");

  const Tab = ["Sites", "Orders", "VRs", "Reports", "Invoices", "PI"];

  const dummyData = {
    Sites: [
      {
        site: "Site A",
        state: "Maharashtra",
        city: "Mumbai",
        revenue: "₹1,00,000",
        orders: 50,
        lastOrder: "2025-06-20",
        createdAt: "2024-01-10",
      },
      {
        site: "Site B",
        state: "Gujarat",
        city: "Ahmedabad",
        revenue: "₹75,000",
        orders: 30,
        lastOrder: "2025-06-15",
        createdAt: "2024-03-08",
      },
      {
        site: "Site C",
        state: "Karnataka",
        city: "Bangalore",
        revenue: "₹90,000",
        orders: 40,
        lastOrder: "2025-06-10",
        createdAt: "2024-02-20",
      },
      {
        site: "Site D",
        state: "Rajasthan",
        city: "Jaipur",
        revenue: "₹60,000",
        orders: 25,
        lastOrder: "2025-05-22",
        createdAt: "2024-04-11",
      },
      {
        site: "Site E",
        state: "Punjab",
        city: "Ludhiana",
        revenue: "₹85,000",
        orders: 35,
        lastOrder: "2025-05-30",
        createdAt: "2024-05-12",
      },
      {
        site: "Site F",
        state: "West Bengal",
        city: "Kolkata",
        revenue: "₹95,000",
        orders: 45,
        lastOrder: "2025-06-05",
        createdAt: "2024-03-19",
      },
      {
        site: "Site G",
        state: "Tamil Nadu",
        city: "Chennai",
        revenue: "₹1,10,000",
        orders: 60,
        lastOrder: "2025-06-18",
        createdAt: "2024-01-25",
      },
      {
        site: "Site H",
        state: "Telangana",
        city: "Hyderabad",
        revenue: "₹1,20,000",
        orders: 70,
        lastOrder: "2025-06-19",
        createdAt: "2024-02-08",
      },
    ],
    Orders: [
      {
        site: "Order #101",
        state: "Delhi",
        city: "New Delhi",
        revenue: "₹5,000",
        orders: 1,
        lastOrder: "2025-06-21",
        createdAt: "2025-06-01",
      },
      {
        site: "Order #102",
        state: "Maharashtra",
        city: "Pune",
        revenue: "₹8,000",
        orders: 2,
        lastOrder: "2025-06-20",
        createdAt: "2025-05-29",
      },
      {
        site: "Order #103",
        state: "Uttar Pradesh",
        city: "Lucknow",
        revenue: "₹6,500",
        orders: 1,
        lastOrder: "2025-06-18",
        createdAt: "2025-05-20",
      },
      {
        site: "Order #104",
        state: "Kerala",
        city: "Kochi",
        revenue: "₹9,000",
        orders: 3,
        lastOrder: "2025-06-17",
        createdAt: "2025-05-18",
      },
      {
        site: "Order #105",
        state: "Bihar",
        city: "Patna",
        revenue: "₹4,500",
        orders: 1,
        lastOrder: "2025-06-15",
        createdAt: "2025-05-12",
      },
      {
        site: "Order #106",
        state: "Assam",
        city: "Guwahati",
        revenue: "₹7,200",
        orders: 2,
        lastOrder: "2025-06-13",
        createdAt: "2025-05-05",
      },
      {
        site: "Order #107",
        state: "Chhattisgarh",
        city: "Raipur",
        revenue: "₹5,700",
        orders: 1,
        lastOrder: "2025-06-11",
        createdAt: "2025-05-01",
      },
      {
        site: "Order #108",
        state: "Jharkhand",
        city: "Ranchi",
        revenue: "₹6,800",
        orders: 2,
        lastOrder: "2025-06-10",
        createdAt: "2025-04-25",
      },
    ],
    VRs: [
      {
        site: "VR #201",
        state: "Delhi",
        city: "New Delhi",
        revenue: "₹12,000",
        orders: 2,
        lastOrder: "2025-06-21",
        createdAt: "2024-12-01",
      },
      {
        site: "VR #202",
        state: "Haryana",
        city: "Gurgaon",
        revenue: "₹10,000",
        orders: 1,
        lastOrder: "2025-06-19",
        createdAt: "2025-01-15",
      },
      {
        site: "VR #203",
        state: "Maharashtra",
        city: "Mumbai",
        revenue: "₹9,000",
        orders: 1,
        lastOrder: "2025-06-18",
        createdAt: "2025-02-10",
      },
      {
        site: "VR #204",
        state: "Karnataka",
        city: "Mysore",
        revenue: "₹11,000",
        orders: 2,
        lastOrder: "2025-06-16",
        createdAt: "2025-02-22",
      },
      {
        site: "VR #205",
        state: "Goa",
        city: "Panaji",
        revenue: "₹8,500",
        orders: 1,
        lastOrder: "2025-06-15",
        createdAt: "2025-03-05",
      },
      {
        site: "VR #206",
        state: "Odisha",
        city: "Bhubaneswar",
        revenue: "₹7,500",
        orders: 1,
        lastOrder: "2025-06-14",
        createdAt: "2025-03-15",
      },
      {
        site: "VR #207",
        state: "MP",
        city: "Indore",
        revenue: "₹6,800",
        orders: 1,
        lastOrder: "2025-06-13",
        createdAt: "2025-03-20",
      },
      {
        site: "VR #208",
        state: "Himachal",
        city: "Shimla",
        revenue: "₹10,200",
        orders: 2,
        lastOrder: "2025-06-12",
        createdAt: "2025-04-01",
      },
    ],
    Reports: [
      {
        site: "Report #301",
        state: "Delhi",
        city: "New Delhi",
        revenue: "₹1,000",
        orders: 1,
        lastOrder: "2025-06-01",
        createdAt: "2025-01-01",
      },
      {
        site: "Report #302",
        state: "Punjab",
        city: "Amritsar",
        revenue: "₹1,500",
        orders: 1,
        lastOrder: "2025-06-02",
        createdAt: "2025-01-05",
      },
      {
        site: "Report #303",
        state: "Rajasthan",
        city: "Jodhpur",
        revenue: "₹1,200",
        orders: 1,
        lastOrder: "2025-06-03",
        createdAt: "2025-01-10",
      },
      {
        site: "Report #304",
        state: "Bihar",
        city: "Gaya",
        revenue: "₹1,800",
        orders: 1,
        lastOrder: "2025-06-04",
        createdAt: "2025-01-15",
      },
      {
        site: "Report #305",
        state: "MP",
        city: "Bhopal",
        revenue: "₹2,000",
        orders: 1,
        lastOrder: "2025-06-05",
        createdAt: "2025-01-20",
      },
      {
        site: "Report #306",
        state: "UP",
        city: "Kanpur",
        revenue: "₹2,100",
        orders: 1,
        lastOrder: "2025-06-06",
        createdAt: "2025-01-25",
      },
      {
        site: "Report #307",
        state: "Gujarat",
        city: "Surat",
        revenue: "₹1,900",
        orders: 1,
        lastOrder: "2025-06-07",
        createdAt: "2025-02-01",
      },
      {
        site: "Report #308",
        state: "WB",
        city: "Howrah",
        revenue: "₹1,300",
        orders: 1,
        lastOrder: "2025-06-08",
        createdAt: "2025-02-05",
      },
    ],
    Invoices: [
      {
        site: "Invoice #401",
        state: "Delhi",
        city: "New Delhi",
        revenue: "₹3,000",
        orders: 1,
        lastOrder: "2025-05-01",
        createdAt: "2025-02-01",
      },
      {
        site: "Invoice #402",
        state: "Karnataka",
        city: "Hubli",
        revenue: "₹3,500",
        orders: 1,
        lastOrder: "2025-05-02",
        createdAt: "2025-02-03",
      },
      {
        site: "Invoice #403",
        state: "Gujarat",
        city: "Rajkot",
        revenue: "₹4,000",
        orders: 1,
        lastOrder: "2025-05-03",
        createdAt: "2025-02-05",
      },
      {
        site: "Invoice #404",
        state: "Punjab",
        city: "Jalandhar",
        revenue: "₹2,500",
        orders: 1,
        lastOrder: "2025-05-04",
        createdAt: "2025-02-08",
      },
      {
        site: "Invoice #405",
        state: "Goa",
        city: "Margao",
        revenue: "₹3,200",
        orders: 1,
        lastOrder: "2025-05-05",
        createdAt: "2025-02-10",
      },
      {
        site: "Invoice #406",
        state: "Odisha",
        city: "Cuttack",
        revenue: "₹3,800",
        orders: 1,
        lastOrder: "2025-05-06",
        createdAt: "2025-02-15",
      },
      {
        site: "Invoice #407",
        state: "Chhattisgarh",
        city: "Bilaspur",
        revenue: "₹3,000",
        orders: 1,
        lastOrder: "2025-05-07",
        createdAt: "2025-02-18",
      },
      {
        site: "Invoice #408",
        state: "MP",
        city: "Gwalior",
        revenue: "₹2,700",
        orders: 1,
        lastOrder: "2025-05-08",
        createdAt: "2025-02-20",
      },
    ],
    PI: [
      {
        site: "PI #501",
        state: "Delhi",
        city: "New Delhi",
        revenue: "₹6,000",
        orders: 1,
        lastOrder: "2025-04-01",
        createdAt: "2025-01-01",
      },
      {
        site: "PI #502",
        state: "Maharashtra",
        city: "Nagpur",
        revenue: "₹5,800",
        orders: 1,
        lastOrder: "2025-04-02",
        createdAt: "2025-01-03",
      },
      {
        site: "PI #503",
        state: "Rajasthan",
        city: "Udaipur",
        revenue: "₹6,200",
        orders: 1,
        lastOrder: "2025-04-03",
        createdAt: "2025-01-05",
      },
      {
        site: "PI #504",
        state: "Kerala",
        city: "Trivandrum",
        revenue: "₹5,500",
        orders: 1,
        lastOrder: "2025-04-04",
        createdAt: "2025-01-07",
      },
      {
        site: "PI #505",
        state: "UP",
        city: "Varanasi",
        revenue: "₹6,100",
        orders: 1,
        lastOrder: "2025-04-05",
        createdAt: "2025-01-09",
      },
      {
        site: "PI #506",
        state: "Assam",
        city: "Silchar",
        revenue: "₹5,700",
        orders: 1,
        lastOrder: "2025-04-06",
        createdAt: "2025-01-11",
      },
      {
        site: "PI #507",
        state: "WB",
        city: "Darjeeling",
        revenue: "₹6,400",
        orders: 1,
        lastOrder: "2025-04-07",
        createdAt: "2025-01-13",
      },
      {
        site: "PI #508",
        state: "Telangana",
        city: "Warangal",
        revenue: "₹5,600",
        orders: 1,
        lastOrder: "2025-04-08",
        createdAt: "2025-01-15",
      },
    ],
  };

  return (
    <div className="px-0 md:px-5">
      <div className="flex space-x-4 md:space-x-6 text-sm md:pl-8">
        {Tab.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-bold ${
              tab === activeTab
                ? "border-b-4 border-blue-600 text-black pb-2"
                : "pb-2 text-gray-400 font-semibold"
            } cursor-pointer`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto border rounded shadow-sm mt-5">
        <table className="w-full text-sm text-left">
          <thead className="bg-white text-gray-700 font-medium">
            <tr>
              <th className="px-4 py-3">Site Name</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Revenue</th>
              <th className="px-4 py-3">Total Orders</th>
              <th className="px-4 py-3">Last Order</th>
              <th className="px-4 py-3">Created At</th>
            </tr>
          </thead>
          <tbody>
            {dummyData[activeTab] && dummyData[activeTab].length > 0 ? (
              dummyData[activeTab].map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } border-t`}
                >
                  <td className="px-4 py-2 text-gray-600">{item.site}</td>
                  <td className="px-4 py-2 text-gray-600">{item.state}</td>
                  <td className="px-4 py-2 text-gray-600">{item.city}</td>
                  <td className="px-4 py-2 text-gray-600">{item.revenue}</td>
                  <td className="px-4 py-2 text-gray-600">{item.orders}</td>
                  <td className="px-4 py-2 text-gray-600">{item.lastOrder}</td>
                  <td className="px-4 py-2 text-gray-600">{item.createdAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-4 text-center text-gray-400">
                  No data available for {activeTab}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Chartbox;
