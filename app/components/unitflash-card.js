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

	imageUrl: Ember.computed('cardNumber', 'side', function() {
		return `/assets/images/${this.get('cardNumber')}${this.get('side')}.jpg`;
	}),

	actions: {
		flipCard() {
			this.toggleProperty('front');
		}
	}
});
