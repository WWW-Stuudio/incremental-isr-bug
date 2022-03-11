import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message?: string
  revalidated?: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>,
) {
  const { uri } = req.query

  console.log("REVALIDATE", uri)

  try {
    await res.unstable_revalidate(`/${uri}`)
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err)
    return res.status(500).send("Error revalidating")
  }
}
