import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import axios from 'axios'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';
import Fail from '../components/buttons/fail';
import List from '../components/lists/list';
import DoingList from '../components/lists/doingList';

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
          <div>
            <h1>
              List Doing
            </h1>
            <DoingList getlist={listDoing}></DoingList>
          </div>

          <hr />
          <div>
            <h1>
              List Done
            </h1>
            <List getlist={listDone}></List>
          </div>

          <hr />

          <div>
            <h1>
              List Failed
            </h1>
            <List getlist={listFailed}></List>
          </div>

          <hr />
        </main>
        

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
          <Fail listDoing={listDoing} error={error} ></Fail>
        </h2>
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
