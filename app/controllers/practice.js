import Ember from 'ember';

export default Ember.Controller.extend({

	nextId: 0,

	isFirstCard: Ember.computed.equal('previousId', 0),
	isLastCard: Ember.computed.equal('nextId', 59),

	previousId: Ember.computed('nextId', function() {
		return this.get('nextId') - 2;
	})
});
