const GRAPHQL_URL = process.env.GRAPHQL_URL

export async function fetchAPI({
  query,
  variables,
  previewData = null,
}: {
  query: string
  variables?: { [key: string]: any }
  previewData?: any
}) {
  if (!GRAPHQL_URL) {
    return
  }

  const headers = { "Content-Type": "application/json" } as {
    [key: string]: string
  }

  if (previewData?.refreshToken) {
    headers["Authorization"] = `Bearer ${previewData.refreshToken}`
  }

  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch WP Graphql API")
  }

  return json.data
}

export async function fetchEditionsList() {
  const query = `
    {
      editions(first: 100, where: {language: ALL}) {
        nodes {
          slug
        }
      }
    }
  `
  const data = await await fetchAPI({ query })
  return data ? data.editions.nodes : null
}

export async function fetchEdition({ page }: { page?: string }) {
  const query = `
    query ($page: ID!) {
      edition(id: $page, idType: URI) {
        title
      }
    }
  `

  const variables = {
    page,
  }

  const data = await await fetchAPI({ query, variables })
  console.log(data)
  return data ? data.edition : null
}
