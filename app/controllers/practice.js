import Ember from 'ember';

export default Ember.Controller.extend({
	tutorialConfig: {
		mask: false,
		data: [{
			ele: '.step-1',
			message: 'Click anywhere on the card to flip the card over.'
		}, {
			ele: '.step-2',
			message: 'Click here to go to the next card.'
		}, {
			ele: '.step-3',
			message: 'Click here to return to the beginning at any time.'
		}]
	},

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
