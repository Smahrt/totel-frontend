import Head from "next/head";

import VerifyOTPCode from 'components/VerifyOTPCode';

const VerifyOTPCodePage = ({params}) => {
  return (<>
    <Head>
      <title>Verify code</title>
      <meta name="description" content="Verify code page." />
      <meta httpEquiv="Access-Control-Allow-Origin" content="https://google.com" />
    </Head>

    <VerifyOTPCode whichPage='verifyOTPCode' params={params}/>
  </>)
}

export default VerifyOTPCodePage;