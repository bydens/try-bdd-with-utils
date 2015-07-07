var utils = require('./utils'),
    expect =  require('expect.js');

describe('Utils', function() {

	describe('#sort()', function() {
		it('should sort given array of numbers with ascending ordering', function() {
			expect(utils.sort([2, 1, 3, 0, 6]).join()).to.equal([0, 1, 2, 3, 6].join());
			expect(utils.sort([2, 1, 3, 0, 6], function(a, b){return a > b}).join()).to.equal([0, 1, 2, 3, 6].join());
			expect(utils.sort([2, 1, 3, 0, 6], function(a, b){return a < b}).join()).to.equal([6, 3, 2, 1, 0].join());
		});

	});

	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('just do it!')).to.equal('Just do it!');
		});
	});

	describe('#trim()', function() {
		it('should make any count of spaces from the beginning and from the end of the string', function() {
			expect(utils.trim(' just do it! ')).to.equal('just do it!');
		});
	});

	describe('#camelize()', function() {
		it('should camelize string or array of string', function() {
			expect(utils.camelize('just do it!')).to.equal('Just Do It!');
			expect(utils.camelize(['just', 'do', 'it!']).join()).to.equal(['Just', 'Do', 'It!'].join());
		});
	});

	describe('#reverse()', function() {
		it('should returned reverses a specified list', function() {
			expect(utils.reverse(['A', 'D', '23', 'Agava', 34]).join())
				.to.equal([34, 'Agava', '23', 'D', 'A'].join())
				.and.to.be.empty;
		});
	});

	describe('#map()', function() {
		it('should change each list\'s element by applying handler', function() {
			expect(utils.map([2, 1, 3, 0, 6],function(arr) {return arr += 6;})).to.eql([ 8, 7, 9, 6, 12 ]);
			expect(utils.map({'name': 'Vasia', 'age': 19}, function(arr) {return arr += 6;})).to.eql({ name: 'Vasia6', age: 25 });
		});
	});

	describe('#groupBy()', function() {
		it('should group some input sequence of element by some rule', function() {
			expect(utils.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); })).to.eql({1: [1.3], 2: [2.1, 2.4]});
		});
	});

	describe('#once()', function() {
		it('should return called function only once', function() {
			var counter = 0;
			var newFunc = utils.once(function(){counter++;});
			newFunc();
			newFunc();
			expect(counter).to.equal(1);
		});
	});

	describe('#debounce()', function() {
		it('debounce', function() {

		var output = false;
		var time = 2000;

		var tmsmp = Date.now();
		var steps = 0;
		var getTime;

		function testFunc(arg) {output = true;}
		var f = utils.debounce(testFunc, time);

		function timeout() {
		    setTimeout(function () {
		        f();
		        if (output) {
		          getTime = Math.floor((Date.now() - tmsmp) / 1000);
		          if (steps) {
		          	expect((getTime / steps) * 1000).to.equal(time);
		            // console.log((getTime / steps) * 1000);
		          }
		          if (steps >= 7) {return;}
		          steps++;
		        }
		        output = false;
		        timeout();
		    }, 200);
		}
		timeout();
		});
	});

});