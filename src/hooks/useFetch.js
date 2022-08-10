import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null)

    // 'loading' mgs
    const [pending, setPending] = useState(false)

    // 'error' msg
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        // Create an async function to fetch data
        const fetchData = async () => {

            setPending(true)
            try {

                // associate the Fetch request with the abort controller
                const response = await fetch(url, { signal: controller.signal })
                const json = await response.json()

                // if url is invalid
                if (!response.ok) {
                    throw new Error(`url: ${response.statusText}`)

                }
                setPending(false)
                setData(json)
                setError(null) // if no error - set error to 'null'

            } catch (err) {

                if (err.name === "AbortError") {
                    console.log('the fetch was aborted')
                } else {
                    setPending(false)

                    setError('Could not fetch the data')
                    console.log(err.message)
                }
            }
        }

        // invoke the function
        fetchData()

        // CleanUp function
        // abort Fetch request to avoid state update on an unmounted component
        return () => {
            controller.abort()
        }

    }, [url])

    // return the data
    return { data, pending, error }
}

