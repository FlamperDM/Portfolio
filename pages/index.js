import Head from 'next/head'

import { navLinks, portfolioData, experienceData, aboutData } from './../util'

import NavBar from './../components/NavBar'
import Header from './../components/Header'
import About from './../components/About'
import Portfolio from './../components/Portfolio'
import Experiences from './../components/Experiences'
import Contact from './../components/Contact'
import Footer from './../components/Footer'

import PortfolioModal from './../components/modal/PortfolioModal'

// import './../styles/App.css'

export default function Home() {
  const name = "Flampeyeiry Diaz"
  const url = "https://www.flampdiaz.dev/"
  const description = "Software Engineer specializing in VR, Game Development, and Web Development"
  const url_thumbnail_512 = "/thumbnail512.jpg"
  const url_thumbnail_192 = "/thumbnail192.jpg"
  const url_manifest = "manifest.json"
  const url_favicon = "/favicon.ico"
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{name}</title>
        <meta name="title" content={name}/>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={url}/>
        <meta property="og:title" content={name}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={url_thumbnail_512}/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={url}/>
        <meta property="twitter:title" content={name}/>
        <meta property="twitter:description" content={description}/>
        <meta property="twitter:image" content={url_thumbnail_512}/>

        <link rel="icon" href={url_favicon}/>
        <link rel="apple-touch-icon" href={url_thumbnail_192}/>
        <link rel="manifest" href={url_manifest}/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      </Head>

      <main>
        <div className="App">
          <NavBar navLinks={navLinks}/>
          <Header/>
          <Portfolio portfolioData={portfolioData}/>
          <About data={aboutData}/>
          <Experiences experienceData={experienceData}/>
          <Contact/>
          <Footer/>

          <PortfolioModal/>
        </div>
      </main>
    </>
  )
}
