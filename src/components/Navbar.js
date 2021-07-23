import { Div, Text, Button, Icon, Input } from "atomize";
import { useState } from "react";
import { Link } from 'react-router-dom'

function Navbar() {
  const [isInputSearch, setIsInputSearch] = useState(false);
  const [keyWord, setKeyword] = useState("");

  return (
    <Div d="flex" align="center" justify="space-between" rounded="5px" p="1rem">
        <Link to="/">
            <Text tag="h1" textSize="display1">
                yGame
            </Text>
        </Link>
        <Div d="flex">
            <Div m={{ r: "1rem" }} d="flex">
            {isInputSearch ? (
                <Input
                placeholder="Search"
                p={{ x: "2.5rem" }}
                rounded="circle"
                hoverShadow="4"
                value={keyWord}
                onChange={(e) => setKeyword(e.target.value)}
                suffix={
                    <Icon
                    name="Cross"
                    onClick={() => setIsInputSearch(false)}
                    color="warning800"
                    size="16px"
                    cursor="pointer"
                    pos="absolute"
                    top="50%"
                    right="0.75rem"
                    transform="translateY(-50%)"
                    />
                }
                prefix={
                    <Icon
                    name="Search"
                    color="warning800"
                    size="16px"
                    cursor="pointer"
                    pos="absolute"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                    />
                }
                />
            ) : (
                <Button
                onClick={() => setIsInputSearch(true)}
                h="2.5rem"
                w="2.5rem"
                bg="warning700"
                hoverBg="warning600"
                rounded="circle"
                shadow="2"
                hoverShadow="4"
                >
                <Icon name="Search" size="20px" color="white" />
                </Button>
            )}
            </Div>
            <Link to="/favorites">
                <Button
                h="2.5rem"
                w="7rem"
                bg="warning700"
                hoverBg="warning600"
                rounded="circle"
                m={{ r: "1rem" }}
                shadow="2"
                hoverShadow="4"
                prefix={
                    <Icon
                    name="HeartSolid"
                    size="20px"
                    color="white"
                    m={{ r: "0.5rem" }}
                    />
                }
                >
                    Favorites
                </Button>
            </Link>
        </Div>
    </Div>
  );
}

export default Navbar;
