import { ContainerCard } from '../components'
import { useFetch } from '../services'
import InfiniteScroll from "react-infinite-scroll-component"


function HomePage () {
    const [data, loading, err, loadMore] = useFetch('/api/games')

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
                dataLength={data.length}
                next={loadMore}
                hasMore={true}
                loader={<h4 style={{textAlign: 'center'}}>Fetching More Data...</h4>}
            >
                <ContainerCard data={data} />
            </InfiniteScroll>
            </>
        )
    } else if (err) {
        return (
            <>
                <h1>Hello</h1>
            </>
        )
    }

}

export default HomePage