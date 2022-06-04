import { Layout } from '../components/Layout'
import '../public/assets/css/global.css'
import ReactBreakpoints from 'react-breakpoints'

function MyApp({ Component, pageProps }) {

  const breakpoints = {
    mobile: 320,
    mobile360: 360,
    menuMain: 605,
    settings: 620,
    menuMobile: 750,
    desktop: 761,
  }

  return (

    <ReactBreakpoints breakpoints={breakpoints}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactBreakpoints>
  )
}

export default MyApp