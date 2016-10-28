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

	actions: {
		changeCard(nameOfNewCard) {
			let cards = this.get('store').peekAll('flashcard');
			let card = cards.filterBy('name', nameOfNewCard).get('firstObject');
			this.set('model', card);
		}
	}
});
