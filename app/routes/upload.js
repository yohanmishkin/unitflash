import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		uploadManyFiles(files) {
			// cycle through files
				// create card
				debugger;
			for (file in files) {
				console.log(file.name);
			}
			let controller = this.controllerFor('upload');
			controller.set('flashcards', files);
		}
	}
});
