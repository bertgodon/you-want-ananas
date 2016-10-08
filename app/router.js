import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('song', { path: '/' });
  this.route('info', { path: '/songs/:trackId' });
});

export default Router;
