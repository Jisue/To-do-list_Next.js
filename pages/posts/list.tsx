import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';
import { ParsedUrlQueryInput, stringify } from 'querystring';

const Index = ({ listDoing, listDone, listFailed, error }) => {
  if (error) {
    return <div>An error occured: {error}</div>;
  }

  const handleDelete = (delete_index) => {
    // alert(list_name + '\n' +list_date + '\n' +list_memo + '\n' +list_color);
    // e.preventDefault();

    if (confirm("정말 버리겠습니까??") === false) {
      return;
    }

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
          <div>
            <h1>
              List Doing
                    </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {listDoing && listDoing.map((list: { list_index: React.Key; list_name: React.ReactNode; list_status: React.ReactNode; list_dday: React.ReactNode; list_memo: React.ReactNode; list_color: React.ReactNode; }) => (
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body" style={{ backgroundColor: "" + list.list_color }}>
                      <div key={list.list_index}>
                        <h3>{list.list_name}</h3>
                        <small className="text-muted">D-Day : {list.list_dday}</small>
                        <br></br>
                        <br></br>
                        <p className="card-text">{list.list_memo}</p>
                        <br></br>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
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

          <hr />

          <div>
            <h1>
              List Done
                    </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {listDone && listDone.map((list: { list_index: React.Key; list_name: React.ReactNode; list_status: React.ReactNode; list_dday: React.ReactNode; list_memo: React.ReactNode; list_color: React.ReactNode; }) => (
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body" style={{ backgroundColor: "" + list.list_color }}>
                      <div key={list.list_index}>
                        <h3>{list.list_name}</h3>
                        <small className="text-muted">D-Day : {list.list_dday}</small>
                        <br></br>
                        <br></br>
                        <p className="card-text">{list.list_memo}</p>
                        <br></br>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
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

          <hr />

          <div>
            <h1>
              List Failed
                    </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {listFailed && listFailed.map((list: { list_index: React.Key; list_name: React.ReactNode; list_status: React.ReactNode; list_dday: React.ReactNode; list_memo: React.ReactNode; list_color: React.ReactNode; }) => (
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body" style={{ backgroundColor: "" + list.list_color }}>
                      <div key={list.list_index}>
                        <h3>{list.list_name}</h3>
                        <small className="text-muted">D-Day : {list.list_dday}</small>
                        <br></br>
                        <br></br>
                        <p className="card-text">{list.list_memo}</p>
                        <br></br>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
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

          <hr />

        </main>

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
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
