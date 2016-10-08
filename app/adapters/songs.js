import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://itunes.apple.com/search'
});
