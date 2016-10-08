import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
   search(query) {
     if (query !== '') {
       var result = this.get('store').query('song', query);
             this.set('model', result);
     } else {
     }
   }
 }
});
