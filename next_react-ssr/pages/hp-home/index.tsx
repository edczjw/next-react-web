import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Cheader from '@/components/common-header/cHeader'
import Swiper from '@/components/swiper/Swipers'
import styles from './style.module.scss'
import MainBox from '@/components/mainItem/Mainbox'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>杰罗德的首页</title>
        <meta name="description" content="欢迎来到杰瑞的首页" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cheader></Cheader>

      <MainBox />

      <footer className={styles.footer}>Copy Right©2022, All Rights Reserved. THOSEFREE.COM
        皖ICP备20005754号</footer>
    </div>
  )
}

export default Home
