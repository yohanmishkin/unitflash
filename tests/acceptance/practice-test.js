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

skip('Can go to next card', function() {

});