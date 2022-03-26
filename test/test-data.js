
//global variable, for html page, refer tpsvr @ npm.
create_assign = require("../create-assign.js");

module.exports = {

	"create_assign": function (done) {
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

	".assign/polyfill": function (done) {
		var a = {
			f1: function () { return 1; },
			f2: function () { return 2; },
		};
		var b = {
			f3: function () { return 3; },
			f4: function () { return 4; },
		};
		var c = {
			f2: function () { return 22; },
			f3: function () { return 33; },
		};

		var assign = create_assign.assign;

		var aa = assign(a, b, c);

		done(!
			(
				a === aa &&

				aa.f1() === 1 && aa.f2() === 22 && aa.f3() === 33 && aa.f4() === 4 &&

				((Object.assign && create_assign.assign === Object.assign) ||
					(!Object.assign && create_assign.assign)
				)
			)
		);
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('create_assign', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
