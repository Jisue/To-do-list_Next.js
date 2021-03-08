import React, { useState } from "react";
import Head from "next/head";
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Explain from "./components/explain";
import Grid from "@material-ui/core/Grid";
import Nav from "./components/nav";
import 'bootstrap/dist/css/bootstrap.css';
import indexstyles from '../styles/index.module.css'

export default function Home() {

  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <Nav></Nav>
      <main className={indexstyles.main}>
        <section className={utilStyles.headingMd}>
          <h1 className={styles.title}>
            Next Js To-do-list
          </h1>
        </section>
        <div className={indexstyles.ex}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm ={4}>
            <p></p>
          </Grid>
          <Grid item xs={12} sm={5}>
          <Explain></Explain>
          </Grid>
          <Grid item xs={12} sm={3}>
          <p></p>
          </Grid>
        </Grid>

        <h1 className={styles.title}>
          Go{' '}
          <Link href="/posts/list">
            <a>this page!</a>
          </Link>
          </h1>
        </div>
      </main>
    </>
    );
  }