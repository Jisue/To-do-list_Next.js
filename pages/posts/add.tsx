import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/List.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/nav';
import AddTodo from '../components/add';

function AddList() {
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

        <AddTodo></AddTodo>

      </main>
      <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
    </div>
  )
}

export default AddList