import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
   search(query) {
     if (query !== '') {
      var controller = this;
      this.set("currentlyLoading" , true);
      this.get('store').query('song', query).then(function(data) {
         controller.set("currentlyLoading" , false);
         controller.set('model', data);
       });


     }
   }


 }
});
