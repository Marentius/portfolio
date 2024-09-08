import { SiPowerbi, SiTypescript, SiReact, SiSuno, SiOpenai, SiGooglecloud } from 'react-icons/si';

import almesus from "../assets/almesus.png"
import gamehub from "../assets/gameHub.png"
import genai from "../assets/GENAI.png"
import powerbi from "../assets/PowerBI.png"

export const projectsData = [
  {
    id: 'almesus',
    title: 'Almesus',
    description: 'Et nettside jeg opprettet for en liten festival i Jelsnes for å teste video og bildefremvsining fra cloud',
    longDescription: 'For denne nettsiden brukte jeg TypeScript og React og Google Cloud.',
    imagePath: almesus,
    githubUrl: 'https://github.com/Marentius/Aftermovies',
    liveUrl: 'https://videocollection-marentius-projects.vercel.app/',
    tools: [SiTypescript, SiReact, SiGooglecloud],
  },
  {
    id: 'gamehub',
    title: 'GameHub',
    description: 'En nettside laget i tråd med et kurs for å lære meg React...',
    longDescription: 'Denne nettsiden er produsert i React og TypeScript. Nettsiden er en oversikt over spill, og er laget med CodeWithMosh. All data er hentet fra API.',
    imagePath: gamehub,
    githubUrl: 'https://github.com/Marentius/video-game-app',
    liveUrl: 'https://game-hub-ashen-eta.vercel.app/',
    tools: [SiTypescript, SiReact],  
  },
  {
    id: 'genai',
    title: 'AI-generert musikk',
    description: 'Generativ AI har kommet for å bli. Her er en samleside over generativ AI jeg er mest fornøyd med.',
    longDescription: 'Musikk generert av AI er en spennende ny teknologi. Her er en samleside over musikk jeg har laget med AI. Jeg har brukt Suno og OpenAI til å generere musikk',
    imagePath: genai,
    githubUrl: '',
    liveUrl: 'https://open.spotify.com/artist/6eezeSrQEa1LhxarGi1b06?si=pL7ev2trS7CE97zfkvDtxQ',
    tools: [SiSuno, SiOpenai], 
  },
  {
    id: 'PowerBI',
    title: 'Salgsanalyse med PowerBI',
    description: 'ETL, dataanalyse og visualisering av salgsdata fra fiktive tall for Clas Ohlson.',
    longDescription: 'Dette prosjektet er en analyse av salgsdata fra Clas Ohlson. Jeg har brukt PowerBI til å lage analyser og visualiseringer av dataene. Dette er fordypningsfaget mitt på Høgskolen i Østfold. Prosjektet fikk karakteren A',
    imagePath: powerbi,
    githubUrl: '',
    liveUrl: 'https://app.powerbi.com/groups/me/reports/203886c9-d643-49b1-a77b-c67cd722465e/ReportSection5cbd3f1a6f25310534de?experience=power-bi',
    tools: [SiPowerbi],
  }
];
