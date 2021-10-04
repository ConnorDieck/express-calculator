function mean(nums) {
	if (nums.length === 0) {
		return 0;
	}
	let sum = 0;
	nums.forEach((num) => (sum += num));
	return sum / nums.length;
}

function median(nums) {
	const mid = Math.floor(nums.length / 2),
		arr = [ ...nums ].sort((a, b) => a - b);
	if (arr.length === 0) {
		return 0;
	}
	return nums.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

function mode(nums) {
	const count = {};

	nums.forEach((e) => {
		if (!(e in count)) {
			count[e] = 0;
		}

		count[e]++;
	});

	let bestElement;
	let bestCount = 0;

	Object.entries(count).forEach(([ key, value ]) => {
		if (value > bestCount) {
			bestElement = key;
			bestCount = value;
		}
	});

	// Convert key back to number
	return Number(bestElement);
}

function convertAndValidateNumsArray(numsAsStrings) {
	let result = [];

	for (let i = 0; i < numsAsStrings.length; i++) {
		let valToNumber = Number(numsAsStrings[i]);

		if (Number.isNaN(valToNumber)) {
			return new Error(`The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`);
		}

		result.push(valToNumber);
	}
	return result;
}

module.exports = { mean, median, mode, convertAndValidateNumsArray };
