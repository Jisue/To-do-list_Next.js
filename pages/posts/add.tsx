import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';
import Add from '../components/add';

const Posts = (props) => {
  const list = props.posts[0];

  return (
    <div className={styles.main}>
      <Head>
        <title>First Post</title>
      </Head>
      
      <Nav></Nav>

      <main className={styles.list}>
        <h1>
          New List
        </h1>

        <Add></Add>
      </main>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
};

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:3001/todos`);
  const data = await res.json()

  return { props: { posts: data } }
}


export default Posts;