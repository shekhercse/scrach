import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"
import Section1 from '../components/Section1'


export default function Home () {
  return (
    <div className="container">
      <Head>
        <title>Chander Shekher</title>
        <meta name="description" content="Full Website Development frontend and backend website development" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Navbar />
        <Banner />
        <Section1/>
        
      </main>
    </div>
  )
}
