import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import axios from 'axios'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';

const Index = ({ list, error }) => {
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
        <h1>
          List
        </h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {list && list.map((list: { list_index: React.Key; list_name: React.ReactNode; list_status: React.ReactNode; list_dday: React.ReactNode; list_memo: React.ReactNode; }) => (
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
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
                  <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
                <small className="text-muted">{list.list_status}</small>
              </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
          <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        </div>
    
    );
  };

Index.getInitialProps = async function() {
        try {
            const res = await axios.get('http://localhost:3001/todos');
            const list = res.data[0];
            return { list };
          } catch (error) {
            return { list:{},error };
          }
    };

export default Index



// export default function FirstPost() {

//   return (
//     <div className = {styles.main}>
//       <Head>
//         <title>First Post</title>
//       </Head>
//       <h1>
//           List
//       </h1>
//       <div>

//       </div>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </div>
//   )
// }