import React from 'react';
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import "../../styles/tailwind.css"
import { Header } from "./header"
import { Footer } from "./footer"
import { Content } from "./content"


type LayoutProps = {
  title: string,
}

const Container = styled.div`
   ${[tw`bg-blue-100`, css`padding:5px`]};
`

export const Layout: React.FunctionComponent<LayoutProps> = props => {
  return (
    <Container>
      <Header title={props.title}>
      </Header>
      <Content>
      {props.children}
      </Content>

      <Footer>
        My Company, Inc.
      </Footer>
    </Container>
  );
}

export default Layout;
