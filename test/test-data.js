
// global, for html page
create_assign = require("../create-assign.js");

module.exports = {

	"create_assign()": function (done) {
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

		done(!
			(
				c.f1() === 1 && c.f2() === 22 && c.f3() === 33 && c.f4() === 4 &&
				('f1' in c) && !c.hasOwnProperty('f1') && c.hasOwnProperty('f4') &&
				a.isPrototypeOf(c) && !b.isPrototypeOf(c)
			)
		);
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
