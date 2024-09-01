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

  // Dynamisk bakgrunnsfarge basert på fargemodus
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      as="nav"
      bg={bgColor} // Bruker dynamisk bakgrunnsfarge
      color={textColor} // Bruker dynamisk tekstfarge
      p={6}
      height="80px"
    >
      <Flex
        direction="row"
        justify="center"
        align="center"
        maxW="1200px"
        mx="auto"
        h="100%"
        wrap="nowrap"
      >
        <Heading as="h1" size="lg" textAlign="center">
          Vetle Marentius Nilsen
        </Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          position="absolute"
          right={4}
          size="lg"
        />
      </Flex>
    </Box>
  );
};

export default Nav;
