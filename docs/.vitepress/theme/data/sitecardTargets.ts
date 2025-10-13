export enum TargetSiteKey {
  ChromebookVSCodeServer = 'chromebook-vscode-server',
  ISUCON12Final = 'isucon12-final',
  ISUCON12Qualify = 'isucon12-qualify',
  ISUCONWorkshop2022 = 'isucon-workshop-2022',
  ISUCON11Admin = 'isucon11-admin',
  CPCTF2021Scoreserver = 'cpctf2021-scoreserver',
  ISUCON10Qualify = 'isucon10-qualify',

  TRAPLT2022 = 'traP-lt-2022',
  ISUCONSummerFes2023 = 'isucon-summer-fes-2023',
  ISUCON13 = 'isucon13',

  _24SOTSUSUPERLT202408 = '24sotsu-super-lt-202408',

  TRAPAVILION = 'traPavilion',
}

export const TargetSiteUrls: { key: TargetSiteKey; url: string }[] = [
  {
    key: TargetSiteKey.ISUCON13,
    url: 'https://trap.jp/post/2049/'
  },
  {
    key: TargetSiteKey.ChromebookVSCodeServer,
    url: 'https://trap.jp/post/1717/'
  },
  {
    key: TargetSiteKey.ISUCON12Final,
    url: 'https://trap.jp/post/1710/'
  },
  {
    key: TargetSiteKey.ISUCON12Qualify,
    url: 'https://trap.jp/post/1710/'
  },
  {
    key: TargetSiteKey.ISUCONWorkshop2022,
    url: 'https://trap.jp/post/1614/'
  },
  {
    key: TargetSiteKey.ISUCON11Admin,
    url: 'https://trap.jp/post/1712/'
  },
  {
    key: TargetSiteKey.CPCTF2021Scoreserver,
    url: 'https://trap.jp/post/1308/'
  },
  {
    key: TargetSiteKey.ISUCON10Qualify,
    url: 'https://trap.jp/post/1119/'
  },

  {
    key: TargetSiteKey.TRAPLT2022,
    url: 'https://trap.jp/post/1435/'
  },
  {
    key: TargetSiteKey.ISUCONSummerFes2023,
    url: 'https://isucon.connpass.com/event/288820/'
  },
  {
    key: TargetSiteKey._24SOTSUSUPERLT202408,
    url: 'https://connpass.com/event/325217/'
  },
  {
    key: TargetSiteKey.TRAPAVILION,
    url: 'https://trapavilion.trap.show/'
  }
]
