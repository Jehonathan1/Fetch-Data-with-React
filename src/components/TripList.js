import { useState } from "react"


const TripList = () => {

    const [trips, setTrips] = useState([])
    console.log(trips)
    fetch('http://localhost:3000/trips') // fetch data from db.json
        .then(response => response.json()) // returns json data
        .then(json => setTrips(json)) // when there is data - update the state


    return (
        <h2>Trip List</h2>
    )
}

export default TripList