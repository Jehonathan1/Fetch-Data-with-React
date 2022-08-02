import { useState, useEffect } from "react"

// style
import './TripList.css'


const TripList = () => {

    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')

    useEffect(() => {

        fetch(url) // fetch data from db.json
            .then(response => response.json()) // returns json data
            .then(json => setTrips(json)) // when there is data - update the state

    }, [url]) // url as dependancy will make sure we update the state every time there is a change in the url

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
            <div className="filters">
                <button className="btn1" onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
                    European Trips
                </button>
                <button className="btn2" onClick={() => setUrl('http://localhost:3000/trips')}>
                    All Trips
                </button>
            </div>
        </div>
    )
}

export default TripList