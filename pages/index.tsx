import React, { useState } from "react";
import Head from "next/head";
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={styles.title}>
          Next Js To-do-list
        </h1>
      </section>
      <div className="container">
        <h1 className={styles.title}>
        Read{' '}
        <Link href="/posts/list">
          <a>this page!</a>
        </Link>
        </h1>
        <h2 className={styles.title}>
          <Link href="/posts/test">
            <a>Test</a>
          </Link>
        </h2>
        <h2 className={styles.title}>
          <Link href="/posts/test2">
            <a>Test2</a>
          </Link>
        </h2>
        <h2 className={styles.title}>
          <Link href="/posts/test3">
            <a>Test3</a>
          </Link>
        </h2>
        <h2 className={styles.title}>
          <Link href="/posts/testui">
            <a>TestUI</a>
          </Link>
        </h2>
      </div>
    </>
    );
  }