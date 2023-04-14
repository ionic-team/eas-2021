// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ProviderOptions } from '@ionic-enterprise/auth';

export const environment = {
  production: true,
  baseUrl: 'https://ionic-app-summit.netlify.app'
};

export const nativeIonicAuthOptions: ProviderOptions = {
  audience: 'https://audience.my-app.com',

  // client or application id for provider
  clientId: '5a5ef942-0e44-46a8-bbac-6a8ba7654eb0',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://ioniccs.b2clogin.com/ioniccs.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_SignUp',
  // the URI to redirect to after log in
  redirectUri: 'ionic.cs.appsummit://login',
  // requested scopes from provider
  scope: 'openid offline_access email profile https://ioniccs.onmicrosoft.com/5a5ef942-0e44-46a8-bbac-6a8ba7654eb0/user_impersonation',
  // the URL to redirect to after log out
  logoutUrl: 'ionic.cs.appsummit://login',
};

export const webIonicAuthOptions: ProviderOptions = {
  audience: 'https://audience.my-app.com',

  // client or application id for provider
  clientId: '5a5ef942-0e44-46a8-bbac-6a8ba7654eb0',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://ioniccs.b2clogin.com/ioniccs.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_SignUp',
  // the URI to redirect to after log in
  redirectUri: 'http://localhost:8100/auth-transition',
  // requested scopes from provider
  scope: 'openid offline_access email profile https://ioniccs.onmicrosoft.com/5a5ef942-0e44-46a8-bbac-6a8ba7654eb0/user_impersonation',
  // the URL to redirect to after log out
  logoutUrl: 'http://localhost:8100/auth-transition#logout'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
