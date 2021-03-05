/** @format */

import React from "react";
import "./customers.css";
import CustomerAdding from "./CustomerAdding";
import CustomerProfile from "./CustomerProfile";

export default function CustomerList() {
  return (
    <div>
      <h2>Customers</h2>
      <div className="customers-list">
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
        <CustomerProfile name="John Dou" email="john@doy.com" phone="123456" />
      </div>
      <CustomerAdding />
    </div>
  );
}
