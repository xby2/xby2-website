export const environment = {
  production: true,
  apiUrl: 'https://xby2-website-api-uat-ncus.azurewebsites.net',
  googleAnalyticsTrackingId: 'UA-114675726-1',
  enableLinkedInTag: false,
  enableHubSpotTracking: false,
  canadaRedirectApiKey: 'adf5b1c72fe6d0cd714a54d40c1258c72887e8ab18874d9071cdcfe7',
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
    name: 'USA',
    address: '35055 W Twelve Mile Rd',
    address2: 'Suite 220',
    city: 'Farmington Hills',
    state: 'MI',
    zip: '48331',
    phone: '248.538.9292',
    latitude: 42.497343,
    longitude: -83.396382
  },
  locationSpecificInformation: {
    homeHeaderText:
      'Guiding Digital Transformation for<br> Healthcare & Insurance companies.',
    aboutUsSubheaderText:
      'Helping healthcare and insurance organizations achieve their most<br> strategic goals through transformational technology.'
  }
};
