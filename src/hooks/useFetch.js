import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null)

    // 'loading' mgs
    const [pending, setPending] = useState(false)

    // 'error' msg
    const [error, setError] = useState(null)

    useEffect(() => {

        // Create an async function to fetch data
        const fetchData = async () => {

            setPending(true)
            try {

                const response = await fetch(url)
                const json = await response.json()
                
                // if url is invalid
                if(!response.ok) {
                    throw new Error(`url: ${response.statusText}`)

                }
                setPending(false)
                setData(json)
                setError(null) // if no error - set error to 'null'

            } catch (err) {

                setPending(false)

                setError('Could not fetch the data')
                console.log(err.message)

            }
           
        }

        // invoke the function
        fetchData()

    }, [url])

    // return the data
    return { data, pending, error }
}

