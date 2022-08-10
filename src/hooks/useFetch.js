import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null)

    // show 'loading' message while fetching data
    const [pending, setPending] = useState(false)

    useEffect(() => {

        // Create an async function to fetch data
        const fetchData = async () => {
            setPending(true)

            const response = await fetch(url)
            const json = await response.json()
            setPending(false)
            setData(json)
        }

        // invoke the function
        fetchData()

    }, [url])

    // return the data
    return { data, pending }
}

