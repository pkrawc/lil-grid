import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled from "styled-components"
import theme from "prism-react-renderer/themes/shadesOfPurple"

const StyledPre = styled.pre`
  padding: 2rem;
  border-radius: 0.25rem;
  font-family: "IBM Plex Mono";
  .token-line:last-of-type {
    display: none;
  }
`

export default ({ children, className }) => {
  const language = className.replace(/language-/, "")
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          {tokens.map((line, lineIdx) => (
            <div key={lineIdx} {...getLineProps({ line, key: lineIdx })}>
              {line.map((token, tokenIdx) => (
                <span key={tokenIdx} {...getTokenProps({ token, key: tokenIdx })} />
              ))}
            </div>
          ))}
        </StyledPre>
      )}
    </Highlight>
  )
}
