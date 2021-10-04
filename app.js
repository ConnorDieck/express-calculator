const express = require('express');
const { mean, median, mode, convertAndValidateNumsArray } = require('./functions');
const ExpressError = require('./expressError');

const app = express();

app.get('/mean', (req, res) => {
	if (!req.query.nums) {
		throw new ExpressError('Please pass a query key of nums with a comma-separated list of numbers.', 400);
	}

	let numsAsStrings = req.query.nums.split(',');

	let nums = convertAndValidateNumsArray(numsAsStrings);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}

	let result = {
		operation: 'mean',
		result: mean(nums)
	};

	return res.send(result);
});

app.get('/median', (req, res) => {
	if (!req.query.nums) {
		throw new ExpressError('Please pass a query key of nums with a comma-separated list of numbers.', 400);
	}

	let numsAsStrings = req.query.nums.split(',');

	let nums = convertAndValidateNumsArray(numsAsStrings);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}

	let result = {
		operation: 'median',
		result: median(nums)
	};

	return res.send(result);
});

app.get('/mode', (req, res) => {
	if (!req.query.nums) {
		throw new ExpressError('Please pass a query key of nums with a comma-separated list of numbers.', 400);
	}

	let numsAsStrings = req.query.nums.split(',');

	let nums = convertAndValidateNumsArray(numsAsStrings);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}

	let result = {
		operation: 'mode',
		result: mode(nums)
	};

	return res.send(result);
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
	const e = new ExpressError('Page Not Found', 404);
	next(e);
});

// Error handler
app.use((err, req, res, next) => {
	let status = err.status || 500;
	let message = err.msg;

	return res.status(status).json({
		error: { message, status }
	});
});

app.listen(3000, function() {
	console.log('App on port 3000');
});
