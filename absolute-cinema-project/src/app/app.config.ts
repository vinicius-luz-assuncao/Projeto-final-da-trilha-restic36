import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAuth0({

      domain: 'dev-e4a4hfzm3ojdyb37.us.auth0.com',

      clientId: 'A6oPj7VhrjZo3ct5qcugUd4eckWn4aDR',

      authorizationParams: {

        audience: 'https://dev-e4a4hfzm3ojdyb37.us.auth0.com/api/v2/',

        scope: 'openid profile email offline_access',

        redirect_uri: window.location.origin,

      },
      useRefreshTokens: true,

      cacheLocation: 'localstorage',
    }),]
}
