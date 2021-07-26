import { Row } from "atomize";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function Favorite() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <Row d="flex" flexWrap="wrap" flexDir="center">
        {favorites.map((el) => {
          return <Card game={el} />;
        })}
      </Row>
    </>
  );
}

export default Favorite;
