import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("gray.200", "gray.800");
  //const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box position="relative" mt={10}>
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        w="100%"
        h="auto"
        position="absolute"
        top="50px" // Flytt SVG-en oppover for å gi bølgen effekten i footeren
        zIndex={1}
      >
        <path
          fill={bgColor}
          fillOpacity="1"
          d="M0,256L30,229.3C60,203,120,149,180,138.7C240,128,300,160,360,170.7C420,181,480,171,540,144C600,117,660,75,720,80C780,85,840,139,900,160C960,181,1020,171,1080,138.7C1140,107,1200,53,1260,48C1320,43,1380,85,1410,106.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </Box>
    </Box>
  );
};

export default Footer;
