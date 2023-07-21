import {
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  Highlight,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiLogoGithub } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";

export default function HeroSection() {
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        mx="auto"
        // width="90%"
      >
        <Box>
          <Heading
            color="#094067"
            as="h1"
            size={{ base: "2xl", md: "4xl" }}
            pb="25px"
          >
            Jason Gutierrez
          </Heading>
          <Text fontSize="3xl" color="#5f6c7b">
            <Highlight
              query={["software developer"]}
              styles={{
                rounded: "full",
                px: "2",
                py: "1",
                bg: "#ef4565",
                color: "#fffffe",
              }}
            >
              Hi there! I am an aspiring software developer who thrives to work
              and develop technical web applications that create an impact.
            </Highlight>
          </Text>
          <Button
            size="lg"
            width="125px"
            color="#fffffe"
            bgColor="#ef4565"
            _hover={{ textDecoration: "none" }}
          >
            Hire Me!
          </Button>
          <IconButton
            variant="none"
            aria-label="Linkedin"
            fontSize="50px"
            pl={2}
            icon={<CiLinkedin />}
          />
          <IconButton
            variant="none"
            aria-label="Github"
            fontSize="50px"
            icon={<BiLogoGithub />}
          />
        </Box>
        <Hide below="md">
          <Image
            boxSize={{ md: "450px", lg: "750px" }}
            // boxSize={{ base: "250px", md: "450px", lg: "850px" }}
            src="../src/assets/undraw_coding_re_iv62.svg"
            alt="developer"
          />
        </Hide>
      </Flex>
    </Box>
  );
}
