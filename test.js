var utils = require('./utils'),
		Helper = require('./Helper'),
    expect =  require('expect.js');
    sinon = require('sinon');

describe('Helper', function() {
	describe('#isArray(argument)', function() {
		it('Check the presence of an argument', function() {
			expect(Helper.isArray()).to.equal(false);
		});
		it('Argument not be "null"', function() {
			expect(Helper.isArray(null)).to.equal(false);
		});
		it('Argument not be "undefined"', function() {
			expect(Helper.isArray(undefined)).to.equal(false);
		});
		it('Argument not be "false"', function() {
			expect(Helper.isArray(false)).to.equal(false);
		});
		it('Argument not be "string"', function() {
			expect(Helper.isArray('string')).to.equal(false);
		});
		it('Argument not be "number"', function() {
			expect(Helper.isArray(1)).to.equal(false);
		});
		it('Argument not be "object"', function() {
			expect(Helper.isArray({1: 'test'})).to.equal(false);
		});
		it('Argument not be "function"', function() {
			expect(Helper.isArray(function(){})).to.equal(false);
		});
		it('Argument is "array"', function() {
			expect(Helper.isArray([1, 2])).to.equal(true);
		});
	});

	describe('#isFunction(argument)', function() {
		it('Check the presence of an argument', function() {
			expect(Helper.isFunction()).to.equal(false);
		});
		it('Argument not be "null"', function() {
			expect(Helper.isFunction(null)).to.equal(false);
		});
		it('Argument not be "undefined"', function() {
			expect(Helper.isFunction(undefined)).to.equal(false);
		});
		it('Argument not be "false"', function() {
			expect(Helper.isFunction(false)).to.equal(false);
		});
		it('Argument not be "string"', function() {
			expect(Helper.isFunction('string')).to.equal(false);
		});
		it('Argument not be "number"', function() {
			expect(Helper.isFunction(1)).to.equal(false);
		});
		it('Argument not be "object"', function() {
			expect(Helper.isFunction({1: 'test'})).to.equal(false);
		});
		it('Argument is "function"', function() {
			expect(Helper.isFunction(function(){})).to.equal(true);
		});
		it('Argument not be "array"', function() {
			expect(Helper.isFunction([1, 2])).to.equal(false);
		});
	});

	describe('#isObject(argument)', function() {
		it('Check the presence of an argument', function() {
			expect(Helper.isObject()).to.equal(false);
		});
		it('Argument not be "null"', function() {
			expect(Helper.isObject(null)).to.equal(false);
		});
		it('Argument not be "undefined"', function() {
			expect(Helper.isObject(undefined)).to.equal(false);
		});
		it('Argument not be "false"', function() {
			expect(Helper.isObject(false)).to.equal(false);
		});
		it('Argument not be "string"', function() {
			expect(Helper.isObject('string')).to.equal(false);
		});
		it('Argument not be "number"', function() {
			expect(Helper.isObject(1)).to.equal(false);
		});
		it('Argument is "object"', function() {
			expect(Helper.isObject({1: 'test'})).to.equal(true);
		});
		it('Argument not be "function"', function() {
			expect(Helper.isObject(function(){})).to.equal(false);
		});
		it('Argument not be "array"', function() {
			expect(Helper.isObject([1, 2])).to.equal(false);
		});
	});
});

