export function initialize(application) {
  application.inject('route', 'msal', 'service:aad2-msal');
  application.inject('component', 'msal', 'service:aad2-msal');
  application.inject('controller', 'msal', 'service:aad2-msal');
}

export default {
  initialize
};
