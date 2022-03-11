import type { GetStaticPaths, GetStaticProps } from "next"

type Props = {
  time: string;
}

export const getStaticPaths: GetStaticPaths = async ({ defaultLocale }) => {
  const paths = [{
    params: {
      page: "page-1"
    },
  }, {
    params: {
      page: "page-2"
    },
  }, {
    params: {
      page: "page-3"
    },
  }, {
    params: {
      page: "page-4"
    }
  }
  ]

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Europe/Tallinn")
  const json = await res.json()

  return {
    props: {
      time: json.datetime
    },
  }
}

const Page = ({time}: Props) => {
  return (<h1>{time}</h1>)
}

export default Page
