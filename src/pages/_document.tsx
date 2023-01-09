import Document, { Head, Html, Main, NextScript } from 'next/document';
import { NextStrictCSP } from 'next-strict-csp';

import { AppConfig } from '@/utils/AppConfig';

const HeadCSP = process.env.NODE_ENV === 'production' ? NextStrictCSP : Head;

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        {/* <Head /> */}
        <HeadCSP
          {...(process.env.NODE_ENV === 'production' && (
            <meta httpEquiv="Content-Security-Policy" />
          ))}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
