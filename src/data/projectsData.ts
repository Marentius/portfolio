import { SiPowerbi, SiTypescript, SiReact, SiSuno, SiOpenai } from 'react-icons/si';

import almesus from "../assets/almesus.png"
import gamehub from "../assets/gameHub.png"
import genai from "../assets/GENAI.png"
import powerbi from "../assets/PowerBI.png"

export const projectsData = [
  {
    id: 'almesus',
    title: 'Almesus',
    description: 'Et nettside jeg opprettet for en liten festival i Jelsnes...',
    longDescription: 'Her kommer det mer..',
    imagePath: almesus,
    githubUrl: 'https://github.com/Marentius/Aftermovies',
    liveUrl: 'https://videocollection-marentius-projects.vercel.app/',
    tools: [SiTypescript, SiReact],
  },
  {
    id: 'gamehub',
    title: 'GameHub',
    description: 'En nettside laget i tråd med et kurs for å lære React...',
    longDescription: 'Her kommer det mer..',
    imagePath: gamehub,
    githubUrl: 'https://github.com/Marentius/video-game-app',
    liveUrl: 'https://game-hub-ashen-eta.vercel.app/',
    tools: [SiTypescript, SiReact],  
  },
  {
    id: 'genai',
    title: 'AI-generert musikk',
    description: 'Generativ AI har fasinert meg lenge...',
    longDescription: 'Her kommer det mer..',
    imagePath: genai,
    githubUrl: '',
    liveUrl: 'https://open.spotify.com/artist/6eezeSrQEa1LhxarGi1b06?si=pL7ev2trS7CE97zfkvDtxQ',
    tools: [SiSuno, SiOpenai], 
  },
  {
    id: 'PowerBI',
    title: 'Salgsanalyse med PowerBI',
    description: 'Dette er et prosjekt der jeg har brukt DAX i PowerBI.. ',
    longDescription: 'her kommer det mer..',
    imagePath: powerbi,
    githubUrl: '',
    liveUrl: 'https://app.powerbi.com/groups/me/reports/203886c9-d643-49b1-a77b-c67cd722465e/ReportSection5cbd3f1a6f25310534de?experience=power-bi',
    tools: [SiPowerbi],
  }
];
