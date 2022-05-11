# App Summit

This is a sample application demonstrating the combination of Auth Connect and Identity Vault in a real world application that is designed to run on iOS, Android and web.

## TLDR

If you like the way authentication is handled in this app and would like to copy paste your way to freedom:
- [authentication.service.ts](src/app/services/authentication.service.ts) - Setup of Ionic Auth Connect with an authentication provider
- [vault.service.ts](src/app/services/vault.service.ts) - Setup of Ionic Identity Vault to support secure encryption of the auth token using biometrics
- [auth-guard.service.ts](src/app/services/auth-guard.service.ts) - The Angular service to check authentication when routing to a page
- [app-routing.module.ts](src/app/app-routing.module.ts) - The configuration of which routes are protected by the auth guard
- [app.component.ts](src/app/app.component.ts) - Authentication is checked on startup and resume
- [app.module.ts](src/app/app.module.ts) - Demonstrates initialization of the Vault before anything else can use the token
- [environment.ts](src/environments/environment.ts) - Configuration of the authentication provider

Interested to know more? read on....


## Android Example
This recorded Android video shows:
- Login provided by Azure B2C (could be almost any OIDC provider)
- Login page is customized in Azure B2C portal
- Login page uses the devices default password manager (in this case it is 1password)
- Login page returns a token which is secured by Identity Vault (we're securing it using Biometrics)
- When exiting the app and returning the biometric prompt for fingerprint is shown and checked (hidden during recording video)
- When logout is chosen we are logged out of the OIDC providers page

https://user-images.githubusercontent.com/84595830/167924999-17fd018a-2319-4512-98bd-cd42127421d0.mp4

Important Points:
- The password manager and login page is secured by the device
- The OIDC login page captures cookies so a session is active until logged out (ie subsequent login attempts automatically pass back a token)
- In our code we are securing the token is a vault that requires biometrics to access
- We fall back to securing the token on the keychain if biometrics are not available or strong enough (eg class 2 Face Id)
- We chose to lock the vault if the user exits out of the app and requires unlocking to resume the app
- If a user fails the biometric check they need to go through login again

## iOS Example
This recorded iOS video shows:
- A customized Login page provided by Azure B2C
- Login page uses the devices default password manager (this is Apple's)
- After login we return to the home page
- Resuming the application we check Biometrics and fail which returns us to login
- We sign in again, and then sign out

https://user-images.githubusercontent.com/84595830/167928101-4cc6dc3f-8a88-4d74-8087-dd0fc4ea2070.mp4

Important Points:
- The OIDC login page is served by the device (in its secure context) so our application is not responsible for security of its web view
- Ionic's Auth Connect is responsible for initiating the login and returning the token
- Our application provides the minimal set of configuration needed
- Ionic's Identity Vault is responsible for securing the access token (and refreshing it)
- Our application is responsible for providing a configuration of the OIDC provider (eg Azure B2C, Auth0)
- Our application is responsible for calling to check authentication at key points (like app resume and page change)
- We can choose which parts of our application require additional authentication

## Web Example

This recorded web video shows:
- The same Login Page provided by Azure B2C
- Code is the same as for iOS/Android with the exception of the redirect_uri

https://user-images.githubusercontent.com/84595830/167944971-120e7898-1252-4612-9df9-54d59e9b462f.mp4

Important Points:
- No difference in code for Web vs Native

## Design

Knowing upfront how you want your authentication to be used in an Application is critical. In this application the requirements are:

- To access the application you must sign up or sign in first
- After sign in a user can choose to sign out on the profile page returning them to the sign in page
- If the user exits the application but returns they must pass the biometric prompt (or be returned to sign in again)
- If the users device is not capable of biometrics it will fall back to securely storing sensitive data on the keychain
- On the web we trust that the user will be using their own device and will store token information in the browsers local storage

## Authentication Checks

When the application is started or resumed on a mobile device we need to check authentication. You can see these checks being done in `app.component.ts` in the `checkAuth` method.

## Auth Guards

An auth guard protects access to an application through a check that happens when visiting a route. In `auth-guard.service.ts` a check is made to whether a users is signed in using the service `authentication.service.ts`. You can see this applied to routes in `app-routing.module.ts`.

## Authentication Service

The service `authentication.service.ts` uses Ionic Auth Connect by extending `IonicAuth` and customizing by:
- Specifying what we want to do on a successful login and logout
- Specifying the configuration of our OIDC provider (using the configuration from `environment.ts`)
- Specifying a configuration of Auth Connect that uses Identity Vault to store the sensitive auth token
- Providing a public `authenticated` boolean that can be used in our application

## Vault Service

The service `vault.service.ts` uses Identity Vault and customizes it by:
- Specifying a default configuration of using Biometrics to store information
- Falling back to Secure Storage of information if the device is doesnt have strong biometrics enabled or supported (eg class 2 Android devices)
- Uses a browser vault when run on web, this stores data in Local Storage (which you need to be ok with, otherwise an in-memory option is better)
