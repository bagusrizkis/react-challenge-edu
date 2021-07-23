import { Row, Col, Div, Image, Text, Icon, Button } from "atomize";
import { Link } from "react-router-dom";

function ContainerCard(props) {
  const { data } = props;

  return (
    <Row d="flex" flexWrap="wrap" flexDir="center">
        {data.map((el) => {
            return (
                <Col h="auto" key={el.id} >
                    <Div w="22rem" h="auto" m={{ b: '2rem'}} flexDir="column">
                    <Link to={`/detail/${el.id}`}>
                    <Image
                        h="10rem"
                        rounded="md"
                        // size="cover"
                        shadow="5"
                        hoverShadow="2"
                        src={el.background_image}
                    />
                    </Link>
                    <Div d="flex" align='center' justify="space-between">
                        <Link to={`/detail/${el.id}`}>
                            <Text textSize="title" tag="header">{el.name}</Text>
                        </Link>
                        <Button
                        h="2rem"
                        w="2rem"
                        bg="grey300"
                        hoverBg="danger400"
                        rounded="lg"
                        m={{ r: "1rem" }}
                        >
                        <Icon  name="Heart" size="20px" color="danger700" />
                        </Button>
                    </Div>
                    </Div>
                </Col>
            );
        })}
    </Row>
  );
}

export default ContainerCard;
