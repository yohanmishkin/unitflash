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
		assert.equal(find('.test-card-front').attr('alt'), '1s s2.jpg', 'Showing the front image');
	});

	click('.test-unitflash-card');

	andThen(function() {
		assert.equal(find('.test-card-back').attr('alt'), '1s s1.jpg', 'Showing the back image');
	});

	click('.test-unitflash-card');

	andThen(function() {
		assert.equal(find('.test-card-front').attr('alt'), '1s s2.jpg', 'Showing the front image again');
	});

	click('.test-unitflash-card');

	andThen(function() {
		assert.equal(find('.test-card-back').attr('alt'), '1s s1.jpg', 'Showing the back image');
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
		assert.equal(find('.test-card-front').attr('alt'), 'ab ref s2.jpg', 'Showing the front image');
	});
});

test('Can visit complete page page', function(assert) {
	visit('/practice/58');

	andThen(function() {
		assert.equal(find('.test-complete-practice').length, 1, 'Complete link is showing');
	});

	click('.test-complete-practice');

	andThen(function() {
		assert.equal(find('.test-completed-banner').length, 1, 'Completed page is showing');
		assert.equal(currentURL(), '/complete', 'Made it to the completed page');
	});

	click('.test-home-link');
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