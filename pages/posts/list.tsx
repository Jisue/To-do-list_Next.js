import Head from 'next/head'
import styles from '../../styles/List.module.css'
import axios from 'axios'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';
import Fail from '../components/buttons/fail';
import List from '../components/lists/list';
import DoingList from '../components/lists/doingList';
import Grid from '@material-ui/core/Grid';

const Index = ({ listDoing, listDone, listFailed, error }) => {
  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
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
                  Doing
                </h1>
                <hr />
                <DoingList getlist={listDoing}></DoingList>
              </div>
              <hr />
              <div>
                <h1>
                  Done
                </h1>
                <hr />
                <List getlist={listDone}></List>
              </div>
              <hr />
              <div>
                <h1>
                  Failed
                </h1>
                <hr />
                <List getlist={listFailed}></List>
              </div>
              <hr />
              <h2>
                <Fail listDoing={listDoing} error={error} ></Fail>
              </h2>
            </Grid>
            <Grid item xs={12} sm={2}>
            </Grid>
          </Grid>
        </main>
      </div>
    </>

  );
};

Index.getInitialProps = async function () {
  try {
    const res = await axios.get('http://localhost:3001/todos');
    const list = res.data[0];
    const listDoing = [];
    const listDone = [];
    const listFailed = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].list_status === 'Doing' && list[i].list_on === 1)
        listDoing.push(list[i]);
      else if (list[i].list_status === 'Done' && list[i].list_on === 1)
        listDone.push(list[i]);
      else if (list[i].list_status === 'Failed' && list[i].list_on === 1)
        listFailed.push(list[i]);
    }
    return { listDoing, listDone, listFailed };
  } catch (error) {
    return { list: {}, error };
  }
};

export default Index
