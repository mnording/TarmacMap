import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const renderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return renderPage({
          enhanceApp: (App) => {
            return (props) => {
              return sheet.collectStyles(<App {...props} />);
            };
          },
        });
      };

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styles } = this.props;

    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="application-name" content="App" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          <link rel="shortcut icon" href="/larsa-logo.jpg" />
      
<link rel="apple-touch-startup-image" href="/larsa-logo.jpg" /> 

<link rel="apple-touch-startup-image" href="/larsa-logo.jpg" media="screen and (-webkit-min-device-pixel-ratio: 2)" /> 

          {styles}
          
       
           <script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAZDFNdRkrXdz7dktWYKurYpPKzYZgsqzQ&callback=initMap&libraries=&v=weekly`}
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
