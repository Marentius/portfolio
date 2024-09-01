// src/pages/Home.tsx

import { Flex, Grid, Heading, Container } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

function Home() {
  return (
    <Flex direction="column" minH="100vh">
      <Flex as="main" flex="1" direction="column" align="center" p={5}>
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="white">
          Prosjekter
        </Heading>
        <Container maxW="1200px" centerContent>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
            width="100%"
          >
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imagePath={project.imagePath}
                projectUrl={`/projects/${project.id}`}
                tools={project.tools} // Send tools-propen
              />
            ))}
          </Grid>
        </Container>
      </Flex>
    </Flex>
  );
}

export default Home;
