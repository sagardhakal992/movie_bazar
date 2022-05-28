import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { ReactQueryDevtools } from 'react-query/devtools'
import { store } from '../services/strores/store'
import AppLayout from '../components/Common/AppLayout'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const client=new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (<ChakraProvider>
    <QueryClientProvider client={client}>
      <Provider store={store}>
      <AppLayout>
      <Component {...pageProps} />
      </AppLayout>
      </Provider>
      <ReactQueryDevtools />
      <ToastContainer />
    </QueryClientProvider>
  </ChakraProvider>)
}

export default MyApp
