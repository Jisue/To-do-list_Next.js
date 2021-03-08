import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';
import AddTodo from '../components/add';
import React from 'react';
import Grid from '@material-ui/core/Grid';

function AddList() {
  return (
    <div className={styles.main}>
      <Head>
        <title>First Post</title>
      </Head>

      <Nav></Nav>

      <main className={styles.list}>
      <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
          </Grid>
          <Grid item xs={12} sm={8}>
            <h1>
          New List
          </h1>
            <hr />
          </Grid>
          <Grid item xs={12} sm={2}>
          </Grid>
        </Grid>

        <AddTodo></AddTodo>

      </main>
    </div>
  )
}

export default AddList