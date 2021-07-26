import { Row } from "atomize";
import Card from "./Card";

function ContainerCard(props) {
  const { data } = props;

  return (
    <Row d="flex" flexWrap="wrap" flexDir="center">
      {data.map((el) => {
        return <Card game={el} />;
      })}
    </Row>
  );
}

export default ContainerCard;
