import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import axios from 'axios'

export default function FirstPost() {

  return (
    <div className = {styles.main}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>
          List
      </h1>
      <div>

      </div>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}