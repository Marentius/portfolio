import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imagePath,
  projectUrl,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Sjekker om teksten er avkortet
      setIsTruncated(
        textRef.current.scrollHeight > textRef.current.clientHeight
      );
    }
  }, [description]);

  return (
    <Flex
      direction="column"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      maxW="sm"
      width="100%"
      flex="1"
    >
      <Box width="100%" position="relative" paddingBottom="100%">
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

      <Flex direction="column" p="6" flex="1">
        <Stack spacing="3" flex="1">
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text ref={textRef} noOfLines={showMore ? undefined : 3}>
            {description}
          </Text>
          {isTruncated && (
            <Button
              variant="link"
              colorScheme="teal"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Vis mindre" : "Les mer"}
            </Button>
          )}
        </Stack>
        <Link href={projectUrl} color="teal.500" isExternal mt="4">
          Se prosjektet
        </Link>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
