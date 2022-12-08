/**
 * @problem_one
 * Complete the 'diagonalDifference' function below.
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
/**
 * @solution_one
function diagonalDifference(arr) {
		// Write your code here
		let principalDiagonalSum = 0, secondaryDiagonalSum = 0;

		for (let i = 0; i < arr.length; i++) {
				for (let j = 0; j < arr.length; j++) {
						if (i === j) {
								principalDiagonalSum += arr[i][j];
						}
						if ((i + j) === arr.length - 1) {
								secondaryDiagonalSum += arr[i][j];
						}
				}
		}

		if ((principalDiagonalSum - secondaryDiagonalSum) < 0) return -(principalDiagonalSum - secondaryDiagonalSum);
		else return principalDiagonalSum - secondaryDiagonalSum;
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
 */

/**
 * @problem_two
 * Complete the 'plusMinus' function below.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
/**
 * @solution_two
function plusMinus(arr) {
		// Write your code here
		let positiveCount = 0, negativeCount = 0, zero = 0;

		for (let i = 0; i < arr.length; i++) {
				if (arr[i] > 0) positiveCount += 1;
				else if (arr[i] < 0) negativeCount += 1;
				else zero += 1;
		}

		console.log(positiveCount / arr.length);
		console.log(negativeCount / arr.length);
		console.log(zero / arr.length);
}
 */

/**
 * @problem_three
 * Complete the 'compareTriplets' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
/**
 * @solution_three
function compareTriplets(a, b) {
		let aliceScore = 0, bobScore = 0, i = 0, result = [];

		while (i < 3) {
				if (a[i] > b[i]) {
						aliceScore++;
				} else if (a[i] < b[i]) {
						bobScore++;
				}
				i++;
		}

		result.push(aliceScore, bobScore);

		return result;
}
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
 */

/**
 * @problem_three
 * Complete the 'miniMaxSum' function below.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
/**
 * @solution_three
function miniMaxSum(arr) {
		// Write your code here
		arr.sort((a, b) => a - b);
		let minSum = 0, maxSum = 0;

		for (let i = 0; i < arr.length - 1; i++) {
				minSum += arr[i];
		}

		for (let i = 1; i < arr.length; i++) {
				maxSum += arr[i];
		}

		console.log(minSum, maxSum);
}
console.log(miniMaxSum([1, 2, 3, 5, 4]));
 */

/**
 * @problem_four
 * Complete the 'birthdayCakeCandles' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
/**
 * @solution_four
function birthdayCakeCandles(candles) {
	// Write your code here
	let count = {}, maxCount = 0;

	for (let element of candles) {
		if (count[element]) count[element] += 1;
		else count[element] = 1;
	}

	for (let element in count) {
		if (maxCount < count[element]) {
			maxCount = count[element];
		}
	}

	return maxCount;
}
console.log(birthdayCakeCandles([3, 3, 1, 1, 1, 1, 1, 1, 2, 1, 3]));
 */

/**
 * @problem_five
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */
/**
 * @solution_five
function convertTimeFormat(s) {
	if (s.toLowerCase().includes('pm')) {
		let timeWithoutPM = s.replace(/pm/i, '');

		if (parseInt(timeWithoutPM.split(':')[0]) < 12) return timeWithoutPM.replace(timeWithoutPM.split(':')[0], (parseInt(timeWithoutPM.split(':')[0]) + 12).toString());
		else return timeWithoutPM;
	} else {
		let timeWithoutAM = s.replace(/am/i, '');

		if (parseInt(timeWithoutAM.split(':')[0]) === 12) return timeWithoutAM.replace(timeWithoutAM.split(':')[0], '00');
		else return timeWithoutAM;
	}
}

console.log(convertTimeFormat('5:20:00PM'));
*/
