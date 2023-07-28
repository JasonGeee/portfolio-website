import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EmailIcon } from "@chakra-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const form = useRef<HTMLFormElement>(null!);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast("Email Sent! 🚀");

    emailjs
      .sendForm(
        "service_azhhi7d",
        "template_n1zw068",
        form.current,
        "iG8AYoJAb4_oABmE8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Box height="80vh">
      <Center>
        <Heading
          color="#094067"
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          py={{ base: "3.125rem", md: "" }}
        >
          Contact Me
        </Heading>
      </Center>
      <Flex
        direction="row"
        gap="6.25rem"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="30rem">
          <Heading as="h3" fontSize="lg" mb="15px" color="#094067">
            Interested? Let's Get In Touch! I'd love to hear from you! Fill in
            your info below. I look forward to hearing from you!
          </Heading>
          <form ref={form} onSubmit={sendEmail}>
            <FormControl isRequired mb="20px">
              <FormLabel color="#5f6c7b">Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                focusBorderColor="#3da9fc"
                type="text"
                name="user_name"
                backgroundColor="white"
              />
            </FormControl>
            <FormControl isRequired mb="20px">
              <FormLabel color="#5f6c7b">Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="#3da9fc"
                type="email"
                name="user_email"
                backgroundColor="white"
              />
            </FormControl>
            <FormControl isRequired mb="20px">
              <FormLabel color="#5f6c7b">Message</FormLabel>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                focusBorderColor="#3da9fc"
                name="message"
                backgroundColor="white"
              />
            </FormControl>
            <Button
              color="#fffffe"
              bgColor="#ef4565"
              _hover={{ textDecoration: "none" }}
              type="submit"
              variant="solid"
              leftIcon={<EmailIcon />}
            >
              Email
            </Button>
          </form>
        </Box>
        <Image
          boxSize="450px"
          src="../src/assets/undraw_envelope_re_f5j4.svg"
          alt="email"
        />
      </Flex>
      <ToastContainer />
    </Box>
  );
}
