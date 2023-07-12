import { Box, Flex, HStack, Icon, Spacer, Text } from "@chakra-ui/react";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";

export default function Footer() {
  return (
    <Flex
      width="100%"
      justifyContent={"center"}
      alignItems={"center"}
      px={40}
      py={5}
      bgColor={"#d8eefe"}
    >
      <Text color="#094067" fontWeight={700}>
        Copyright © 2023. All rights are reserved
      </Text>
      <Spacer />
      <HStack>
        <Icon as={CiLinkedin} boxSize={9} color="#094067" />
        <Icon as={BiLogoGithub} boxSize={8} color="#094067" />
      </HStack>
    </Flex>
  );
}
