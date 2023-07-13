import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box
      bgColor="#d8eefe"
      px={{ base: "1rem", md: "10rem" }}
      py={{ base: "2rem", md: "5rem" }}
    >
      <Card
        align="center"
        direction={{ base: "column", lg: "row" }}
        p={{ base: "5rem", lg: "5rem" }}
      >
        <Stack>
          <CardBody>
            <Heading color="#094067" pl={{ base: "0", md: "5rem" }}>
              About Me
            </Heading>
            <Text px={{ base: "0", md: "5rem" }} color="#5f6c7b">
              Aspiring Software Developer currently working as a Factory
              Software Support Tech as Tesla. Skilled in React, Node.js, HTML,
              CSS, Javascript, Typescript, Python, Golang, C, C++, REST APIs,
              MySQL, Firebase. I graduated in Computer Engineering from
              California State University, Long Beach.{" "}
            </Text>
            <Text px={{ base: "0", md: "5rem" }} color="#5f6c7b">
              My hobbies I love to do besides programming is play video games,
              3D print, play badminton, watch sports, or spend time with my
              family and friends.
            </Text>
          </CardBody>
        </Stack>
        <Image
          borderRadius="full"
          boxSize={{ base: "200px", sm: "250px", lg: "350px" }}
          src="../src/assets/1672807243883.jpeg"
          alt="Jason Gutierrez"
        />
      </Card>
    </Box>
  );
}
