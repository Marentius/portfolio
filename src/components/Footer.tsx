import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  // Endrer bakgrunnsfarge til en tydelig kontrastfarge
  const bgColor = useColorModeValue("black", "gray.900"); // Svart i light-mode, mørk grå i dark-mode
  const textColor = useColorModeValue("white", "gray.300"); // Hvit i light-mode, lys grå i dark-mode

  return (
    <Box
      as="footer"
      bg={bgColor} // Setter en kraftig kontrastfarge på footeren
      color={textColor} // Setter en lys kontrastfarge på teksten
      py={4}
      textAlign="center"
    >
      <Text>© 2024 Vetle Marentius Nilsen. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
