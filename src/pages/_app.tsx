import React, { useRef } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from 'redux/store'; 
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { EmotionCache } from '@emotion/cache';
import createEmotionCache from 'createEmotionCache';
import {useRouter} from 'next/router';
import AuthRoutes from 'utils/AuthRoutes';
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import Swal from 'sweetalert2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from 'utils/app-context-provider';
import AppThemeProvider from 'utils/app-theme-provider';
import AppStyleProvider from 'utils/app-style-provider';
import { StoreProvider } from 'utils/StoreUtils/Store.js';
// import { createFirebaseApp } from 'components/firebase'
import '../styles/globals.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }	
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const store = useStore(pageProps.initialReduxState);

  const router = useRouter();
  let { message } = router.query // For Example: login?redirect=/hotels&message=You-are-logged-in
  if (message) {
    message = String(message);
    message = message.replace(/-/g,' ');
    Swal.fire(message, '', 'info');
  }
  
  // createFirebaseApp();

  return (
		<CacheProvider value={emotionCache}>
			<QueryClientProvider client={queryClientRef.current}>
				<Hydrate state={pageProps.dehydratedState}>
						{/* <Head>
							<title>Totel</title>
							<meta name='viewport' content='initial-scale=1, width=device-width' />
						</Head> */}
						{/* <AppContextProvider> */}
							<Provider store={store}>
								<AppThemeProvider>
									<AppStyleProvider>
										<AuthRoutes>
											<CssBaseline />
											<Component {...pageProps} />
										</AuthRoutes>
									</AppStyleProvider>
								</AppThemeProvider>
							</Provider>
						{/* </AppContextProvider> */}
				</Hydrate>
			</QueryClientProvider>
		</CacheProvider>		
  )
}

export default MyApp

// <StoreProvider>
//   <Component {...pageProps} />
//   <div id="modal-root"></div>
// </StoreProvider>