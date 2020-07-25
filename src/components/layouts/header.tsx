import React from 'react';
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "tailwind.macro"


type HeaderProps = {
  title: string,
  paragraph?: string
}

const Container = styled.div`
   ${tw`bg-red-300`}; 
`

export const Header: React.FunctionComponent<HeaderProps> = props => {
  return (
    <Container id="header">
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      {props.children}
    </Container>
  );
}

export default Header;
