import React from 'react'
import { AppProps } from 'next/app'

const MyApp: React.FC = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
