import { useParams } from "react-router-dom"
import { useFetch } from "../services"

function Detail () {
    let { id: idGame } = useParams()
    const [data, loading, err] = useFetch('/games/' + idGame)
    if (loading) {
        return (
            <h1>Loading</h1>
        )
    } else if (!loading) {
        const game = data.payload
        return (
            <>
                <h1>{game.name}</h1>
                    <pre>{JSON.stringify(game, null, 4)}</pre>
            </>
        )
    } else if (err) {
        return (
            <>
                <h1>Error get data</h1>
            </>
        )
    }
}

export default Detail