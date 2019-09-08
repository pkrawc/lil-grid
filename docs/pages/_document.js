import { default as NextDoc, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class Document extends NextDoc {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const originalRender = context.renderPage
    try {
      context.renderPage = () =>
        originalRender({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await NextDoc.getInitialProps(context)
      return {
        ...initialProps,
        styles: sheet.getStyleElement()
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#8ccbcd" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:200,400,700&display=swap"
            rel="stylesheet"
          />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
