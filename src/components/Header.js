import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack, Text, Button } from "@chakra-ui/react";
import NavLinks from "./NavLinks"
import { useTheme } from "../ThemeContext";
import { useLang } from "../LangContext";

const Header = () => {

  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  // const topnavbar = useRef(null);
  // useEffect(() => {
  //   let previousPosition = window.scrollY;
  //   const scroll = () => {
  //     const currentPosition = window.scrollY;
  //     const nav = topnavbar.current;
  //     currentPosition > previousPosition ? nav.style.transform = "translateY(-200px)" : nav.style.transform = "translateY(0)"
  //     previousPosition = currentPosition;
  //   }

  //   window.addEventListener("scroll", scroll);
    
  //   return () => {
  //     window.removeEventListener("scroll", scroll);
  //   }
  // }, []);

  return (
    <Box>
      <Box >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
                    <nav>
            <HStack spacing={8}>
              <Text
                _hover={{color: "#f4ac01"}}
                fontSize={50}
                lineHeight={0.5}
                fontWeight={400}
              >
                {lang === "en" ? "Moumen" : "مؤمن"}
              </Text>
            </HStack>
          </nav>
          <NavLinks type="section-nav" space="20"></NavLinks>
          <HStack spacing={16}>
            <Button as="a" cursor="pointer" _hover={{color: "#f4ac01"}}><FontAwesomeIcon onClick={toggleTheme} icon={theme === "white" ? faMoon : faSun} size="2x" /></Button>
            <Button as="a" cursor="pointer" _hover={{color: "#f4ac01"}} fontSize={25} onClick={toggleLang}>{lang === "en" ? "عربي" : "English"}</Button>
          </HStack>
        </HStack>
      </Box>
    </Box>

    
  );
};
export default Header;