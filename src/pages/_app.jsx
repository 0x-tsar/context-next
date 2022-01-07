/* eslint-disable react/jsx-props-no-spreading */
import '../../styles/globals.css'
import React from 'react'
import { CartProvider } from '../context/index'

function MyApp({ Component, pageProps }) {
  const foo = function foo(params) {
    return params
  }

  console.log(foo)

  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
