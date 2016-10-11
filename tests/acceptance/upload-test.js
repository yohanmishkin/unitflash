import { test } from 'qunit';
import moduleForAcceptance from 'unitflash/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | upload');

test('visiting /upload', function(assert) {
  visit('/upload');

  click('.test-upload-files');
  
  andThen(function() {
    assert.equal(currentURL(), '/upload');
  });
});
