import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    sort: 'sort'
  },
  sort: 'dateAsc',

  sortProperties: Ember.computed('sort', function(){
    var options = {
      'dateAsc': 'createdAt:asc',
      'dateDesc': 'createdAt:desc',
      'title': 'title:asc'
    };
    return options[this.get('sort')].split(',');
  }),
  sortedPosts: Ember.computed.sort('model', 'sortProperties')
});
