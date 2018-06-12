import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (environment.googleAnalyticsTrackingId !== '') {
  document.write(
    '<script>' +
      '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||' +
      'function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();' +
      'a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;' +
      'm.parentNode.insertBefore(a,m)})(window,document,\'script\',' +
      '\'https://www.google-analytics.com/analytics.js\',\'ga\');' +
      'ga(\'create\', \'' +
      environment.googleAnalyticsTrackingId +
      '\', \'auto\');</script>'
  );
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch();
