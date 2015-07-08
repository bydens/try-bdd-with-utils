var utils = require('./utils'),
    expect =  require('expect.js');

describe('Utils', function() {

	describe('#sort()', function() {
		it('should sort given array of numbers with ascending ordering', function() {
			expect(utils.sort([2, 1, 3, 0, 6])).to.eql([0, 1, 2, 3, 6]);
			expect(utils.sort([])).to.be.empty;
			expect(utils.sort()).to.be.null;
			expect(utils.sort('string')).to.be.null;
			expect(utils.sort(undefined)).to.be.null;
			expect(utils.sort(null)).to.be.null;
			expect(utils.sort(false)).to.be.null;
			expect(utils.sort(['2', '1', '3', '0', '6'])).to.be.false;
			expect(utils.sort([2, 1, 3, 0, 6], function(a, b){return a > b})).to.eql([0, 1, 2, 3, 6]);
			expect(utils.sort([2, 1, 3, 0, 6], function(a, b){return a < b})).to.eql([6, 3, 2, 1, 0]);
			expect(utils.sort([2, 1, 3, 0, 6], null)).to.eql([0, 1, 2, 3, 6]);
			expect(utils.sort([2, 1, 3, 0, 6], 'string')).to.eql([0, 1, 2, 3, 6]);
			expect(utils.sort([2, 1, 3, 0, 6], undefined)).to.eql([0, 1, 2, 3, 6]);
			expect(utils.sort([2, 1, 3, 0, 6], false)).to.eql([0, 1, 2, 3, 6]);

		});

	});

	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('just do it!')).to.equal('Just do it!');
			expect(utils.capitalize(' just do it!')).to.equal('Just do it!');
			expect(utils.capitalize('1 just do it!')).to.equal('1 just do it!');
			expect(utils.capitalize()).to.be.false;
			expect(utils.capitalize('')).to.be.false;
			expect(utils.capitalize(1)).to.be.false;
			expect(utils.capitalize([1, 2])).to.be.false;
			expect(utils.capitalize({1: 'test'})).to.be.false;
			expect(utils.capitalize(function(){})).to.be.false;
			expect(utils.capitalize(undefined)).to.be.false;
			expect(utils.capitalize(null)).to.be.false;
			expect(utils.capitalize(false)).to.be.false;
		});
	});

	describe('#trim()', function() {
		it('should make any count of spaces from the beginning and from the end of the string', function() {
			expect(utils.trim(' just do it! ')).to.equal('just do it!');
			expect(utils.trim()).to.not.be.empty;
			expect(utils.trim(undefined)).to.not.be.undefined;
			expect(utils.trim(null)).to.not.be.null;
			expect(utils.trim(false)).to.not.be.false;
			expect(utils.trim(true)).to.not.be.false;
			expect(utils.trim('false')).to.be.a('string');
			expect(utils.trim({ foo: 'bar' })).to.not.be.an('object');
			expect(utils.trim(1)).to.not.be.true;

		});
	});

	describe('#camelize()', function() {
		it('should camelize string or array of string', function() {
			expect(utils.camelize()).to.not.be.empty;
			expect(utils.camelize({ foo: 'bar' })).to.not.be.an('object');
			expect(utils.camelize(undefined)).to.not.be.undefined;
			expect(utils.camelize(null)).to.not.be.null;
			expect(utils.camelize(false)).to.not.be.false;
			expect(utils.camelize(true)).to.not.be.false;
			expect(utils.camelize(1)).to.not.be.true;
			expect(utils.camelize('just do it!')).to.equal('Just Do It!');
			expect(utils.camelize(['just', 'do', 'it!'])).to.eql(['Just', 'Do', 'It!']);
		});
	});

	describe('#reverse()', function() {
		it('should returned reverses a specified list', function() {
			expect(utils.reverse()).to.not.be.empty;
			expect(utils.reverse({ foo: 'bar' })).to.be.false;
			expect(utils.reverse(undefined)).to.not.be.undefined;
			expect(utils.reverse(null)).to.not.be.null;
			expect(utils.reverse(false)).to.not.be.false;
			expect(utils.reverse(true)).to.not.be.false;
			expect(utils.reverse(1)).to.not.be.true;
			expect(utils.reverse(['A', 'D', '23', 'Agava', 34]))
				.to.eql([34, 'Agava', '23', 'D', 'A'])
				.and.to.be.empty;
		});
	});

	describe('#map()', function() {
		it('should change each list\'s element by applying handler', function() {
			var param1 = [2, 1, 3, 0, 6];
			var param2 = function(arr) {return arr += 6;};
			expect(utils.map(null, param2)).to.not.be.null;
			expect(utils.map(undefined, param2)).to.not.be.undefined;
			expect(utils.map(param1, null)).to.not.be.null;
			expect(utils.map(param1, undefined)).to.not.be.undefined;
			expect(utils.map(param1, param2)).to.eql([ 8, 7, 9, 6, 12 ]);
			expect(utils.map({'name': 'Vasia', 'age': 19}, param2)).to.eql({ name: 'Vasia6', age: 25 });

		});
	});

	describe('#groupBy()', function() {
		it('should group some input sequence of element by some rule', function() {
			var paramGroup1 = [1.3, 2.1, 2.4];
			var paramGroup2 = function(num){ return Math.floor(num); };
			expect(utils.groupBy(null, paramGroup2)).to.not.be.null;
			expect(utils.groupBy(undefined, paramGroup2)).to.not.be.undefined;
			expect(utils.groupBy('string', paramGroup2)).to.be.false;
			expect(utils.groupBy(1, paramGroup2)).to.be.false;
			expect(utils.groupBy(function(){}, paramGroup2)).to.be.false;
			expect(utils.groupBy(false, paramGroup2)).to.be.false;
			expect(utils.groupBy(paramGroup1, null)).to.not.be.null;
			expect(utils.groupBy(paramGroup1, undefined)).to.not.be.undefined;
			expect(utils.groupBy(paramGroup1, 'string')).to.be.false;
			expect(utils.groupBy(paramGroup1, 1)).to.be.false;
			expect(utils.groupBy(paramGroup1, function(){})).to.be.false;
			expect(utils.groupBy(paramGroup1, false)).to.be.false;
			expect(utils.groupBy(paramGroup1, paramGroup2)).to.eql({1: [1.3], 2: [2.1, 2.4]});
		});
	});

	describe('#once()', function() {
		it('should return called function only once', function() {
			var counter = 0;
			var newFunc = utils.once(function(){counter++;});
			newFunc();
			newFunc();
			expect(counter).to.equal(1);
			expect(utils.once(null)).to.not.be.null;
			expect(utils.once(undefined)).to.not.be.undefined;
			expect(utils.once(null)).to.not.be.null;
			expect(utils.once(false)).to.be.false;
			expect(utils.once(true)).to.be.false;
			expect(utils.once(1)).to.not.be.true;
			expect(utils.once('1')).to.not.be.true;
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
	
	expect(utils.debounce(null, 2000)).to.not.be.null;

});