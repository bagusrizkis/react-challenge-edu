import {useEffect, useState} from 'react'

function useFetchRawg (url, option={isPage: true}) {
    let [page, setPage] = useState(1)
    let [data, setData] = useState({})
    let [error, setError] = useState(false)
    let [loading, setLoading] = useState(true)

    const loadMore = async () => {
        setPage(page + 1)
        try {
            const response = await fetch("https://api.rawg.io/api" 
                + url
                + "?&key="
                + process.env.REACT_APP_RAWG_SECRET
                + "&page="
                + page
            )
            const { results } = await response.json()
            const payload = [...data.payload, ...results]
            setData({payload: payload})
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const pageString = option.isPage ? `&page=${page}` : ""
                const response = await fetch("https://api.rawg.io/api"
                    + url
                    + "?&key="
                    + process.env.REACT_APP_RAWG_SECRET
                    + pageString
                )
                const resp = await response.json()
                if (resp.results) {
                    console.log(">>>", resp.results)
                    setData({payload: resp.results})
                    setPage(page + 1)
                } else {
                    setData({payload: resp})
                }
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
        }})()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [data, loading, error, loadMore]
}

export default useFetchRawg