import Head from 'next/head'
import { Partytown } from '@builder.io/partytown/react'

import Hero from './components/Hero'
// import Card from './components/Card'
import LastBlog from './components/LastBlog'
import Newsletter from './components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daouda BA 👨🏽‍💻 | Fullstack Developer</title>
        <Partytown debug={true} forward={['dataLayer.push']} />
        <meta name="description" content="Daouda BA 👨🏽‍💻, Fullstack Developer, Based in DAKAR, Senegal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      <main className="px-4 mt-16 mx-auto max-w-lg space-y-16 lg:max-w-screen-xl sm:px-6 lg:px-8 lg:space-y-32">
        <Hero />
        {/* <Card /> */}
        <LastBlog />
        <Newsletter />
      </main>
    </>
  )
}
