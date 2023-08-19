export enum TargetSiteKey {
  ISUCON12Final = 'isucon12-final',
  MercariTestGen = 'mercari-testgen'
}

export const TargetSiteUrls: {key:TargetSiteKey, url:string}[] = [
  {
    key: TargetSiteKey.ISUCON12Final,
    url: 'https://trap.jp/post/1710/'
  },
  {
    key: TargetSiteKey.MercariTestGen,
    url: 'https://oribe1115.hatenablog.com/entry/2020/09/09/011304'
  }
]

// [TargetSiteKey.ISUCON12Final]: 'https://trap.jp/post/1710/',
  // [TargetSiteKey.MercariTestGen]: 'https://oribe1115.hatenablog.com/entry/2020/09/09/011304'