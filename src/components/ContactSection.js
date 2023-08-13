import React from "react";
import { useLang } from "../LangContext";
import { Box, VStack, Text } from "@chakra-ui/react";
import Title from "./Title.js"

const ContactSection = () => {

  const { lang } = useLang();

  const ContactTitle = {
      ar: "تواصل معي",
      en: "Contact Me"
  };


  return (
    <Box id="contact">
      <VStack>
        <Title text={ContactTitle}/>
      </VStack>
      <hr/>
    </Box>
  );
};

export default ContactSection;