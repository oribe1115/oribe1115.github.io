import { ContentData } from 'vitepress'

export interface SlidePageInfo {
  title: string
  url: string
}

export const convertToSlidePageInfos = (raw: ContentData[]): SlidePageInfo[] => {
  return raw
  .sort((a, b) => b.frontmatter.date - a.frontmatter.date) // TODO: 時系列ソートがこれで問題ないか要確認
  .map(( {url, frontmatter }) => ({
    title: frontmatter.title,
    url,
  }))
}