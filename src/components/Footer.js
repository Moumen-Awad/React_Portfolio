import React from "react";
import {Box, HStack, Text, VStack} from "@chakra-ui/react";
import NavLinks from "./NavLinks"

const Footer = () => {
  return (
    <Box>
    <footer>
        <Box maxWidth="1280px" margin="0 auto">
        <HStack  
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          >
            <VStack>
              <NavLinks type="social-nav" space="25"></NavLinks>
              <Text dir="ltr" fontSize={20}>© 2023 Moumen Awad</Text>
            </VStack>
            <NavLinks type="section-nav" space="25"></NavLinks>
        </HStack>
        </Box>
      </footer>
    </Box>
  );
};
export default Footer;
