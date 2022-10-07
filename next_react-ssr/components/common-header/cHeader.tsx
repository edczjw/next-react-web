import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'

const Cheader = () => {
  const src = 'http://img.thosefree.com/static/logo.png'
  return (
    <div className={styles.c_hrader_wrapper}>
      <div className={styles.c_hrader_wrapper_logo}>
        <a href="#">
          <Image src={src} height={'72px'} width={'72px'} alt="杰瑞" >
          </Image>
        </a>
        <h1 className={styles.sub_title}>杰瑞</h1>
      </div>

      <ul className={styles.c_hrader_wrapper_menu}>
        <li className={styles.active}>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">可达鸭</a>
        </li>
        <li>
          <a href="#">关于我们</a>
        </li>
      </ul>
    </div>
  )
}

export default Cheader
