import ogp from 'ogp-parser'
import { TargetSiteKey, TargetSiteUrls } from '../../data/sitecardTargets'

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
  const ogpData =  await ogp(url)

  const getMetaValue = (name: string) => {
    const values = ogpData.ogp[name]
    return values ? values[0] : ''
  }

  const info: OGPInfo = {
    url: url,
    title: getMetaValue('og:title'),
    image: getMetaValue('og:image'),
    siteName: getMetaValue('og:site_name'),
    description: getMetaValue('og:description'),
    host: new URL(url).hostname
  }
  return info
}