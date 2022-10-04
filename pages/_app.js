// _app.js
import React from 'react'

import '../styles/styles.scss'; //你的全局css样式

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps}></Component>
}