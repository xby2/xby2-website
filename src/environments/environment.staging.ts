export const environment = {
  production: true,
  apiUrl: 'https://xby2-website-api-staging.azurewebsites.net',
  googleAnalyticsTrackingId: 'UA-114675726-1',
  assetPrefixes: {
      clientStories: './assets/client-story/',
      perks: './assets/perks/',
      companyValues: './assets/values/'
  },
  /*
    For local development using the mock API data, set usingLocalData to true.
    This will connect to local JSON files instead of the CMS.
  */
  usingLocalData: true,
  baseCmsUrl: '../assets/data/',
  endpoints: {
      companyValues: 'company-values.json',
      frequentlyAskedQuestions: 'frequently-asked-questions.json',
      perks: 'perks.json',
      recruitingValues: 'recruiting-values.json',
      locations: 'locations.json',
      clientStories: 'client-stories.json',
      industries: 'industries.json',
      links: 'links.json',
      mindShares: 'mind-shares.json',
      services: 'services.json',
      media: 'media.json'
  }
};
