import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import { dataItem } from './data'
import Router from "next/router"

const MainBox = () => {
    const toItemPage = (item: any) => {
        Router.push(item.url)
        console.log(item.url);
    }
    const listItem = dataItem.map((item) => <li className={styles.item} key={item.id} onClick={()=>toItemPage(item)} data-name={item.name}>{item.name}</li>)
    return (
        <div className={styles.MainBox_wrapper}>
            <ul className={styles.m_ul}>
                {listItem}
            </ul>
        </div>
    )
}

export default MainBox
