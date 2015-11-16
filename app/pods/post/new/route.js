import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('post');
  },
  resetController(controller, isExisting) {
    if(isExisting && this.currentModel.get('isNew')) {
      controller.get('model').destroyRecord();
    }
  },
  actions: {
    save() {
      let rand = Math.ceil(Math.random() * 9);

      this.currentModel.setProperties({
        image: `kitten${rand}.jpg`,
        createdAt: new Date()
      });

      this.currentModel.save().then(() => {
        this.transitionTo('post.index');
      });
    }
  }
});
