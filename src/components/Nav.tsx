import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Bruker eksplisitt typekasting for å unngå feil
  const flexDirection =
    useBreakpointValue<"column" | "row">({ base: "column", md: "row" }) ||
    "row";

  return (
    <Box
      as="nav"
      bg={useColorModeValue("gray.100", "darkGray.800")}
      p={6}
      height="80px"
    >
      <Flex
        direction={flexDirection}
        justify="center" // Holder overskriften sentrert
        align="center"
        maxW="1200px"
        mx="auto"
        h="100%"
        wrap="nowrap"
      >
        <Flex flex="1" justify="center">
          <Heading
            as="h1"
            fontSize={useBreakpointValue({ base: "lg", md: "2xl" })}
            textAlign="center"
          >
            Vetle Marentius Nilsen
          </Heading>
        </Flex>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          size="lg"
          position="absolute"
          right={4} // Legg til litt padding til høyre
        />
      </Flex>
    </Box>
  );
};

export default Nav;
