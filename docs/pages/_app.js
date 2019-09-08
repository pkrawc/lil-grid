import React from "react"
import { default as NextApp } from "next/app"
import styled from "styled-components"
import Base from "../components/base-styles"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/code-block"

const Container = styled.main`
  max-width: 84rem;
  margin: 10rem auto;
  padding: 0 2rem;
`

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <MDXProvider components={components}>
        <Container>
          <Base />
          <Component {...pageProps} />
        </Container>
      </MDXProvider>
    )
  }
}

export default App
