import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Button from './components/button'
import MyHeader from '../../components/myHeader/index'
import styles from './style.module.scss';

const Home = () => {
    return (
        <>
            <MyHeader>我是首页</MyHeader>
            <div className={styles.home_wrapper}>
                <div className={styles.inner_wrapper}>
                    <div className={styles.desc}>
                        没有绝对的公平，唯有砥砺前行。
                    </div>
                    <div className={styles.name}>
                        Jun@wW
                    </div>
                </div>
            </div>
        </>)
}
export default Home 