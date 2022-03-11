import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Pages</h1>
      <Link href="/page-1">
        <a>Page 1</a>
      </Link>
      <Link href="/page-2">
        <a>Page 2</a>
      </Link>
      <Link href="/page-3">
        <a>Page 3</a>
      </Link>
      <Link href="/page-4">
        <a>Page 4</a>
      </Link>
    </div>
  )
}

export default Home
