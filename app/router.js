import EmberRouter from '@ember/routing/router';
import config from 'rsl-training2021-badaruddin-shaikh/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('questions');
  this.route('result', { path: '/:score' });
  this.route('not-found', { path: '/*path' });
});
