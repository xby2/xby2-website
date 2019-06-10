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
  locations: [
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
    },
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
    }
  ],
  locationSpecificInformation: {
    homeHeaderText:
      'Guiding Digital Transformation for<br> Healthcare & Insurance companies.',
    aboutUsSubheaderText:
      'Helping healthcare and insurance organizations achieve their most<br> strategic goals through transformational technology.'
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
    },
    {
      title: 'Solution Accelerators',
      text:
        'Customizable solutions providing speed to market and significant cost benefits.',
      points: [
        // tslint:disable-next-line: max-line-length
        '<a href="assets/media/data_quality_frameworks.pdf" target="_blank" onClick="ga(\'send\', \'event\', { eventCategory: \'Downloads\', eventAction: \'Downloaded PDF\', eventLabel: \'DataQualityFrameworks\', eventValue: 1 });">Data Quality Frameworks</a>',
        'Clinical/EMR Integration Platform',
        'Healthcare Core Integration Models',
        'Healthcare Analytics Use Models',
        // tslint:disable-next-line: max-line-length
        '<a href="assets/media/apis_iq_adaptors_to_cad.pdf" target="_blank" onClick="ga(\'send\', \'event\', { eventCategory: \'Downloads\', eventAction: \'Downloaded PDF\', eventLabel: \'APiSIQAdaptorsToCAD\', eventValue: 1 });">APiS-IQ Adaptors to CAD</a>'
      ],
      buttonText: 'Contact Us',
      buttonUrl: '/contact-us',
      imageUrl: '/assets/accelerator_icon.jpg'
    }
  ]
};
