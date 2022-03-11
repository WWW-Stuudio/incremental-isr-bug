import type { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import styles from "../../styles/Home.module.css"
import { fetchEditionsList } from "../../utils/api"

const Home: NextPage = ({ editions, siteData }: any) => {
  return (
    <div className={styles.container}>
      <h1>{siteData.generalSettings.title} Pages</h1>

      {editions.map((edition: any, index: number) => {
        return (
          <Link href={`/arhiiv/${edition.slug}`} key={index}>
            <a>{edition.slug}</a>
          </Link>
        )
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const editions = await fetchEditionsList()
  const siteData = await fetchSiteData()

  return {
    props: {
      editions,
      siteData,
    },
  }
}

export default Home
