const { mean, median, mode } = require('./functions');

describe('#median', function() {
	it('finds the median of an odd arr length', function() {
		expect(median([ 1, 2, 3 ])).toEqual(2);
	});
	it('finds the median of an even arr length', function() {
		expect(median([ 1, 2, 3, 4 ])).toEqual(2.5);
	});
});

describe('#mean', function() {
	it('finds the mean of an array of numbers', function() {
		expect(mean([ 1, 2, 3, 4 ])).toEqual(2.5);
	});
	it('finds the mean of an empty array', function() {
		expect(mean([])).toEqual(0);
	});
});

describe('#mode', function() {
	it('finds the mode', function() {
		expect(mode([ 1, 2, 3, 4, 4, 4, 5 ])).toEqual(4);
	});
});
