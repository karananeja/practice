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

/**
 * @problem_six
 * HackerLand University has the following grading policy:
 * Every student receives a grade in the inclusive range from 0 to 100.
 * Any grade less than 40 is a failing grade.
 * Sam is a professor at the university and likes to round each student's  according to these rules:
 * If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
 * If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 */
/**
 * @solution_six
function roundGrades(grades) {
	let roundedGrades = [];

	grades.forEach(element => {
		if (element >= 38) {
			let quotient = parseInt(element / 5), remainder = parseInt(element % 5);
			console.log(element, remainder);
			if (remainder >= 3) roundedGrades.push((quotient + 1) * 5);
			else roundedGrades.push(element);
		} else roundedGrades.push(element);
	});

	return roundedGrades;
}

console.log(roundGrades([73, 67, 38, 33]));

/**
 * @problem_seven
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
 * The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
 * Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
 * When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *
 */
/**
 * @solution_seven
function countApplesAndOranges(s, t, a, b, apples, oranges) {
	// sample input -> s = 7, t = 11, a = 5, b = 15, apples = [-2, 2, 1] and oranges = [5, -6]
	// sample output -> noOfApples = 1, noOfOranges = 1
	let noOfApples = 0, noOfOranges = 0;

	for (const apple of apples) {
		const appleLocation = a + apple;
		if (appleLocation >= s && appleLocation <= t) noOfApples++;
	}

	for (const orange of oranges) {
		const orangeLocation = b + orange;
		if (orangeLocation >= s && orangeLocation <= t) noOfOranges++;
	}

	console.log(noOfApples + '\n' + noOfOranges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
*/