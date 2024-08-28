// src/components/Footer.tsx

import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg={useColorModeValue("gray.100", "darkGray.800")} p={4}>
      <Text textAlign="center">&copy; 2024 Vetle Marentius Nilsen.</Text>
    </Box>
  );
};

export default Footer;
