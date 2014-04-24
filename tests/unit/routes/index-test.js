import {
  test,
  moduleFor
} from 'ember-qunit';
import IndexRoute from 'hotnewness/routes/index';

moduleFor('route:index', 'Unit - IndexRoute');

test("it exists", function() {
  ok(this.subject() instanceof IndexRoute);
});
