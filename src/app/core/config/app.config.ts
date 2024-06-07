import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from '../router/app.routes';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
    ),
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),
    MessageService
  ]
};
