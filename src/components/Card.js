import { Col, Div, Image, Text, Icon, Button } from "atomize";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../services/actions/favoriteActions";

function Card(props) {
  const favorites = useSelector((state) => state.favorite.favorites);

  const game = props.game;
  const dispatch = useDispatch();

  const addFav = () => {
    dispatch(addFavorite(game));
  };

  return (
    <Col h="auto" key={game.id}>
      <Div w="22rem" h="auto" m={{ b: "2rem" }} flexDir="column">
        <Link to={`/detail/${game.id}`}>
          <Image
            h="10rem"
            rounded="md"
            // size="cover"
            shadow="5"
            hoverShadow="2"
            src={game.background_image}
          />
        </Link>
        <Div d="flex" align="center" justify="space-between">
          <Link to={`/detail/${game.id}`}>
            <Text textSize="title" tag="header">
              {game.name}
            </Text>
          </Link>
          {favorites.find((g) => g.id === game.id) ? null : (
            <Button
              h="2rem"
              w="2rem"
              bg="grey300"
              hoverBg="danger400"
              rounded="lg"
              m={{ r: "1rem" }}
              onClick={addFav}
            >
              <Icon name="Heart" size="20px" color="danger700" />
            </Button>
          )}
        </Div>
      </Div>
    </Col>
  );
}

export default Card;
