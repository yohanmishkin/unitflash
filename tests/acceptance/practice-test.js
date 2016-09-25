import { test, skip } from 'qunit';
import moduleForAcceptance from 'unitflash/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | practice');

test('Can navigate to /practice', function(assert) {
  visit('/');

  click('.test-nav-practice');

  andThen(function() {
    assert.equal(currentURL(), '/practice/1');
  });
});

test('Can navigate back to home page from /practice', function(assert) {
	visit('/practice/1');

	click('.test-nav-home');

	andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('Clicking flips card', function(assert) {
	visit('/practice/1');

	andThen(function() {
		assert.equal(find('.test-unitflash-card-image').attr('src'), '/assets/images/1f.jpg', 'Showing the front image');
	});

	click('.test-unitflash-card');

	andThen(function() {
		assert.equal(find('.test-unitflash-card-image').attr('src'), '/assets/images/1b.jpg', 'Showing the back image');
	});

	click('.test-unitflash-card');

	andThen(function() {
		assert.equal(find('.test-unitflash-card-image').attr('src'), '/assets/images/1f.jpg', 'Showing the front image again');
	});	
});

test('Can go to next card', function(assert) {
	visit('/practice/1');

	click('.test-next-card');

	andThen(function() {
		assert.equal(currentURL(), '/practice/2', 'Went to next card');
	});

	click('.test-unitflash-card');
	click('.test-next-card');

	andThen(function() {
		assert.equal(find('.test-unitflash-card-image').attr('src'), '/assets/images/3f.jpg', 'Showing the front image');
	});
});

test('Can go to random card', function(assert) {
	visit('/practice/1');

	click('.test-random-card');

	andThen(function() {
		assert.notEqual(currentURL(), '/practice/1', 'Moved to a different card');
	});
});

test('Can go to previous card', function(assert) {
	visit('/practice/2');

	click('.test-previous-card');

	andThen(function() {
		assert.equal(currentURL(), '/practice/1', 'Moved back a card');
		assert.equal(find('.test-previous-card').length, 0, 'Previous link is gone now');
	});
});

skip('Add keyboard shortcuts', function() {

});