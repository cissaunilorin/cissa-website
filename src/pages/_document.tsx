import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/images/icons/cissa192.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="cissa" />
          <link rel="manifest" href="/manifest.json" />

          {/* fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#ffffff"
          />
          <meta name="apple-mobile-web-app-title" content="cissa" />
          <link
            rel="apple-touch-icon"
            href="/images/icons/cissa32.png"
            sizes="32x32"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/cissa64.png"
            sizes="64x64"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/cissa144.png"
            sizes="144x144"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/cissa192.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/cissa512.png"
            sizes="512x512"
          />

          {/* internet explorer */}
          <meta
            name="msapplication-TileImage"
            content="/images/icons/cissa192.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
