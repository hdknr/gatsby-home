import React from 'react';
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "tailwind.macro"


const Container = styled.div`
   ${tw`text-right bg-yellow-100`}; 
`

export const Footer: React.FunctionComponent = ({ children }) => {
  return (
    <Container id="footer">
      {children}
    </Container>
  );
}

export default Footer;
