export const environment = {
  production: true,
  apiUrl: 'https://xby2-website-api-prod-ncus.azurewebsites.net',
  googleAnalyticsTrackingId: 'UA-114675726-2',
  enableLinkedInTag: true,
  enableHubSpotTracking: false,
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
  baseCmsUrl: 'https://xby2-website-cms.azurewebsites.net/wp-json/xby2/v1/',
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
  },
  location: {
    name: 'Canada',
    address: '100 University Avenue',
    address2: 'Floor 6',
    city: 'Toronto',
    state: 'ON',
    zip: 'M5J 1V6',
    phone: '905.267.0223',
    latitude: 43.657411,
    longitude: -79.603429
  },
  locationSpecificInformation: {
    homeHeaderText: 'Transforming business<br>through technology.',
    aboutUsSubheaderText:
      'Helping companies achieve their most strategic goals through transformational technology.'
  }
};
