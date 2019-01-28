export const environment = {
  production: true,
  apiUrl: 'https://xby2-website-api.azurewebsites.net',
  googleAnalyticsTrackingId: 'UA-114675726-2',
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
    services: 'services',
    media: 'media.json'
  }
};
