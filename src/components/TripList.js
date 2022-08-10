import { useState } from "react"
import {useFetch} from "../hooks/useFetch"

// style
import './TripList.css'


const TripList = () => {

    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data:trips, pending, error } = useFetch(url) // rename the data into 'trips'

    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            {pending && <div>Loading Data...</div>}
            {error && <div>{error}</div>}
            <ul>
                {trips && trips.map(trip => ( // use 'map' only if we have a value in trips
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