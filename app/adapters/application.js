import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: 'https://itunes.apple.com/search',

  buildURL: function(modelName, id, snapshot, requestType, query) {
       // customize the url based on the parameters
       // lets assume the id is the blog name
       return `${this.get('host')}?term=the+beatles&limit=25`;
   },

   ajaxOptions: function(url, type, options) {
           var hash = this._super(url, type, options);
           hash.dataType = "jsonp";
           return hash;
       }


});
