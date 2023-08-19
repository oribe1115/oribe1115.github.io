import ogp from 'ogp-parser'

export type OGPInfo = {
  url: string
  title?: string
  image?: string
  siteName?: string
  description?: string
  host: string
}

const targetUrls = ['https://trap.jp/post/1710/', 'https://oribe1115.hatenablog.com/entry/2020/09/09/011304']

export default {
  async load() {
    const ogpInfos: OGPInfo[] = await Promise.all(targetUrls.map(async (url) => {
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
    }))
    const data: {[url:string]: OGPInfo} = {}
    ogpInfos.forEach((item) => {
      data[item.url] = item
    })
    return data
  }
}