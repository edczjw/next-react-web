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
        <title>杰瑞的首页</title>
        <meta name="description" content="欢迎来到杰瑞的首页" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Cheader></Cheader>

        <div className={styles.main_inner}>
          <MainBox />
          {/* <Swiper /> */}
        </div>
        {/* <div className={styles.aside}>
          <div className={styles.aside_block}></div>
        </div> */}
      </main>

      <footer className={styles.footer}>Copy Right©2022, All Rights Reserved. THOSEFREE.COM
        皖ICP备20005754号</footer>
    </div>
  )
}

export default Home
