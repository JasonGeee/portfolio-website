import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoGoLang,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoGithub,
  BiLogoPython,
  BiLogoJavascript,
  BiLogoVisualStudio,
  BiLogoFirebase,
} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaGears } from "react-icons/fa6";
import { IconType } from "react-icons";

interface UserSkills {
  id: number;
  skill: string;
  icon: IconType;
  color: string;
}

const skills: UserSkills[] = [
  {
    id: 1,
    skill: "HTML",
    icon: BiLogoHtml5,
    color: "#F16529",
  },
  {
    id: 2,
    skill: "CSS",
    icon: BiLogoCss3,
    color: "#2965f1",
  },
  {
    id: 3,
    skill: "Javascript",
    icon: BiLogoJavascript,
    color: "#F0DB4F",
  },
  {
    id: 4,
    skill: "Typescript",
    icon: BiLogoTypescript,
    color: "#007acc",
  },
  {
    id: 5,
    skill: "Golang",
    icon: BiLogoGoLang,
    color: "#00ADD8",
  },
  {
    id: 6,
    skill: "React",
    icon: BiLogoReact,
    color: "#61DBFB",
  },
  {
    id: 7,
    skill: "Python",
    icon: BiLogoPython,
    color: "#4584b6",
  },
  {
    id: 8,
    skill: "Node.js",
    icon: BiLogoNodejs,
    color: "#3c873a",
  },
  {
    id: 9,
    skill: "MySQL",
    icon: SiMysql,
    color: "#00758f",
  },
  {
    id: 10,
    skill: "Git",
    icon: BiLogoGit,
    color: "#F1502F",
  },
  {
    id: 11,
    skill: "Github",
    icon: BiLogoGithub,
    color: "#171515",
  },
  {
    id: 12,
    skill: "VS Code",
    icon: BiLogoVisualStudio,
    color: "#0078d7",
  },
  {
    id: 13,
    skill: "RESTful API",
    icon: FaGears,
    color: "",
  },
  {
    id: 14,
    skill: "Firebase",
    icon: BiLogoFirebase,
    color: "#FFA611",
  },
];

const AboutMe = () => {
  return (
    <Box pb="100px">
      <Center>
        <Heading
          color="#094067"
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          py={{ base: "3.125rem", md: "" }}
        >
          About Me
        </Heading>
      </Center>
      <Flex direction={{ base: "column", md: "row" }} alignItems="center">
        <Stack>
          <Text pr={{ base: "0", md: "5rem" }} color="#5f6c7b" fontSize="2xl">
            Aspiring Software Developer currently working at Tesla as a Factory
            Software Support. Skilled in React, Node.js, HTML, CSS, Javascript,
            Typescript, Python, Golang, C, C++, REST APIs, MySQL, Firebase. I
            graduated in Computer Engineering from California State University,
            Long Beach. My hobbies I love to do besides programming is play
            video games, 3D print, play badminton, watch sports, or spend time
            with my family and friends.
          </Text>
        </Stack>
        <Image
          borderRadius="full"
          boxSize={{ base: "200px", sm: "250px", lg: "350px" }}
          src="../src/assets/1672807243883.jpeg"
          alt="Jason Gutierrez"
        />
      </Flex>
      <Center>
        <Heading
          color="#094067"
          as="h1"
          py="3.125rem"
          size={{ base: "2xl", md: "3xl" }}
        >
          Skills & Tools
        </Heading>
      </Center>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "", md: "center" }}
        gap="2rem"
        // minWidth="100%"
        wrap="wrap"
      >
        {skills.map(({ id, skill, icon, color }) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              alignItems={{ base: "center", md: "center" }}
              justifyContent={{ base: "center" }}
              gap="10px"
            >
              <Icon
                key={id}
                aria-label={skill}
                as={icon}
                boxSize={"6.25rem"}
                color={color}
              />
              <Heading as="h3" size="md" color="#5f6c7b">
                {skill}
              </Heading>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default AboutMe;
