import Header from "./Header";
import Footer from "./Footer";
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import SectionContainer from './SectionContainer';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';


import { Box } from "@chakra-ui/react"
import { useLang } from "../LangContext";
import { useTheme } from "../ThemeContext";

const Container = () => {

    const { theme } = useTheme();
    const { lang } = useLang();

    const theme_class = theme === "white" ? "light_mode" : "dark_mode"
    const dir_class = lang === "en" ? "ltr_dir" : "rtl_dir"

    return (
        <Box className={theme_class + " " + dir_class}>
            <Header/>
            <SectionContainer>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </SectionContainer>
            <Footer/>
        </Box>
    );
}

export default Container;