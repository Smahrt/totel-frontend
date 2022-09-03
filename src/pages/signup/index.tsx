import Head from "next/head";

import LoginRegister from 'components/auth/LoginRegister';

const Register = () => {
  return (<>
    <Head>
      <title>Register</title>
      <meta name="description" content="Register page." />
      <meta httpEquiv="Access-Control-Allow-Origin" content="https://google.com" />
    </Head>

    <LoginRegister whichPage='register' />
  </>)
}

export default Register;