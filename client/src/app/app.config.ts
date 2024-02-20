import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from './../environments/environment';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { interceptorsProvider } from './core/interceptors/interceptors.provider';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideQuillConfig } from 'ngx-quill';
import { QuillConfiguration } from './config/quill.config';

registerLocaleData(en);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    interceptorsProvider,
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'bg',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: environment.domain,
        clientId: environment.clientId,
        cacheLocation: 'localstorage',
        authorizationParams: {
          redirect_uri: window.location.origin,
          audience: 'http://localhost:3000',
        },
        useRefreshTokens: true,
      })
    ),
    provideAnimations(),
    provideQuillConfig({
      modules: {
        toolbar: QuillConfiguration.toolbar,
      },
    }),
  ],
};
