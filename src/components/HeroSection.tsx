import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Flex
      direction={["column", "row"]}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      gap={60}
    >
      <Stack spacing={3}>
        <Text fontSize="xl" color="#5f6c7b">
          Hello, my name is
        </Text>
        <Heading color="#094067" as="h1" size="4xl">
          Jason Gutierrez
        </Heading>
        <Heading color="#094067" as="h1" size="4xl">
          Software Support
        </Heading>
        <Text fontSize="xl" color="#5f6c7b">
          Aspiring Software Engineer based in Austin, Texas 📍
        </Text>
      </Stack>
      <Box boxSize="md" pt="60px">
        <Image
          src="../src/assets/undraw_programming_re_kg9v.svg"
          alt="developer"
        />
      </Box>
    </Flex>
  );
}
