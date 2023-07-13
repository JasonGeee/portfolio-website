import { Box, Flex, Heading, Hide, Image, Stack, Text } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box>
      <Flex
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"100vh"}
        gap={20}
        px="25px"
      >
        <Stack spacing={3}>
          <Heading color="#094067" as="h1" size={{ base: "2xl", md: "4xl" }}>
            Software Developer
          </Heading>
          <Text fontSize="xl" color="#5f6c7b">
            Hi, I'm Jason Gutierrez. Aspiring Software Developer based in
            Austin, Texas 📍
          </Text>
        </Stack>
        <Hide below="lg">
          <Box pt="60px">
            <Image
              boxSize="550px"
              src="../src/assets/undraw_programming_re_kg9v.svg"
              alt="developer"
            />
          </Box>
        </Hide>
      </Flex>
    </Box>
  );
}
