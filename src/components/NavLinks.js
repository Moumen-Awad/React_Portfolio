import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { useLang } from "../LangContext";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sections = [
  {
    ar_text: "راسلني",
    en_text: "Contact Me",
    url: "#contact",
  },
  {
    ar_text: "مشاريعي",
    en_text: "Projects",
    url: "#projects",
  },
  {
    ar_text: "خبراتي",
    en_text: "Skills",
    url: "#skills",
  },
    {
      ar_text: "عني",
      en_text: "About Me",
      url: "#about",
    },
];

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:awadmoumen@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.me/966556215283",
  },
];


const NavLinks = (props) => {

  const { lang } = useLang();

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
    };

    return (
      <nav>
        <HStack spacing={props.space}>
          {props.type === "social-nav" ? 
          socials.map(social => {
              return <Button 
              fontSize={25} 
              textDecoration="none" 
              as="a"
              onClick={handleClick(social.url)} 
              href={social.url}
              _hover={{
                color: "#f4ac01"
              }}
              >
                <FontAwesomeIcon icon={social.icon}></FontAwesomeIcon>
              </Button>
          })
          :
          sections.map(section => {
            return <Button 
            fontSize="25px" 
            textDecoration="none" 
            as="a"
            onClick={handleClick(section.url)} 
            href={section.url}
            _hover={{
              color: "#f4ac01",
              fontSize: "25.5px"
            }}
            >
              {lang === "en" ? section.en_text : section.ar_text}</Button>
          })};  
        </HStack>
      </nav>
    );
};

export default NavLinks;
