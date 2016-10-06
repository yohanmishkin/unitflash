import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  front: DS.attr('string'),
  back: DS.attr('string')
});
