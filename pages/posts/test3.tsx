import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import axios from 'axios'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';
import Modal from '../components/modal';
import Fail from '../components/fail';
import Done from '../components/done';
import List from '../components/lists/list';
import DoingList from '../components/lists/doingList';

const Index = ({ listDoing, listDone, listFailed, error }) => {
  if (error) {
    return <div>An error occured: {error}</div>;
  }

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(undefined);

  const openModal = (list) => {
    setModalOpen(list);
  }
  const closeModal = () => {
    setModalOpen(undefined);
    location.reload();
  }


  const handleDelete = (delete_index) => {

    const trashRequest = async () => {
      console.log(delete_index + "휴지통");
      try {
        const response1 = await axios({
          method: 'delete',
          url: 'http://localhost:3001/todos/' + delete_index,
          params: {
            list_index: delete_index,
          },
        })
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    trashRequest();
    location.reload();
  }

  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>First Post</title>
        </Head>
        <Nav></Nav>
        <main className={styles.list}>
          

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
    // console.log("listDoing");
    // console.log(listDoing);
    // console.log("listDone");
    // console.log(listDone);
    return { listDoing, listDone, listFailed };
  } catch (error) {
    return { list: {}, error };
  }
};

export default Index
