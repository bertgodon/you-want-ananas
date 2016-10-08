import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://itunes.apple.com/search',
  buildURL: function(query) {
       // customize the url based on the parameters
       // lets assume the id is the blog name
       return `${this.get('host')}?term=${query}&limit=25`;
   },

   ajaxOptions: function(url, type, options) {
           var hash = this._super(url, type, options);
           hash.dataType = "jsonp";
           return hash;
    },
    query: function(store, type, query) {

      return this.ajax(this.buildURL(query), 'GET');
  },

});
