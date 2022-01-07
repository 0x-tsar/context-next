/* eslint-disable react/jsx-props-no-spreading */
import '../../styles/globals.css'
import React from 'react'
import { CartProvider } from '../context/index'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
