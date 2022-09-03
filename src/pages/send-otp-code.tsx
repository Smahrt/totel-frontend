import Head from "next/head";

import SendOTPCode from 'components/auth/SendOTPCode';

const SendOTPCodePage = () => {
  return (<>
    <Head>
      <title>Send verification code</title>
      <meta name="description" content="Send verification code page." />
      <meta httpEquiv="Access-Control-Allow-Origin" content="https://google.com" />
    </Head>

    <SendOTPCode whichPage='sendOTPCode' />
  </>)
}

export default SendOTPCodePage;