describe('Utils', function() {

	describe('#sort(list, comparator)', function() {
		it('Argument "list" must be "array"', function() {
			expect(utils.sort(null)).to.equal(false);
			expect(utils.sort(false)).to.equal(false);
			expect(utils.sort(undefined)).to.equal(false);
			expect(utils.sort('string')).to.equal(false);
			expect(utils.sort(1)).to.equal(false);
			expect(utils.sort(function(){})).to.equal(false);
			expect(utils.sort({})).to.equal(false);
			expect(utils.sort([])).to.not.equal(false);
		});

		it('Argument "comparator" must be "function" or absent', function() {
			var sortList = [];
			expect(utils.sort(sortList, null)).to.not.equal(false);
			expect(utils.sort(sortList, false)).to.not.equal(false);
			expect(utils.sort(sortList, undefined)).to.not.equal(false);
			expect(utils.sort(sortList, 'string')).to.equal(false);
			expect(utils.sort(sortList, 1)).to.equal(false);
			expect(utils.sort(sortList, function(){})).to.not.equal(false);
			expect(utils.sort(sortList, {})).to.equal(false);
			expect(utils.sort(sortList, [])).to.equal(false);
		});
		it('should sort given array of numbers with ascending ordering', function() {
			expect(utils.sort([2, 1, 3, 0, 6])).to.eql([0, 1, 2, 3, 6]);
			expect(utils.sort([2, 1, 3, 0, 6], function(a, b){return a > b})).to.eql([0, 1, 2, 3, 6]);
			expect(utils.sort([2, 1, 3, 0, 6], function(a, b){return a < b})).to.eql([6, 3, 2, 1, 0]);
		});
	});

	describe('#capitalize(string)', function() {
		it('Argument "string" must be "string" and not be "null"', function() {
			expect(utils.capitalize(null)).to.equal(false);
			expect(utils.capitalize(false)).to.equal(false);
			expect(utils.capitalize(undefined)).to.equal(false);
			expect(utils.capitalize('string')).to.not.equal(false);
			expect(utils.capitalize(1)).to.equal(false);
			expect(utils.capitalize(function(){})).to.equal(false);
			expect(utils.capitalize({})).to.equal(false);
			expect(utils.capitalize([])).to.equal(false);
		});
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('just do it!')).to.equal('Just do it!');
			expect(utils.capitalize(' just do it!')).to.equal('Just do it!');
			expect(utils.capitalize('1 just do it!')).to.equal('1 just do it!');
		});
	});

	describe('#trim(str)', function() {
		it('Argument "str" must be "string" and not be "null"', function() {
			expect(utils.trim(null)).to.equal(false);
			expect(utils.trim(false)).to.equal(false);
			expect(utils.trim(undefined)).to.equal(false);
			expect(utils.trim('string')).to.not.equal(false);
			expect(utils.trim(1)).to.equal(false);
			expect(utils.trim(function(){})).to.equal(false);
			expect(utils.trim({})).to.equal(false);
			expect(utils.trim([])).to.equal(false);
		});
		it('should make any count of spaces from the beginning and from the end of the string', function() {
			expect(utils.trim(' just do it! ')).to.equal('just do it!');
		});
	});

	describe('#camelize(sequence)', function() {
		it('Argument "sequence" must be "string" or "array"', function() {
			expect(utils.camelize(null)).to.equal(false);
			expect(utils.camelize(false)).to.equal(false);
			expect(utils.camelize(undefined)).to.equal(false);
			expect(utils.camelize('string')).to.not.equal(false);
			expect(utils.camelize(1)).to.equal(false);
			expect(utils.camelize(function(){})).to.equal(false);
			expect(utils.camelize({})).to.equal(false);
			expect(utils.camelize([])).to.not.equal(false);
		});
		it('should camelize string or array of string', function() {
			expect(utils.camelize('just do it!')).to.equal('Just Do It!');
			expect(utils.camelize(['just', 'do', 'it!'])).to.eql(['Just', 'Do', 'It!']);
		});
	});

	describe('#reverse(list)', function() {
		it('Argument "list" must be "array" and may be empty', function() {
			expect(utils.reverse(null)).to.not.equal(false);
			expect(utils.reverse(false)).to.not.equal(false);
			expect(utils.reverse(undefined)).to.not.equal(false);
			expect(utils.reverse('string')).to.equal(false);
			expect(utils.reverse(1)).to.equal(false);
			expect(utils.reverse(function(){})).to.equal(false);
			expect(utils.reverse({})).to.equal(false);
			expect(utils.reverse([])).to.not.equal(false);
		});

		it('should returned reverses a specified list', function() {
			expect(utils.reverse(['A', 'D', '23', 'Agava', 34])).to.eql([34, 'Agava', '23', 'D', 'A']);
		});
	});

	describe('#map(list, iterator)', function() {
		var mapIterator = function(){};
		var mapList = [];
		it('Argument "list" must be only "array" or "object"', function() {
			expect(utils.map(null, mapIterator)).to.equal(false);
			expect(utils.map(false, mapIterator)).to.equal(false);
			expect(utils.map(undefined, mapIterator)).to.equal(false);
			expect(utils.map('string', mapIterator)).to.equal(false);
			expect(utils.map(1, mapIterator)).to.equal(false);
			expect(utils.map(function(){}, mapIterator)).to.equal(false);
			expect(utils.map({}, mapIterator)).to.not.equal(false);
			expect(utils.map([], mapIterator)).to.not.equal(false);
		});
		it('Argument "iterator" must be only "function"', function() {
			expect(utils.map(mapList, null)).to.equal(false);
			expect(utils.map(mapList, false)).to.equal(false);
			expect(utils.map(mapList, undefined)).to.equal(false);
			expect(utils.map(mapList, 'string')).to.equal(false);
			expect(utils.map(mapList, 1)).to.equal(false);
			expect(utils.map(mapList, function(){})).to.not.equal(false);
			expect(utils.map(mapList, {})).to.equal(false);
			expect(utils.map(mapList, [])).to.equal(false);
		});

		it('should change each list\'s element by applying handler', function() {
			var param1 = [2, 1, 3, 0, 6];
			var param2 = function(arr) {return arr += 6;};
			expect(utils.map(param1, param2)).to.eql([ 8, 7, 9, 6, 12 ]);
			expect(utils.map({'name': 'Vasia', 'age': 19}, param2)).to.eql({ name: 'Vasia6', age: 25 });

		});
	});

	describe('#groupBy(list, iterator)', function() {
		var groupByIterator = function(){};
		var groupByList = [];
		it('Argument "list" must be only "array"', function() {
			expect(utils.groupBy(null, groupByIterator)).to.equal(false);
			expect(utils.groupBy(false, groupByIterator)).to.equal(false);
			expect(utils.groupBy(undefined, groupByIterator)).to.equal(false);
			expect(utils.groupBy('string', groupByIterator)).to.equal(false);
			expect(utils.groupBy(1, groupByIterator)).to.equal(false);
			expect(utils.groupBy(function(){}, groupByIterator)).to.equal(false);
			expect(utils.groupBy({}, groupByIterator)).to.equal(false);
			expect(utils.groupBy([], groupByIterator)).to.not.equal(false);
		});
		it('Argument "iterator" must be only "function"', function() {
			expect(utils.groupBy(groupByList, null)).to.equal(false);
			expect(utils.groupBy(groupByList, false)).to.equal(false);
			expect(utils.groupBy(groupByList, undefined)).to.equal(false);
			expect(utils.groupBy(groupByList, 'string')).to.equal(false);
			expect(utils.groupBy(groupByList, 1)).to.equal(false);
			expect(utils.groupBy(groupByList, function(){})).to.not.equal(false);
			expect(utils.groupBy(groupByList, {})).to.equal(false);
			expect(utils.groupBy(groupByList, [])).to.equal(false);
		});
		it('should group some input sequence of element by some rule', function() {
			var paramGroup1 = [1.3, 2.1, 2.4];
			var paramGroup2 = function(num){ return Math.floor(num); };
			expect(utils.groupBy(paramGroup1, paramGroup2)).to.eql({1: [1.3], 2: [2.1, 2.4]});
		});
	});

	describe('#once(func)', function() {
		it('Argument "func" must be "function" and not be "null"', function() {
			expect(utils.once(null)).to.equal(false);
			expect(utils.once(false)).to.equal(false);
			expect(utils.once(undefined)).to.equal(false);
			expect(utils.once('string')).to.equal(false);
			expect(utils.once(1)).to.equal(false);
			expect(utils.once(function(){})).to.not.equal(false);
			expect(utils.once({})).to.equal(false);
			expect(utils.once([])).to.equal(false);
		});
		it('should return called function only once', function() {
			var counter = 0;
			var newFunc = utils.once(function(){counter++;});
			newFunc();
			newFunc();
			expect(counter).to.equal(1);
		});


	});

	describe('#debounce(func, wait)', function() {
		var debounceFunc = function(){};
		var debounceWait = 2000;
		it('Argument "func" must be only "function"', function() {
			expect(utils.debounce(null, debounceWait)).to.equal(false);
			expect(utils.debounce(false, debounceWait)).to.equal(false);
			expect(utils.debounce(undefined, debounceWait)).to.equal(false);
			expect(utils.debounce('string', debounceWait)).to.equal(false);
			expect(utils.debounce(2000, debounceWait)).to.equal(false);
			expect(utils.debounce(function(){}, debounceWait)).to.not.equal(false);
			expect(utils.debounce({}, debounceWait)).to.equal(false);
			expect(utils.debounce([], debounceWait)).to.equal(false);
		});
		it('Argument "wait" must be only "number"', function() {
			expect(utils.debounce(debounceFunc, null)).to.equal(false);
			expect(utils.debounce(debounceFunc, false)).to.equal(false);
			expect(utils.debounce(debounceFunc, undefined)).to.equal(false);
			expect(utils.debounce(debounceFunc, 'string')).to.equal(false);
			expect(utils.debounce(debounceFunc, 2000)).to.not.equal(false);
			expect(utils.debounce(debounceFunc, function(){})).to.equal(false);
			expect(utils.debounce(debounceFunc, {})).to.equal(false);
			expect(utils.debounce(debounceFunc, [])).to.equal(false);
		});
	});
});


describe('Fake timers', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers();
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('test debounce with useFakeTimers', function () {
    var spy = sinon.spy();
   	utils.debounce(spy, 1000);

    this.clock.tick(999);
    expect(spy.called).to.equal(false);

    this.clock.tick(2000);
    expect(spy.called).to.equal(true);
  });

});