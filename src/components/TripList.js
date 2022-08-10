import { useState, useEffect, useCallback } from "react"

// style
import './TripList.css'


const TripList = () => {

    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')

    // Create an async function that will be used inside useEffect()
    const fetchTrips = useCallback(async () => {
        const response = await fetch(url)
        const json = await response.json()
        setTrips(json)
    }, [url])

    useEffect(() => {
        fetchTrips()
    }, [fetchTrips]) // url as dependancy will make sure we update the state every time there is a change in the url

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