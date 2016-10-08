import DS from 'ember-data';

export default DS.Model.extend({
  artistName: DS.attr('string'),
  trackName: DS.attr('string'),
});
