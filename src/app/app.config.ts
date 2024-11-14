import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { metaReducers, reducers } from './store';
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { ProductEffects } from './store/effects/product.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
    provideStore(reducers, { metaReducers }),
    provideEffects(ProductEffects),
  provideHttpClient(withFetch()),
  provideAnimationsAsync(),
  provideAnimations(),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideHttpClient(), 
  ]
};


