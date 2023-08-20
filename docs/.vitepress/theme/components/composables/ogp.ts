import ogs from 'open-graph-scraper'

export interface OGPInfo {
  url: string
  title?: string
  image?: string
  siteName?: string
  description?: string
  host: string
}

export const genOgpInfo = async (url: string) => {
  const result = await ogs({url})

  if (result.error) {
    return {
      url: url,
      host: new URL(url).hostname
    }
  }

  const ogpData = result.result

  const imageUrl:string = ogpData.ogImage ? ogpData.ogImage[0].url : ''

  const info: OGPInfo = {
    url: url,
    title: ogpData.ogTitle,
    image: imageUrl,
    siteName: ogpData.ogSiteName,
    description: ogpData.ogDescription,
    host: new URL(url).hostname
  }
  return info
}