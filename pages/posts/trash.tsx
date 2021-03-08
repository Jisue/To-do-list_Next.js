import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';
import TrashList from '../components/lists/trashList';
import Grid from '@material-ui/core/Grid';

const Index = ({ listOff, error }) => {
  if (error) {
    return <div>An error occured: {error}</div>;
  }

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
            <div>
              <h1>
                Trash
          </h1>
          <hr />
              <TrashList getlist={listOff}></TrashList>
            </div>
            <hr />
          </Grid>
          <Grid item xs={12} sm={2}>
          </Grid>
        </Grid>
      </main>
    </div>

  );
};

Index.getInitialProps = async function () {
  try {
    const res = await axios.get('http://localhost:3001/trashs');
    const listOff = res.data[0];

    console.log("listOff");
    console.log(listOff);

    return { listOff };
  } catch (error) {
    return { list: {}, error };
  }
};

export default Index