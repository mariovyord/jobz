import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from './../environments/environment';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { interceptorsProvider } from './core/interceptors/interceptors.provider';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    interceptorsProvider,
    importProvidersFrom(
      AuthModule.forRoot({
        domain: environment.domain,
        clientId: environment.clientId,
        cacheLocation: 'localstorage',
        authorizationParams: {
          redirect_uri: window.location.origin,
          audience: 'http://localhost:3000',
        },
      })
    ),
    provideAnimations(),
  ],
};
