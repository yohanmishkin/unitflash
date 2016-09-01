import { test } from 'qunit';
import moduleForAcceptance from 'unitflash/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | practice');

test('Can navigate to /practice', function(assert) {
  visit('/');

  click('.test-nav-practice');

  andThen(function() {
    assert.equal(currentURL(), '/practice');
  });
});

