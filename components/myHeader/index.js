import Head from 'next/head'
import React from 'react'

const MyHeader = ({children}) => {
    return (
        <>
            <Head>
                <title>
                    {children}</title>
            </Head>
        </>
    )
}
export default MyHeader