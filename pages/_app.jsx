import { useEffect } from 'react'
import '../styles/globals.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hljs.highlightAll()
  }, [Date.now()])

  return <Component {...pageProps} />
}

export default MyApp
