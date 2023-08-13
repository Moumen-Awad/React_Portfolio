import React from "react";
import { useLang } from "../LangContext";
import { Box, HStack, VStack } from "@chakra-ui/react";
import Title from "./Title";
const SkillsSection = () => {

    const { lang } = useLang();

    const SkillsTitle = {
        ar: "خبراتي",
        en: "Skills"
    };

    return (
        <Box id="skills">
            <VStack>
                <Title text={SkillsTitle}/>
                <HStack spacing={30}>
                    {/* <Text>{lang === "en" ? en_greeting : ar_greeting}</Text>
                    <Text>{lang === "en" ? en_greeting : ar_greeting}</Text> */}
                </HStack>
            </VStack>
            <hr/>
        </Box>
    );
}

export default SkillsSection;