import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="antialiased" />
}

export default MyApp
