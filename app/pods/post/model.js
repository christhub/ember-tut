import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  message: DS.attr('string'),
  image: DS.attr('string'),
  createdAt: DS.attr('date')
});
