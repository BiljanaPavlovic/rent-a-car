const API = "http://localhost:3000/";
const VEHICLES = "vehicles/";
const CUSTOMERS = "customers/";
const EVENTS = "events/";

//get vehicles
export function getVehicles() {
    return fetch(`${API}${VEHICLES}`)
        .then(res => res.json())

}


//get customers
export function getCustomers() {
    return fetch(`${API}${CUSTOMERS}`)
        .then(res => res.json())

}


//get events
export function getEvents() {
    return fetch(`${API}${EVENTS}`)
        .then(res => res.json())

}

//post customer
export function postCustomer(id, name, email, phone) {
    return fetch(`${API}${CUSTOMERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify({ id, name, email, phone })
    }).then(res => res.json())
}

//post vehicle
export function postVehicle(id, brand, model, year, type, seats, image, price, count) {
    return fetch(`${API}${VEHICLES}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify({ id, brand, model, year, type, seats, image, price, count })
    }).then(res => res.json())
}

//post event
export function postEvent(id, startDate, endDate, vehicle, customer) {
    return fetch(`${API}${EVENTS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify({ id, startDate, endDate, vehicle, customer })
    }).then(res => res.json())
}


