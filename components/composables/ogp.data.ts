import ogp from 'ogp-parser'
import { TargetSiteKey, TargetSiteUrls } from '../../data/sitecardTargets'

export type OGPInfo = {
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
  const ogpData =  await ogp(url)
  const info: OGPInfo = {
    url: url,
    title: ogpData.ogp['og:title'][0],
    image: ogpData.ogp['og:image'][0],
    siteName: ogpData.ogp['og:site_name'][0],
    description: ogpData.ogp['og:description'][0],
    host: new URL(url).hostname
  }
  return info
}