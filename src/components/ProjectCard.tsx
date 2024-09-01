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
import { IconType } from "react-icons"; // Importer typen for ikoner

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  projectUrl: string;
  tools: IconType[]; // Bruker IconType array
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
      <Box width="100%" position="relative" paddingBottom="56.25%">
        <Image
          src={imagePath}
          alt={title}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>

      <Flex direction="column" p="6" flex="1" color={textColor}>
        <Stack spacing="3" flex="1">
          <Heading as="h3" size="lg">
            <LinkOverlay as={Link} to={projectUrl}>
              {title}
            </LinkOverlay>
          </Heading>
          <Text flex="1">{description}</Text>
        </Stack>

        {/* HStack for verktøy-ikoner */}
        <HStack spacing={4} mt={4} justify="center">
          {tools.map((ToolIcon, index) => (
            <ToolIcon key={index} size="30px" color={textColor} />
          ))}
        </HStack>
      </Flex>
    </LinkBox>
  );
};

export default ProjectCard;
