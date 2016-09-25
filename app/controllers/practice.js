import Ember from 'ember';

export default Ember.Controller.extend({
	isFirstCard: Ember.computed('model', function() {
		return this.get('model') === '1';
	}),

	nextId: Ember.computed('model', function() {
		return Number(this.get('model')) + 1;
	}),

	previousId: Ember.computed('model', function() {
		return Number(this.get('model')) - 1;
	}),

	randomId: Ember.computed('model', function() {
		let currentId = Number(this.get('model'));
		let randomNumber = 0;
		while (randomNumber === 0 || randomNumber === currentId) {
			randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		}
		return randomNumber;
	})
});
