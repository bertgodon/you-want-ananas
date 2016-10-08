import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'trackId',
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      songs: payload.results
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
