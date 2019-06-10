export const environment = {
  production: true,
  apiUrl: 'https://xby2-website-api-prod-ncus.azurewebsites.net',
  googleAnalyticsTrackingId: 'UA-114675726-2',
  enableLinkedInTag: true,
  enableHubSpotTracking: false,
  canadaRedirectApiKey: '',
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
  locations: [
    {
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
    {
      name: 'USA',
      address: '35055 W Twelve Mile Rd',
      address2: 'Suite 220',
      city: 'Farmington Hills',
      state: 'MI',
      zip: '48331',
      phone: '248.538.9292',
      latitude: 42.497343,
      longitude: -83.396382
    }
  ],
  locationSpecificInformation: {
    homeHeaderText: 'Transforming business<br>through technology.',
    aboutUsSubheaderText:
      'Helping companies achieve their most strategic goals through transformational technology.'
  },
  services: [
    {
      title: 'Strategy & Roadmap',
      text:
        'Aligning people, processes, information\nand technology to drive business growth.\n',
      points: ['IT Strategy', 'Core Systems', 'Data and Information', 'Cloud'],
      buttonText: 'View Client Story',
      buttonUrl: '/client-stories/core-system-integration',
      imageUrl:
        'https://xby2-website-cms.azurewebsites.net/wp-content/uploads/2019/03/enterprise-architecture.svg'
    },
    {
      title: 'Architecture',
      text:
        'Utilizing modern architectural approaches for greater technological agility.',
      points: [
        'Enterprise Architecture',
        'App/Solution Architecture',
        'Data Architecture',
        'Integration Architecture'
      ],
      buttonText: 'View Client Story',
      buttonUrl: '/client-stories/core-system-integration',
      imageUrl:
        'https://xby2-website-cms.azurewebsites.net/wp-content/uploads/2019/03/app-solution-architecture.svg'
    },
    {
      title: 'Mobilization & Execution',
      text:
        'Pragmatic leadership to design and deliver strategic business capabilities.',
      points: [
        'Program Leadership',
        'Architecture Leadership',
        'Change Management',
        'Agile Solution Development',
        'Systems Integration'
      ],
      buttonText: 'View Client Story',
      buttonUrl: '/client-stories/core-system-integration',
      imageUrl:
        'https://xby2-website-cms.azurewebsites.net/wp-content/uploads/2019/03/data-architecture.svg'
    }
  ]
};
