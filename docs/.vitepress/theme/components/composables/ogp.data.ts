import { TargetSiteKey, TargetSiteUrls } from '../../data/sitecardTargets'
import ogs from 'open-graph-scraper'

declare const data: {[key in TargetSiteKey]: OGPInfo}
export { data }

export interface OGPInfo {
  url: string
  title?: string
  image?: string
  siteName?: string
  description?: string
  host: string
}

export default {
  async load() {
    const data: {[key in TargetSiteKey]: OGPInfo} = Object.fromEntries(
      await Promise.all(
        TargetSiteUrls.map(async ({key, url}) => {
          const info = await genOgpInfo(url)
          return [key, info]
        })
      )
    )
    return data
  }
}

const genOgpInfo = async (url: string) => {
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