import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
// import devIcon from "../assets/icons8-developer-64.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const navItems: Array<string> = ["Home", "About", "Projects", "Contact"];

const NavLink = ({ children }: Props) => (
  <Link size="xl" px={4} py={2} href={"#"}>
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex py={10} justifyContent="center">
        <Box>
          <Button color="#094067" variant="link" fontSize="xl">
            Jason.dev
          </Button>
        </Box>
        <Spacer />
        <HStack spacing={10} display={{ base: "none", md: "inline-flex" }}>
          <Button color="#094067" variant="link" fontSize="xl">
            Home
          </Button>
          <Button color="#094067" variant="link" fontSize="xl">
            About
          </Button>
          <Button color="#094067" variant="link" fontSize="xl">
            Projects
          </Button>
          <Button color="#094067" variant="link" fontSize="xl">
            Contact
          </Button>
        </HStack>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          colorScheme="blue"
        />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size="full"
          >
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Jason.dev</DrawerHeader>
              <DrawerBody>
                <VStack spacing={10}>
                  {navItems.map((link) => {
                    return <NavLink key={link}>{link}</NavLink>;
                  })}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ) : null}
    </>
  );
}
