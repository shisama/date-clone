const test = require("ava");

test("deep copy", t => {
  const original = new Date();
  const copy = original.clone();

  t.not(copy, original);
  t.is(copy.getTime(), original.getTime());
});

test("deep copy rewrite original value", t => {
  const original = new Date();
  const copy = original.clone(true);
  original.setMilliseconds(original.getMilliseconds() - 1);

  t.not(copy, original);
  t.is(copy.getTime() - 1, original.getTime());
});

test("shallow copy",  t => {
  const original = new Date();
  const copy = original.clone(false);
  original.setMilliseconds(original.getMilliseconds() - 1);

  t.is(copy, original);
  t.is(copy.getTime(), original.getTime());
});