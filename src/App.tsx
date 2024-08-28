// src/App.tsx

import { Flex, HStack, Heading, Container } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

import almesus from "./assets/almesus.png";
import gameHub from "./assets/gameHub.png";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Nav />

      <Flex as="main" flex="1" direction="column" align="center" p={5}>
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="white">
          Prosjekter
        </Heading>
        <Container maxW="1200px" centerContent>
          <HStack spacing={8} alignItems="stretch" justifyContent="center">
            <ProjectCard
              title="Almesus"
              description="Et nettside jeg opprettet for en liten festival i Jelsnes for å teste opplasting av videoer og bilder via Google Cloud. Alle bilder og videoer er tatt og redigert av meg."
              imagePath={almesus}
              projectUrl="https://videocollection-marentius-projects.vercel.app/"
            />
            <ProjectCard
              title="GameHub"
              description="En nettside laget i tråd med et kurs for å lære React + TypeScript med CodeWithMosh."
              imagePath={gameHub}
              projectUrl="https://game-hub-ashen-eta.vercel.app/"
            />
          </HStack>
        </Container>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default App;
