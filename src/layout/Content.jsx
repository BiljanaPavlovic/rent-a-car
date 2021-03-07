/** @format */

import React from "react";
import CustomerList from "../components/customer/CustomerList";
import EventList from "../components/rentalEvent/EventList";
import VehiclesList from "../components/vehicle/VehiclesList";
import { Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import VehicleAdding from "../components/vehicle/VehicleAdding";
import CustomerAdding from "../components/customer/CustomerAdding";

export default function Content() {
  return (
    <div>
      <Link to="/vehicles">
        <Button variant="secondary">Vehicles</Button>{" "}
      </Link>
      <Link to="/customers">
        <Button variant="secondary">Customers</Button>{" "}
      </Link>
      <Link to="/events">
        <Button variant="secondary">Rent Events</Button>
      </Link>

      <Switch>
        <Route path="/vehicles" component={VehiclesList} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/events" component={EventList} />
        <Route path="/addvehicle" component={VehicleAdding} />
        <Route path="/addcustomer" component={CustomerAdding} />
      </Switch>
    </div>
  );
}
