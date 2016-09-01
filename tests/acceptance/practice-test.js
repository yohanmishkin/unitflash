import { test, skip } from 'qunit';
import moduleForAcceptance from 'unitflash/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | practice');

test('Can navigate to /practice', function(assert) {
  visit('/');

  click('.test-nav-practice');

  andThen(function() {
    assert.equal(currentURL(), '/practice');
  });
});

test('Can navigate back to home page from /practice', function(assert) {
	visit('/practice');

	click('.test-nav-home');

	andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

skip('/practice shows random card', function(assert) {
	// generate first random card

	visit('/practice');

	andThen(function() {
		assert.equal(find('.test-card-practice').text(), 'PRACTICE');
	});
});