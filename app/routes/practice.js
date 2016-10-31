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
			return results.objectAt((Number(params.cardIndex) * 2) - 1);
		});
	}
});