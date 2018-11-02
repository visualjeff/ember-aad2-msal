import Component from '@ember/component';
import { debug } from '@ember/debug';

//Displays user info from idToken.  Also has an action method for getting an access_token.

export default Component.extend({
  willRender() {
    const msal = this.get('msal');
    const userInfo = msal.getUserInfo();
    this.set('displayableId', userInfo.displayableId);    
    this.set('name', userInfo.name);    
    this.set('identityProvider', userInfo.identityProvider);    
    this.set('userIdentifier', userInfo.userIdentifier);    
    this.set('idToken', userInfo.idToken);
  },

  actions: {
    getAccessToken() {
      const msal = this.get('msal');
      msal.getAccessToken(['https://graph.microsoft.com/user.read']).then(access_token => {
        //this.set('access_token', access_token);
        debug(`access_token: ${access_token}`);
        alert(access_token);
      });
    }
  }
});
