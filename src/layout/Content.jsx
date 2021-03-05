/** @format */

import React from "react";
import CustomerList from "../components/customer/CustomerList";
import VehiclesList from "../components/vehicle/VehiclesList";

export default function Content() {
  return (
    <div>
      <CustomerList />
      <VehiclesList />
    </div>
  );
}
