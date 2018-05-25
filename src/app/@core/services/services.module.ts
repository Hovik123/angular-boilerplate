import { CookieService } from 'ngx-cookie-service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
SessionStorageService,
LocalStorageService,
LoaderService,
AfterAuth,
AuthService
} from './index';

const SERVICES = [
  SessionStorageService,
  LocalStorageService,
  LoaderService,
  AfterAuth,
  AuthService,
  CookieService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ServicesModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
