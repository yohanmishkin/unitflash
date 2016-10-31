import { test } from 'qunit';
import moduleForAcceptance from 'unitflash/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});


test('Home page has navigation', function(assert) {
	visit('/');

	andThen(function() {
		assert.equal(find('.test-header-practice').text(), 'BEGIN');
	});
});