import type { GetStaticPaths, GetStaticProps } from "next"
import { fetchEdition } from "../utils/api"

type Props = {
  data: any
}

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

  return {
    props: {
      data,
    },
  }
}

const Page = ({ data }: Props) => {
  return <h1>{data?.title}</h1>
}

export default Page
