/** @format */

import React from "react";
import CustomerList from "../components/customer/CustomerList";
import EventList from "../components/rentalEvent/EventList";
import VehiclesList from "../components/vehicle/VehiclesList";
import { Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import VehicleAdding from "../components/vehicle/VehicleAdding";
import CustomerAdding from "../components/customer/CustomerAdding";
import "./content.css";
import EventAdding from "../components/rentalEvent/EventAdding";
export default function Content() {
  return (
    <div>
      <p className="intro-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt porro
        sit iure culpa distinctio, vitae aliquid recusandae odio numquam
        sapiente maxime adipisci laudantium dolor quisquam quis. Nobis
        voluptates distinctio, impedit officia expedita ab maxime cum tenetur
        itaque veritatis quibusdam qui eum dolorem unde corporis praesentium
        eveniet, sunt reprehenderit? Asperiores hic delectus incidunt autem
        explicabo mollitia ipsa qui voluptate totam voluptatem voluptatibus in,
        minima quo maxime consequatur ipsam quaerat veritatis fuga rem
        repudiandae, tempore odit, sequi officiis. Consectetur, eius ipsum qui
        harum illo velit dolor facilis amet soluta dolorum assumenda delectus
        iure repellendus architecto magni fugit tempora! Maxime, libero.
        Molestias, incidunt!
      </p>
      <div className="content-btn-div">
        <Link to="/vehicles">
          <Button variant="secondary" className="content-btn">
            Vehicles
          </Button>{" "}
        </Link>
        <Link to="/customers">
          <Button variant="secondary" className="content-btn">
            Customers
          </Button>{" "}
        </Link>
        <Link to="/events">
          <Button variant="secondary" className="content-btn">
            Rent Events
          </Button>
        </Link>
      </div>
      <Switch>
        <Route path="/vehicles" component={VehiclesList} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/events" component={EventList} />
        <Route path="/addvehicle" component={VehicleAdding} />
        <Route path="/addcustomer" component={CustomerAdding} />
        <Route path="/addevent" component={EventAdding} />
      </Switch>
    </div>
  );
}
