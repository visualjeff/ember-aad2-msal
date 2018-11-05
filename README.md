# ember-aad2-msal

A working ember application that makes use of msal for authentication against a aad v2 endpoint.  The flow is implicit.
Msal will manage the token validation, token caching and token renewals for the application.  Ember quickstart was used to generate the initial project.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember](https://emberjs.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-aad-msal`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Environment used:

```
ember-cli: 3.5.0
node: 8.9.1
os: linux x64
```

## My specific implementation details (after generating a new ember project):

Installed support for common.js transformations (needed for msal):
```
  ember install ember-cli-cjs-transform
```

Installed msal:
```
  npm install msal --save
```

Updated ember-cli-build.js to import the msal dependency.

Create a service that wrapped the msal api:
```
  ember generate service aad2-msal
```

Create an initializer for loading the aad2-msal service into routes, controllers and components:
```
  ember generate initializer aad2-msal
```

Updated config/environment.js with authentication configurations (clientId, resource and redirectUri):
```
  ENV.authConfigurations = {
      clientId: '<<REDACTED>>',
      resource: 'https://login.microsoftonline.com/<<REDACTED>>.onmicrosoft.com',
      redirectUri: 'http://localhost:4200/'
  };
```

Create a login-component and userInfo-component.  One for login/logout and other other for displaying user info.

Created a controller and template called index.js for rendering the login component.



Here is a list of all the files that were added or modified:
```
ember-cli-build.js 
config/environment.js 
app/templates/application.hbs
app/routes/index.js
app/templates/index.hbs 
app/services/aad2-msal.js 
app/components/login-component.js 
app/components/userinfo-component.js 
app/templates/components/login-component.hbs 
app/templates/components/userinfo-component.hbs 
```

Enjoy!
