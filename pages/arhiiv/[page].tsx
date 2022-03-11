import type { GetStaticPaths, GetStaticProps } from "next"
import { fetchEdition, fetchSiteData } from "../../utils/api"

export const getStaticPaths: GetStaticPaths = async ({ defaultLocale }) => {
  const paths = [
    {
      params: {
        page: "page-1",
      },
    },
    {
      params: {
        page: "page-2",
      },
    },
    {
      params: {
        page: "page-3",
      },
    },
    {
      params: {
        page: "page-4",
      },
    },
  ]

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params as any
  const data = await fetchEdition({ page })
  const siteData = await fetchSiteData()

  return {
    props: {
      data,
      siteData,
    },
  }
}

const Page = ({ data, siteData }: any) => {
  if (!data || !siteData) {
    return null
  }

  return (
    <>
      <h1>{siteData?.generalSettings.title}</h1>
      <h3>{data?.title}</h3>
    </>
  )
}

export default Page
