// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: '',
  googleAnalyticsTrackingId: 'UA-114675726-1',
  enableLinkedInTag: false,
  enableHubSpotTracking: false,
  canadaRedirectApiKey: '',
  assetPrefixes: {
    clientStories: '',
    perks: '',
    companyValues: '',
    authors: ''
  },
  /*
    For local development using the mock API data, do the following:
    - set usingLocalData to true.
    - set the baseCmsUrl to ../assets/data/
    - set all endpoints to point to their respective .json files.
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
