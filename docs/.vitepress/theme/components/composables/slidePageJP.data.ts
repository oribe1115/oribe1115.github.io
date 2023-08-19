import { createContentLoader } from 'vitepress'
import { SlidePageInfo, convertToSlidePageInfos } from './slidePageInfo'

declare const data: SlidePageInfo[]
export { data }

export default createContentLoader('slides/*.md', {
  transform(raw): SlidePageInfo[] {
    return convertToSlidePageInfos(raw)
  }
})