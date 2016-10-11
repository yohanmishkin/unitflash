import Ember from 'ember';

/* jshint ignore: true */
export default Ember.Route.extend({
	store: Ember.inject.service(),
	actions: {
		uploadManyFiles(files) {
	    let _this = this;
			
			for (var i = 0; i < files.length; i++) {
				let file = files[i];
		    let reader = new FileReader();

		    reader.onload = function() {
					let card = _this.get('store').createRecord('flashcard', {
						name: file.name,
						photoData: reader.result
					});
					card.save();
		    };
		    
		    reader.readAsDataURL(file);
			}
			
			let controller = this.controllerFor('upload');
			controller.set('flashcards', files);
		}
	}
});
/* jshint end: true */