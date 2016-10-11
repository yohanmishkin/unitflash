import Ember from 'ember';

export default Ember.Component.extend({
	front: true,

	side: Ember.computed('front', function() {
		if (this.get('front')) {
			return 'f';
		}
		else {
			return 'b';
		}
	}),

	actions: {
		flipCard() {
			this.toggleProperty('front');
		}
	}
});
