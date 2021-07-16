import {useEffect, useState} from 'react'

function useFetchRawg (url, params) {
    let [page, setPage] = useState(1)
    let [data, setData] = useState([])
    let [error, setError] = useState(false)
    let [loading, setLoading] = useState(true)

    const loadMore = async () => {
        setPage(page + 1)
        try {
            const response = await fetch("https://api.rawg.io" + url + "?&key=" + process.env.REACT_APP_RAWG_SECRET + "&page=" + page)
            const { results } = await response.json()
            setData([...data, ...results])
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        (async () => {
            try {
            const response = await fetch("https://api.rawg.io" + url + "?&key=" + process.env.REACT_APP_RAWG_SECRET + "&page=" + page)
            const { results } = await response.json()
            setData([...data, ...results])
            setPage(page + 1)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }})()
    }, [])

    return [data, loading, error, loadMore]
}

export default useFetchRawg