import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    useEffect(() => {

        // Create an async function to fetch data
        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        }

        // invoke the function
        fetchData()

    }, [url])

    // return the data
    return { data }
}

