import Ember from 'ember';

export default Ember.Controller.extend({
  characterCount: Ember.computed('model.message', function(){
    let message = this.get('model').get('message');

    if(message) {
      if(message.length < 6 && message.length > 120) {
        this.set('disableButton', true);
        return message.length;
      } else {
        return message.length;
      }
    } else return 0;
  }),
  actions: {
    save() {
      if(this.get('characterCount') >= 6  && this.get('characterCount') <= 120) {
        return true;
      } else {
        this.set('error', 'The message must be between 6 and 120 characters..');
        return false;
      }
    },
    cancel() {
      this.transitionToRoute('post.index');
    }
  }
});
