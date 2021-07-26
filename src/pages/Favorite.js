import { Row } from "atomize";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function Favorite() {
  const favorites = useSelector((state) => state.favorite.favorites);

  return (
    <>
      <Row d="flex" flexWrap="wrap" flexDir="center">
        {favorites.map((el) => {
          return <Card game={el} key={el.id} />;
        })}
      </Row>
    </>
  );
}

export default Favorite;
