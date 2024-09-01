import { Flex, Grid, Heading, Container } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

import almesus from "./assets/almesus.png";
import gameHub from "./assets/gameHub.png";
import GENAI from "./assets/GENAI.png";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Nav />

      <Flex as="main" flex="1" direction="column" align="center" p={5}>
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="white">
          Prosjekter
        </Heading>
        <Container maxW="1200px" centerContent>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // 1 kolonne på mobil, 3 på større skjermer
            gap={8} // Mellomrom mellom kortene
            width="100%"
          >
            <ProjectCard
              title="Almesus"
              description="Et nettside jeg opprettet for en liten festival i Jelsnes for å teste opplasting av videoer og bilder via Google Cloud. Alle bilder og videoer er tatt og redigert av meg."
              imagePath={almesus}
              projectUrl="https://videocollection-marentius-projects.vercel.app/"
              githubPath="https://github.com/Marentius/Aftermovies"
            />
            <ProjectCard
              title="GameHub"
              description="En nettside laget i tråd med et kurs for å lære React + TypeScript med CodeWithMosh."
              imagePath={gameHub}
              projectUrl="https://game-hub-ashen-eta.vercel.app/"
              githubPath="https://github.com/Marentius/video-game-app"
            />
            <ProjectCard
              title="AI-generert musikk"
              description="Generativ AI har fasinert meg lenge, spesielt etter å ha hatt det som fag på Høgskolen i Østfold. Her er min Spotify-profil med ulike låter jeg har laget ved hjelp av AI. Alle bilder er også AI-produsert. Verktøy: ChatGPT 4o, SUNO v3, DALL-E"
              imagePath={GENAI}
              projectUrl="https://open.spotify.com/artist/6eezeSrQEa1LhxarGi1b06?si=pL7ev2trS7CE97zfkvDtxQ"
              githubPath=""
            />
          </Grid>
        </Container>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default App;
