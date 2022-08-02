import { useState, useEffect } from "react"

// style
import './TripList.css'


const TripList = () => {

    const [trips, setTrips] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/trips') // fetch data from db.json
            .then(response => response.json()) // returns json data
            .then(json => setTrips(json)) // when there is data - update the state

    }, []) // empty dependancy arry makes sure the function only runs once

    console.log(trips)

    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TripList