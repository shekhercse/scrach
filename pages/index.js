import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content'




export default function Home () {
  return (
    <div className="">
      <Head>
        <title>Chander Shekher</title>
        <meta name="description" content="Full Website Development frontend and backend website development" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <main>
        < Navbar />
        < Content />
        <Footer/>
      </main>
    </div>
  )
}
