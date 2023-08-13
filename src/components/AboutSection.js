import React from "react";
import { VStack, Text, HStack, Box } from "@chakra-ui/react";
import { useLang } from "../LangContext";
import Title from "./Title";

const ar_greeting = "مرحباً ! أنا مؤمن عوض، عمري 25 عامًا. حاصل على شهادة البكالوريوس في هندسة الحاسوب من جامعة الشرق الأدنى. خبير في مجال تطوير وبرمجة الويب. متخصص في البرمجة وأبحث عن فرصة في صناعة تطوير الويب. لدي العديد من الشهادات والدورات من منصات Coursera و DataCamp";
const en_greeting = "Hello ! My name is Moumen Awad, I am 25 years old. I hold a Bachelor's degree in Computer Engineering from the Near East University. I work as a full stack web developer. I specialize in programming and I am currently seeking an opportunity in the web development industry. I have obtained several certificates and completed courses from platforms such as Coursera and DataCamp"

// متابع ومهتم في المجالات الآتية وأحاول جاهداً زيادة وإثراء معلوماتي على الصغيد المهني والأكاديمي في محاولة للبقاء دائماً على اطلاع في هذه المجالات المثيرة للاهتمام
const AboutSection = () => { 

    const { lang } = useLang()

    const AboutTitle = {
        ar: "عنّي",
        en: "About Me"
    };

    return (
        <Box id="about">
            <VStack>
                <Title text={AboutTitle}/>
                <HStack padding={40} spacing={30}>
                    <Text maxWidth="80%">{lang === "en" ? en_greeting : ar_greeting}</Text>
                </HStack>
            </VStack>
            <hr/>
        </Box>
    );
}

export default AboutSection;