import React from 'react';
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

const Container = styled.div`
`

export const Content: React.FunctionComponent = ({ children }) => {
  return (
    <Container id="content">
      {children}
    </Container>
  );
}

export default Content;
