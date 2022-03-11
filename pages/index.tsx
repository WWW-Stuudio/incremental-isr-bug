import type { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import { fetchEditionsList } from "../utils/api"

const Home: NextPage = ({ editions }: any) => {
  return (
    <div className={styles.container}>
      <h1>Pages</h1>

      {editions.map((edition: any, index: number) => {
        return (
          <Link href={`/${edition.slug}`} key={index}>
            <a>{edition.slug}</a>
          </Link>
        )
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const editions = await fetchEditionsList()

  return {
    props: {
      editions,
    },
  }
}

export default Home
