import React from "react";
import { Box } from "@chakra-ui/react";

const SectionContainer = ({children}) => {
  return (
    <Box
    justifyContent="center"
    alignItems="center"
    className={"Container"}
    >
      {children}
  </Box>
  );
};

export default SectionContainer;
