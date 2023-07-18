import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";

export default function Footer() {
  return (
    <Flex
      minWidth="100%"
      direction="column"
      alignItems={"center"}
      py={5}
      gap={5}
    >
      <Box>
        <IconButton
          variant="none"
          aria-label="Linkedin"
          fontSize="50px"
          icon={<CiLinkedin />}
        />
        <IconButton
          variant="none"
          aria-label="Github"
          fontSize="50px"
          icon={<BiLogoGithub />}
        />
      </Box>
      <Text color="#094067" fontSize={"xl"} fontWeight={500}>
        Made with ❤️ by Jason Gutierrez
      </Text>
      {/* <Spacer />
      <HStack>
        <IconButton
          variant="none"
          aria-label="Linkedin"
          fontSize="50px"
          _hover={{}}
          // colorScheme="red"
          icon={<CiLinkedin />}
        />
        <IconButton
          variant="none"
          aria-label="Github"
          fontSize="50px"
          icon={<BiLogoGithub />}
        />
      </HStack> */}
    </Flex>
  );
}
