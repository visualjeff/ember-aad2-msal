import Route from '@ember/routing/route';
import ENV from 'ember-aad2-msal/config/environment';

//Here we pull auth config values for auth and render them in the index template.

export default Route.extend({
  model() {
    const clientId = ENV.authConfigurations.clientId;
    const resource = ENV.authConfigurations.resource;
    const redirectUri = ENV.authConfigurations.redirectUri;
    return {
      clientId,
      resource,
      redirectUri
    }
  }
});
