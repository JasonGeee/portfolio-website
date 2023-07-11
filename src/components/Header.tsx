import {
  Box,
  Container,
  Flex,
  Image,
  ListItem,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";
import devIcon from "../assets/icons8-developer-64.png";
// import "./Components.css";

export default function Header() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <header className="headerSection">
        <Box p="2">
          <Image src={devIcon} className="header" alt="icon" />
        </Box>
        <Spacer />
        <Container>
          <UnorderedList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Me</a>
            </ListItem>
            <ListItem>
              <a href="#">Projects</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact</a>
            </ListItem>
          </UnorderedList>
        </Container>
      </header>
    </Flex>
  );
}
