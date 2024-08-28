// src/components/Nav.tsx

import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      bg={useColorModeValue("gray.100", "darkGray.800")}
      p={6} // Øker padding for å gjøre navbaren større
      height="80px" // Setter høyden for å gi navbaren mer plass
    >
      <Flex
        position="relative"
        justify="center"
        align="center"
        maxW="1200px"
        mx="auto"
        h="100%"
      >
        <Heading
          as="h1"
          size="lg"
          fontSize="2xl" // Øker fontstørrelsen for å matche navbarens størrelse
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          Vetle Marentius Nilsen
        </Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          position="absolute"
          right={0}
          size="lg" // Øker størrelsen på ikonet for å passe bedre i den større navbaren
        />
      </Flex>
    </Box>
  );
};

export default Nav;
