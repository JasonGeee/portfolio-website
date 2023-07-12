import {
  Box,
  Button,
  Flex,
  HStack,
  Slide,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
// import devIcon from "../assets/icons8-developer-64.png";

export default function Header() {
  return (
    <Flex
      bgColor="#d8eefe"
      // borderBottom="1px"
      boxShadow="md"
      width="100%"
      pt={6}
      pb={6}
      pl={10}
      pr={12}
      position="fixed"
    >
      <Box>
        <Button color="#094067" variant="link">
          Jason.dev
        </Button>
      </Box>
      <Spacer />
      <HStack spacing={10}>
        <Button color="#094067" variant="link">
          Home
        </Button>
        <Button color="#094067" variant="link">
          About
        </Button>
        <Button color="#094067" variant="link">
          Projects
        </Button>
        <Button color="#094067" variant="link">
          Contact
        </Button>
      </HStack>
    </Flex>
  );
}
