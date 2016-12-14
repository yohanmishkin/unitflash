import Ember from 'ember';

export default Ember.Component.extend({
	isFlipped: false,
	actions: {
		flipCard() {
			this.toggleProperty('isFlipped');
		}
	}
});
