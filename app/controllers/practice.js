import Ember from 'ember';

export default Ember.Controller.extend({
	nextId: 0,

	isFirstCard: Ember.computed.equal('previousId', 0),
	isLastCard: Ember.computed.equal('nextId', 59),

	previousId: Ember.computed('nextId', function() {
		return this.get('nextId') - 2;
	}),

	actions: {
		changeCard(nameOfNewCard) {
			let cards = this.get('store').peekAll('flashcard');
			let card = cards.filterBy('name', nameOfNewCard).get('firstObject');
			this.set('model', card);
		}
	}
});
