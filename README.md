# create-assign
A combination of Object.create() and Object.assign().

# Install
```
npm install create-assign
```

# Usage & Api
```javascript

var create_assign = require("create-assign");

//create_assign(proto, properties /*, properties2, ...*/)

var a = {
    f1: function () { return 1; },
    f2: function () { return 2; },
};
var b = {
    f3: function () { return 3; },
    f4: function () { return 4; },
};
var c = create_assign(a, b, {
    f2: function () { return 22; },
    f3: function () { return 33; },
});

assert(
	c.f1() === 1 && c.f2() === 22 && c.f3() === 33 && c.f4() === 4 &&
	('f1' in c) && !c.hasOwnProperty('f1') && c.hasOwnProperty('f4') &&
	a.isPrototypeOf(c) && !b.isPrototypeOf(c)
);

```
