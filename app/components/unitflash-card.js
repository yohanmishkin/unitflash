import Ember from 'ember';

export default Ember.Component.extend({

	isFront: Ember.computed('card.name', function() {
		return /s1.jpg/.test(this.get('card.name'));
	}),

	side: Ember.computed('isFront', function() {
		if (this.get('isFront')) {
			return '1';
		}
		else {
			return '2';
		}
	}),

	nextSide: Ember.computed('side', function() {
		return 2 - (1 % this.get('side'));
	}),

	actions: {
		flipCard() {
			let currentSide = `s${this.get('side')}.jpg`;
			let newSide = `s${this.get('nextSide')}.jpg`;
			
			var name = this.get('card.name');
			var otherSide = name.replace(currentSide, newSide);

			this.get('flipCard')(otherSide);
		}
	}
});
