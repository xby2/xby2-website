export const environment = {
  production: true,
  googleAnalyticsTrackingId: 'UA-114675726-1',
  emailSubmissionApi: {
    url: 'https://api.mailjet.com/v3.1/send',
    username: '41e75d55b595aac2579b85bf16e5cc36',
    password: 'a5aab43cbf94ca42cf9c2bfadd813bc7'
  },
  assetPrefixes: {
    clientStories: '',
    perks: '',
    companyValues: '',
    authors: ''
  },
  /*
    For local development using the mock API data, set usingLocalData to true.
    This will connect to local JSON files instead of the CMS.
  */
  usingLocalData: false,
  baseCmsUrl:
    'https://xby2-website-cms-linux-prod.azurewebsites.net/wp-json/xby2/v1/',
  endpoints: {
    companyValues: 'company-values',
    frequentlyAskedQuestions: 'frequently-asked-questions',
    perks: 'perks',
    recruitingValues: 'recruiting-values',
    locations: 'locations',
    clientStories: 'client-stories',
    industries: 'industries',
    links: 'links',
    mindShares: 'mind-shares',
    services: 'services'
  }
};
