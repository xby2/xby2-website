// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4300',
  googleAnalyticsTrackingId: '',
  assetPrefixes: {
      clientStories : './assets/client-story/',
      perks : './assets/perks/',
      companyValues: './assets/values/'
  },
  /*
    For local development using the mock API data, do the following:
    - set usingLocalData to true.
    - set the baseCmsUrl to ../assets/data/
    - set all endpoints to point to their respective .json files.
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
    services: 'services.json'
  }
};
