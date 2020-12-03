import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

import ChannelList from '../components/channelList'
import UserList from '../components/userList'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const users = useSWR('/api/getUsers', fetcher)

  return (
    <div className={styles.container}>
      <Head>
        <title>HackSC Slack Demo Control Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ChannelList />
        <UserList data={users.data} error={users.error} />

      </main>
    </div>
  )
}
