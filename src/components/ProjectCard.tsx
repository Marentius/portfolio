import { Box, Image, Heading, Text, Stack, Link, Flex } from "@chakra-ui/react";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  projectUrl: string;
  githubPath?: string; // Optional GitHub path
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imagePath,
  projectUrl,
  githubPath,
}) => (
  <Flex
    direction="column"
    borderRadius="xl"
    overflow="hidden"
    height="100%" // Sørger for at kortet fyller hele cellen i Gri
    boxShadow="lg"
    bg="teal.700"
    border="1px solid"
    borderColor="teal.500"
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

    <Flex direction="column" p="6" flex="1" bg="gray.900">
      <Stack spacing="3" flex="1">
        <Heading as="h3" size="lg" color="white">
          {title}
        </Heading>
        <Text flex="1" color="gray.300">
          {description}
        </Text>
      </Stack>
      <Stack mt="4" spacing="3">
        <Link href={projectUrl} color="teal.200" isExternal>
          Se prosjektet
        </Link>
        {githubPath && (
          <Link href={githubPath} color="teal.200" isExternal>
            Se på GitHub
          </Link>
        )}
      </Stack>
    </Flex>
  </Flex>
);

export default ProjectCard;
