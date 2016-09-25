import Ember from 'ember';

export default Ember.Controller.extend({
	nextId: Ember.computed('model', function() {
		return Number(this.get('model')) + 1;
	})
});
