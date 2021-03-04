import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';

const Index = ({ listOff, error }) => {
  if (error) {
    return <div>An error occured: {error}</div>;
  }
  const handleDelete = (delete_index) => {

    if (confirm("영구 삭제 됩니다.") === false) {
      return;
    }

    const trashRequest = async () => {
      console.log(delete_index + "영구 삭제");
      try {
        const response1 = await axios({
          method: 'delete',
          url: 'http://localhost:3001/trashs/' + delete_index,
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

  const handleUpdate = (update_index) => {

    const restoreRequest = async () => {
      console.log(update_index + "복구됨");
      try {
        const response1 = await axios({
          method: 'put',
          url: 'http://localhost:3001/trashs/' + update_index,
          params: {
            list_index: update_index,
          },
        })
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    restoreRequest();
    location.reload();
  }

  return (
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {listOff && listOff.map((list: { list_index: React.Key; list_name: React.ReactNode; list_status: React.ReactNode; list_dday: React.ReactNode; list_memo: React.ReactNode; list_color: React.ReactNode; }) => (
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body" style={{ backgroundColor: "" + list.list_color }}>
                    <div key={list.list_index}>
                      <h3>{list.list_name}</h3>
                      <small className="text-muted">D-Day : {list.list_dday}</small>
                      <br></br>
                      <br></br>
                      {/* <p>{list.list_color}</p> */}
                      <p className="card-text">{list.list_memo}</p>
                      <br></br>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleUpdate(list.list_index)}>Restore</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleDelete(list.list_index)}>Delete</button>
                      </div>
                      <small className="text-muted">{list.list_status}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <hr/>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
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