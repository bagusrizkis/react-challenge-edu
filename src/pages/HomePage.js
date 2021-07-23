import { ContainerCard } from '../components'
import { useFetch } from '../services'
import InfiniteScroll from "react-infinite-scroll-component"


function HomePage () {
    const [data, loading, err, loadMore] = useFetch('/games', {isPage: true})

    if (loading) {
       return (
            <>
                <h1 style={{textAlign: 'center'}}>Fething Data...</h1>
            </>
        )
    } else if (loading === false) {
        return (
            <>
            <InfiniteScroll
                dataLength={data.payload.length}
                next={loadMore}
                hasMore={true}
                loader={<h4 style={{textAlign: 'center'}}>Fetching More Data...</h4>}
            >
                <ContainerCard data={data.payload} />
            </InfiniteScroll>
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

export default HomePage