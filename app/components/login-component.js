import Component from '@ember/component';
//import { debug } from '@ember/debug';

//Component provides login and logout functionality via the msal service.

export default Component.extend({
  willRender() {
    const auth = this.get('msal').isAuthenticated(); 
    this.set('authenticated', auth);
  },

  actions: {
    login(){
     this.get('msal').login();
    },

    logout() {
        this.get('msal').logout();
    }
  }
});
