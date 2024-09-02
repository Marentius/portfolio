import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  LinkBox,
  LinkOverlay,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  projectUrl: string;
  tools: IconType[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imagePath,
  projectUrl,
  tools,
}) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const cardBorderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <LinkBox
      as={Flex}
      direction="column"
      borderRadius="xl"
      overflow="hidden"
      height="100%"
      boxShadow="lg"
      bg={cardBg}
      border="1px solid"
      borderColor={cardBorderColor}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "scale(1.05)", // Litt forstørrelse ved hover
        boxShadow: "xl", // Økt skygge ved hover
      }}
    >
      {/* Image Box */}
      <Box width="100%" flexShrink={0}>
        {" "}
        {/* Sørger for at bildet ikke tar opp all plass */}
        <Image
          src={imagePath}
          alt={title}
          height="200px" // Fast høyde for å sikre plass til andre elementer
          width="100%"
          objectFit="cover"
        />
      </Box>

      {/* Text and Tools Flex Container */}
      <Flex direction="column" p="4" flex="1" color={textColor}>
        {" "}
        {/* Mindre padding for mer plass */}
        <Stack spacing="3" flex="1">
          <Heading as="h3" size="md" textAlign="center">
            {" "}
            {/* Juster til size="md" for å spare plass */}
            <LinkOverlay as={Link} to={projectUrl}>
              {title}
            </LinkOverlay>
          </Heading>
          <Text textAlign="center" fontSize="sm">
            {" "}
            {/* Mindre skriftstørrelse for beskrivelsen */}
            {description}
          </Text>
        </Stack>
        {/* HStack for verktøy-ikoner */}
        <HStack spacing={4} mt={4} justify="center">
          {tools.map((ToolIcon, index) => (
            <ToolIcon key={index} size="24px" color={textColor} />
          ))}
        </HStack>
      </Flex>
    </LinkBox>
  );
};

export default ProjectCard;
