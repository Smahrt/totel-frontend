import Head from "next/head";

import LoginRegister from 'components/auth/LoginRegister';

const Login = () => {
  return (<>
    <Head>
      <title>Login</title>
      <meta name="description" content="Login page." />
    </Head>

    <LoginRegister whichPage='login' />
  </>)
}

export default Login;