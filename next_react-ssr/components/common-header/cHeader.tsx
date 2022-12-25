import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'

const Cheader = () => {
  const src = 'http://img.thosefree.com/static/logo.png'
  return (
    <div className={styles.c_hrader_wrapper}>
      <div className={styles.c_inner_box}>
        <div className={styles.logo_box}>
          <a className={styles.name}>Jarod_Code 杰罗德的代码宇宙</a>
          <div className={styles.desc}>记录杰罗德学习成长的过程，奔向宇宙~</div>
        </div>
        <div className={styles.wrapper_menu}>
          <a href='' className={[`${styles.active}`].join(' ')} href="#">首页</a>
          <a href="#">简历</a>
          <a href="#">关于</a>
        </div>
      </div>
    </div>
  )
}

export default Cheader
