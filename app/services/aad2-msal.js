import Service from '@ember/service';
import { debug } from '@ember/debug';
import Msal from 'msal';
import ENV from 'ember-aad2-msal/config/environment';

//Wrap's msal and exposes it as an ember service.  

export default Service.extend({
  userAgentApplication: null,
  authenticated: false,

  init() {
    this._super(...arguments);
    const clientId = ENV.authConfigurations.clientId;
    const resource = ENV.authConfigurations.resource;
    const redirectUri = ENV.authConfigurations.redirectUri;
    const logger = new Msal.Logger(function(logLevel, message, /* piiLoggingEnabled */) { debug(message); }, { level: Msal.LogLevel.Verbose });
    const userAgentApplication = new Msal.UserAgentApplication(
      clientId,
      resource,
      (errorDesc, token, error, /*tokenType*/ ) => {
        if (token) {
          this.set('authenticated', true);
          this.set('idToken', token);
          //debug(`token: ${token}`);
	} else {
          debug(error);
        }
      },
      {
        redirectUri,
        logger
      }
    );
    this.set('userAgentApplication', userAgentApplication);
  },

  login(/* graphScopes */) {
    this.userAgentApplication.loginRedirect(/* graphScopes */);
  },

  logout() {	  
    this.authenticated = false;
    this.idToken = null;
    this.userAgentApplication.logout();
  },

  getIdToken(){
    return this.getUserInfo().idToken;
  },

  getUserInfo() {
    return this.userAgentApplication.getUser();
  },

  isAuthenticated() {
    return this.authenticated;
  },

  async getAccessToken(graphAPIScopes) {
    return await this.userAgentApplication.acquireTokenSilent(graphAPIScopes).then((token) => {
      return token;
    }); 
  }
});
