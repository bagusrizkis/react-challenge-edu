import { ContainerCard } from "../components";
// import { useFetch } from "../services";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, loadMore } from "../services/actions/gameActions";

function HomePage() {
  //   const [data, loading, err, loadMore] = useFetch("/games", { isPage: true });
  const dispatch = useDispatch();
  const {
    games: data,
    error: err,
    loading,
  } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const loadMoreGames = () => dispatch(loadMore());

  if (loading) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Fething Data...</h1>
      </>
    );
  } else if (loading === false) {
    return (
      <>
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreGames}
          hasMore={true}
          loader={
            <h4 style={{ textAlign: "center" }}>Fetching More Data...</h4>
          }
        >
          <ContainerCard data={data} />
        </InfiniteScroll>
      </>
    );
  } else if (err) {
    return (
      <>
        <h1>Error get data</h1>
      </>
    );
  }
}

export default HomePage;
