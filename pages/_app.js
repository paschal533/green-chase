import { ChakraProvider } from '@chakra-ui/react';
import { MoralisProvider } from "react-moralis";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider appId={'PhHzazleoS4huOotpxjGCiBr54pFCFHKCRiZBe4Z'} serverUrl={'https://jzo6ate4hkqf.usemoralis.com:2053/server'}>
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp
