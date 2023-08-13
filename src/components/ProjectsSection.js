import React from "react";
import { useLang } from "../LangContext";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import Slider from "./Slider"
import Title from "./Title";

const ProjectsSection = () => {

  const { lang } = useLang();

  const ProjectsTitle = {
    ar: "مشاريعي",
    en: "Projects"
  };

  return (
    <Box id="projects">
      <VStack>
        <Title text={ProjectsTitle}/>
        <Slider/>
      </VStack>
      <hr/>
    </Box>
  );
};

export default ProjectsSection;
