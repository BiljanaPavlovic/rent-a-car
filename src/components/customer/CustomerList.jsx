/** @format */

import React, { useEffect, useState } from "react";
import "./customers.css";
import CustomerProfile from "./CustomerProfile";
import { getCustomers } from "../../services";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function CustomerList() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getCustomers().then((data) => {
      console.log(data);
      setCustomer(data);
    });
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <div className="customers-list">
        {customer.map((customer) => {
          return (
            <CustomerProfile
              key={customer.id}
              name={customer.name}
              email={customer.email}
              phone={customer.phone}
            />
          );
        })}
      </div>
      <Link to="/addcustomer">
        <Button variant="secondary">ADD CUSTOMER</Button>
      </Link>
    </div>
  );
}
