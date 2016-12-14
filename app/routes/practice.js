import Ember from 'ember';

export default Ember.Route.extend({
	nextId: 0,
	setupController(controller, model) {
		controller.set('nextId', this.get('nextId'));
		this._super(controller, model);
	},

	model(params) {
		this.set('nextId', Number(params.cardIndex) + 1);
		return this.get('store').findAll('flashcard').then(function(results) {
			
			let front = results.objectAt((Number(params.cardIndex) * 2) - 1);
			let isFront = /s1.jpg/.test(front.get('name'));
			let side = isFront ? 1 : 2;
			let nextSide = 2 - (1 % side);
			let currentSide = `s${side}.jpg`;
			let newSide = `s${nextSide}.jpg`;
			let name = front.get('name');
			let otherSide = name.replace(currentSide, newSide);			
			let back = results.filterBy('name', otherSide).get('firstObject');

			return {
				front: front,
				back: back
			};
		});
	}
});