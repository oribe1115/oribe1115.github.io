import { TargetSiteKey, TargetSiteUrls } from '../../data/sitecardTargets'
import { OGPInfo, genOgpInfo } from './ogp'

declare const data: {[key in TargetSiteKey]: OGPInfo}
export { data }

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
