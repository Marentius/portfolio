import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Heading,
  Text,
  Image,
  VStack,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { projectsData } from "../data/projectsData";

function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Finn riktig prosjekt basert på projectId fra URL
  const project = projectsData.find((proj) => proj.id === projectId);

  if (!project) {
    return <Text>Prosjektet ble ikke funnet.</Text>;
  }

  const buttonBg = useColorModeValue("white", "gray.700");
  const buttonText = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="800px" mt={10} mb={20}>
      <VStack spacing={8}>
        <Button
          onClick={() => navigate("/")}
          colorScheme="teal"
          alignSelf="flex-start"
        >
          Tilbake
        </Button>
        <Heading as="h1" size="2xl">
          {project.title}
        </Heading>
        <Image src={project.imagePath} alt={project.title} borderRadius="md" />
        <Text fontSize="lg">{project.longDescription}</Text>
        {project.githubUrl && (
          <Button
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            bg={buttonBg}
            color={buttonText}
            border="1px solid"
            borderColor="gray.300"
            _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
          >
            Se på GitHub
          </Button>
        )}
        <Button
          as="a"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          bg={buttonBg}
          color={buttonText}
          border="1px solid"
          borderColor="gray.300"
          _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
        >
          Besøk nettsiden
        </Button>
      </VStack>
    </Container>
  );
}

export default ProjectDetails;
