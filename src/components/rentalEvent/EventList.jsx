/** @format */

import React, { useEffect, useState } from "react";
import { getEvents } from "../../services";
import EventProfile from "./EventProfile";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function EventList() {
  const [rent, setRent] = useState([]);

  useEffect(() => {
    getEvents().then((data) => {
      console.log(data);
      setRent(data);
    });
  }, []);

  return (
    <div>
      <h2>Rent Event</h2>
      <div className="event-card-div">
        {rent.map((rent) => {
          return (
            <EventProfile
              key={rent.id}
              start={rent.startDate}
              end={rent.endDate}
              vehicle={rent.vehicle}
              customer={rent.customer}
            />
          );
        })}
      </div>
      <Link to="/addevent">
        <Button variant="secondary">ADD EVENT</Button>
      </Link>
    </div>
  );
}
