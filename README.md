# Enterprise Summit

This is a sample application demonstrating the combination of Auth Connect and Identity Vault in a real world application that is designed to run on iOS, Android and web.

## TLDR

If you like the "feel" of way Authentication is handled in this app and would like to copy and paste code here is the cheat sheet:
- `authentication.service.ts`
- TBA

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
