import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import Header from '../components/Header'
import PricePlan from '../components/SubscriptionPlan'
import Footer from '../components/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    
    <html className={styles.container} >
        <Head>
          <title>Borealis</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <main className={styles.main}>
          <div className={styles.header}>
            <Nav />
            <div className={styles.logoHeader}>
              <Image src="/logoWorkspace.png" alt="Spare workspace logo" width={250} height={60} />
            </div>
            <Header />
            <PricePlan />
            <Footer />
          </div>
        </main>
    </html>
  )
}

export default Home
