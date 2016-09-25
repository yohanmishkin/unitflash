import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return params.card_id;
		// var randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		// return randomNumber;
	}
});
