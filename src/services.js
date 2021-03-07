const API = "http://localhost:3000/";
const VEHICLES = "vehicles/";
const CUSTOMERS = "customers";
const EVENTS = "events";

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
        method: 'PUT',
        body: JSON.stringify({ id, name, email, phone })
    }).then(res => res.json())
}




//put