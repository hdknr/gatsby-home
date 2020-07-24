import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import "../styles/style.css"

const Container = styled.div`
${[tw`text-blue-500`, css`margin:10px; padding:20px; border: solid`]}
`

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      Hello, World!
    </Container>
  );
}

export default Home;