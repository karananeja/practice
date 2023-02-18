/**
 * @problem_one
 * Complete the 'diagonalDifference' function below.
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
/**
 * @solution_one
 */
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

/**
 * @problem_two
 * Complete the 'plusMinus' function below.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
/**
 * @solution_two
 */
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
plusMinus([-4, 3, -9, 0, 4, 1]);

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
 */
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

/**
 * @problem_three
 * Complete the 'miniMaxSum' function below.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
/**
 * @solution_three
 */
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

/**
 * @problem_four
 * Complete the 'birthdayCakeCandles' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
/**
 * @solution_four
 */
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

/**
 * @problem_five
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */
/**
 * @solution_five
 */
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
 */
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
 */
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

/**
 * @problem_eight
 * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
 * She tabulates the number of times she breaks her season record for most points and least points in a game. 
 * Points scored in the first game establish her record for the season, and she begins counting from there.
 */
/**
 * @solution_eight
 */
function breakingRecords(scores) {
	let maxTimes = 0, minTimes = 0;
	let min = scores[0];
	let max = scores[0];

	for (let i = 0; i < scores.length; i++) {
		if (scores[i] < min) {
			min = scores[i];
			minTimes++;
		}
		if (scores[i] > max) {
			max = scores[i];
			maxTimes++;
		}
	}
	return [maxTimes, minTimes];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

/**
 * @problem_nine
 * Complete the function in the editor below by returning a RegExp object, re, that matches any string s satisfying both of the following conditions:
 * String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
 * The remainder of string s (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
 */
/**
 * @solution_nine
 */
function regexStr(str) {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
	 * followed by one or more letters.
	 */
	const re = /^(Mr|Mrs|Ms|Dr|Er)[\.][a-zA-Z]+$/ig;
	/*
	 * Do not remove the return statement
	 */
	return str.match(re);
}
console.log(!!regexStr('Mr.John'));

/**
 * @problem_ten
 * Complete the function in the editor below by returning a RegExp object, re, that matches every integer in some string s.
 */
/**
 * @solution_ten
 */
function regexNumStr(numString) {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match ALL occurrences of numbers in a string.
	 */
	const re = /\d+/ig;

	/*
	 * Do not remove the return statement
	 */
	return numString.match(re);

}
console.log(!!regexNumStr('123'));

/**
 * @problem_eleven
 * Complete the 'kangaroo' function below.
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */
/**
 * @solution_eleven
 */
function kangaroo(x1, v1, x2, v2) {
	// Write your code here
	if ((x1 - x2) * (v1 - v2) > 0) {
		return "NO";
	}
	if ((x2 - x1) % (v1 - v2) == 0) {
		return "YES";
	}
	else {
		return "NO";
	}
}
console.log(kangaroo(0, 3, 4, 2));

/**
 * @problem_twelve
 * Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. 
 * Otherwise, it should print the integer amount of money that Brian owes Anna.
 * bonAppetit has the following parameter(s):
 * bill: an array of integers representing the cost of each item ordered
 * k: an integer representing the zero-based index of the item Anna doesn't eat
 * b: the amount of money that Anna contributed to the bill
 */
/**
 * @solution_twelve
 */
function bonAppetit(bill, k, b) {
	// Write your code here
	let billTotal = 0, billSplit = 0;

	for (let i = 0; i < bill.length; i++) {
		if (i !== k) billTotal += bill[i];
	}

	billSplit = billTotal / 2;

	if (billSplit === b) console.log('Bon Appetit');
	else console.log(b - billSplit);
}
bonAppetit([3, 10, 2, 9], 1, 7);

/**
 * @problem_thirteen
 * Complete the birthday function in the editor below.
 * birthday has the following parameter(s):
 * int s[n]: the numbers on each of the squares of chocolate
 * int d: Ron's birth day
 * int m: Ron's birth month
 */
/**
 * @solution_thirteen
 */
function birthday(s, d, m) {
	// Write your code here
	let count = 0;
	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		sum = s[i];
		for (let j = 1; j < m; j++) {
			sum += s[i + j];
		}
		if (sum == d) {
			count++;
			sum = 0;
		}
	}

	return count;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));

/**
 * @problem_fourteen
 * Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
 * Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. 
 * If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.
 * You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. 
 * Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.
 * If cat A catches the mouse first, print Cat A.
 * If cat B catches the mouse first, print Cat B.
 * If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
 */
/**
 * @solution_fourteen
 */
function catAndMouse(x, y, z) {
	return Math.abs(x - z) === Math.abs(y - z) ? "Mouse C" : Math.abs(x - z) < Math.abs(y - z) ? "Cat A" : "Cat B";
}
console.log(catAndMouse(1, 2, 3));

/**
 * @problem_fifteen
 * Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.
 */
/**
 * @solution_fifteen
 */
function divisibleSumPairs(n, k, ar) {
	// Write your code here
	let count = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i < j && (ar[i] + ar[j]) % k === 0) count++;
		}
	}

	return count;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

/**
 * @problem_sixteen
 * Complete the getTotalX function in the editor below. It should return the number of integers that are between the sets.
 * getTotalX has the following parameter(s):
 * int a[n]: an array of integers
 * int b[m]: an array of integers
 */
/**
 * @solution_sixteen
 */
function getTotalX(a, b) {
	// Write your code here
	let count = 0;

	for (let i = a[a.length - 1]; i <= b[0]; i++) {
		if (a.every((e) => i % e == 0) && b.every((el) => el % i == 0)) count++;
	}

	return count;
}
console.log(getTotalX([2, 4], [16, 32, 96]));

/**
 * @problem_seventeen
 * Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. 
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 */
/**
 * @solution_seventeen
 */
function migratoryBirds(arr) {
	// Write your code here
	arr = arr.sort((a, b) => a - b);

	let result = [0, 0];

	for (let i = 0; i < arr.length; i++) {
		let count = 1;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) count += 1;
		}

		if (count > result[1]) {
			result[1] = count;
			result[0] = arr[i];
		}
	}

	return result[0];
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));

/**
 * @problem_eighteen
 * Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.
 * dayOfProgrammer has the following parameter(s):
 * year: an integer
 */
/**
 * @solution_eighteen
 */
function dayOfProgrammer(year) {
	// Write your code here
	const dayOfTheProgrammer = 256;

	let isLeapYear = year > 1918 ? (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) : (year % 4 === 0);
	let numberOfDaysInFirstEightMonths = isLeapYear ? 244 : year === 1918 ? 230 : 243;

	return `${dayOfTheProgrammer - numberOfDaysInFirstEightMonths}.09.${year}`;
}
console.log(dayOfProgrammer(1918));

/**
 * @problem_nineteen
 * Complete the sockMerchant function in the editor below.
 * sockMerchant has the following parameter(s):
 * int n: the number of socks in the pile
 * int ar[n]: the colors of each sock
 */
/**
 * @solution_nineteen
 */
function sockMerchant(n, arr) {
	// Write your code here
	let socksObj = {}, numberOfPairs = 0;

	for (let value of arr) {
		if (socksObj[value]) socksObj[value] += 1;
		else socksObj[value] = 1;
	}

	Object.keys(socksObj).forEach(sock => {
		if (socksObj[sock] % 2 === 0 || socksObj[sock] > 2) numberOfPairs += Math.floor(socksObj[sock] / 2);
	});

	return numberOfPairs;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

/**
 * @problem_twenty
 * An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly "steps" steps, for every step it was noted if it was an uphill, U, or a downhill, D step. 
 * Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
 * A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
 * A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
 * Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
 */
/**
 * @solution_twenty
 */
function countingValleys(steps, path) {
	// Write your code here
	let uphillQuantity = 0, isUpHill = false, result = 0;

	for (let i = 0; i < steps; i++) {
		isUpHill = (path[i] === 'U');
		isUpHill ? uphillQuantity++ : uphillQuantity--;

		if (isUpHill && uphillQuantity === 0) result++;
	}

	return result;
}
console.log(countingValleys(8, "UDDDUDUU"));

/**
 * @problem_twentyOne
 * Complete the getMoneySpent function in the editor below.
 * getMoneySpent has the following parameter(s):
 * int keyboards[n]: the keyboard prices
 * int drives[m]: the drive prices
 * int b: the budget
 */
/**
 * @solution_twentyOne
 */
function getMoneySpent(keyboards, drives, b) {
	/*
	 * Write your code here.
	 */
	let max = 0;

	keyboards.map(keyboard => {
		drives.map(drive => {
			let sum = keyboard + drive;
			if (sum <= b && sum > max) max = sum;
		});
	});

	return (max > 0 ? max : -1);
}
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));

/**
 * @problem_twentyTwo
 * Complete the pageCount function in the editor below.
 * pageCount has the following parameter(s):
 * int n: the number of pages in the book
 * int p: the page number to turn to
 */
/**
 * @solution_twentyTwo
 */
function pageCount(n, p) {
	// Write your code here
	let result = 0;

	if (n % 2 === 0) {
		n += 1;
	}

	result = Math.floor(Math.min((p / 2), ((n - p) / 2)));
	return result;
}
console.log(pageCount(6, 2));

/**
 * @problem_twentyThree
 * A video player plays a game in which the character competes in a hurdle race. 
 * Hurdles are of varying heights, and the characters have a maximum height they can jump. 
 * There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. 
 * How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.
 */
/**
 * @solution_twentyThree
 */
function hurdleRace(k, height) {
	// Write your code here
	return k > Math.max(...height) ? 0 : Math.abs(Math.max(...height) - k);
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));

/**
 * @problem_twentyFour
 * Complete the designerPdfViewer function in the editor below. 
 * designerPdfViewer has the following parameter(s):
 * int h[26]: the heights of each letter
 * string word: a string
 */
/**
 * @solution_twentyFour
 */
function designerPdfViewer(h, word) {
	// Write your code here
	let maxHeight = 0;

	for (let i = 0; i < word.length; i++) {
		let charCodeValue = word.toLowerCase().charCodeAt(i) - 97;
		if (maxHeight < h[charCodeValue]) maxHeight = h[charCodeValue];
	}

	return maxHeight * word.length;
}
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc"));

/**
 * @problem_twentyFive
 * Complete the pickingNumbers function in the editor below.
 * pickingNumbers has the following parameter(s):
 * int a[n]: an array of integers
 */
/**
 * @solution_twentyFive
 */
function pickingNumbers(a) {
	// Write your code here
	const arr = a.sort((a, b) => a - b);
	let longestSuite = 0;
	let increment = 0;
	for (let i = 0; i < arr.length; i += increment) {
		let j = i;
		let suite = 0;
		while (arr[j] - arr[i] <= 1) {
			suite++;
			j++;
		}
		if (suite > longestSuite) longestSuite = suite;
		increment = suite === 0 ? 1 : suite;
	}
	return longestSuite;
}
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

/**
 * @problem_twentySix
 * The first line contains an integer, q, denoting the number of function calls.
 * Each of the q subsequent lines defines a dataset for a function call in the form of two space-separated 
 * integers describing the respective values of n and k.
 */
/**
 * @solution_twentySix
 */
function getMaxLessThanK(n, k) {
	let maxBitWiseNumber = 0;
	let result;

	for (let i = 0; i <= n; i++) {
		for (let j = i + 1; j <= n; j++) {
			result = i & j;
			if (result < k && result > maxBitWiseNumber) {
				maxBitWiseNumber++;
			}
		}
	}

	return maxBitWiseNumber;
}
console.log(getMaxLessThanK(5, 2));

/**
 * @problem_twentySeven
 * The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. 
 * Each summer, its height increases by 1 meter.
 * A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?
 */
/**
 * @solution_twentySeven
 */
function utopianTree(n) {
	// Write your code here
	let heightOfTree = 1;

	for (let i = 1; i <= n; i++) {
		let isSpring = i % 2 !== 0;

		if (isSpring) heightOfTree *= 2;
		else heightOfTree += 1;
	}

	return heightOfTree;
}
console.log(utopianTree(4));

/**
 * @problem_twentyEight
 * A Discrete Mathematics professor has a class of students. 
 * Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. 
 * Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).
 * Given the arrival time of each student and a threshold number of attendees, determine if the class is cancelled.
 */
/**
 * @solution_twentyEight
 */
function angryProfessor(k, a) {
	// Write your code here
	let arrivedEarly = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] <= 0) arrivedEarly++;
	}

	return arrivedEarly >= k ? 'NO' : 'YES';
}
console.log(angryProfessor(3, [-1, -3, 4, 2]));

/**
 * @problem_twentyNine
 * Lily likes to play games with integers. 
 * She has created a new game where she determines the difference between a number and its reverse. 
 * For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.
 * She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
 * Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful. 
 * Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. 
 * If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.
 */
/**
 * @solution_twentyNine
 */
function beautifulDays(i, j, k) {
	// Write your code here
	let beautifulDays = 0;

	for (let num = i; num <= j; num++) {
		let reverseNum = parseInt(num.toString().split('').reverse().join(''));

		let differenceOfNum = Math.abs(num - reverseNum);

		if (differenceOfNum % k == 0) beautifulDays++;
	}

	return beautifulDays;
}
console.log(beautifulDays(20, 23, 6));

/**
 * @problem_thirty
 * Complete the viralAdvertising function in the editor below. 
 * viralAdvertising has the following parameter(s):
 * int n: the day number to report
 */
/**
 * @solution_thirty
 */
function viralAdvertising(n) {
	// Write your code here
	let count = 5, likedCount = 0, totalCount = 0;
	const sharedCount = 3;

	for (let i = 0; i < n; i++) {
		likedCount = (Math.floor(count / 2));
		totalCount += likedCount;
		count = likedCount * sharedCount;
	}

	return totalCount;
}
console.log(viralAdvertising(5));

/**
 * @problem_thirtyOne
 * Complete the permutationEquation function in the editor below.
 * permutationEquation has the following parameter(s):
 * int p[n]: an array of integers
 */
/**
 * @solution_thirtyOne
 */
function permutationEquation(p) {
	// Write your code here
	return p.map((element, index) => p.indexOf(p.indexOf(index + 1) + 1) + 1);
}
console.log(permutationEquation([5, 2, 1, 3, 4]));

/**
 * @problem_thirtyTwo
 * An integer  is a divisor of an integer n if the remainder of n % d = 0.
 * Given an integer, for each digit that makes up the integer determine whether it is a divisor.
 * Count the number of divisors occurring within the integer.
 */
/**
 * @solution_thirtyTwo
 */
function findDigits(n) {
	// Write your code here
	let digits = n.toString().split('');
	let count = 0;

	for (let digit of digits) {
		if (n % parseInt(digit) === 0) count++;
	}

	return count;
}
console.log(findDigits(124));

/**
 * @problem_thirtyThree
 * A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds.
 * The character must jump from cloud to cloud until it reaches the start again.
 * There is an array of clouds, c and an energy level e = 100.
 * The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i + k) % n].
 * If it lands on a thundercloud, c[i] = 1, its energy (e) decreases by 2 additional units. The game ends when the character lands back on cloud 0.
 * Given the values of n, k, and the configuration of the clouds as an array c, determine the final value of e after the game ends.
 */
/**
 * @solution_thirtyThree
 */
function jumpingOnClouds(c, k) {
	let energyLevel = 100, i = 0;
	let cloudsLength = c.length;

	while (i < cloudsLength) {
		if (c[i] === 0) {
			energyLevel -= 1;
		} else {
			energyLevel -= 3;
		}

		i += k;

		if (i === cloudsLength) {
			break;
		} else if (i > cloudsLength) {
			i -= cloudsLength;
		}
	}

	return energyLevel;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

/**
 * @problem_thirtyFour
 * Complete the extraLongFactorials function in the editor below.
 * It should print the result and return.
 * extraLongFactorials has the following parameter(s):
 * n: an integer
 */
/**
 * @solution_thirtyFour
 */
function extraLongFactorials(n) {
	// Write your code here
	let fact = BigInt(1);

	for (let i = 1; i <= n; i++) {
		fact *= BigInt(i);
	}

	console.log(fact.toString());
}
extraLongFactorials(25);

/**
 * @problem_thirtyFive
 * You are given a number of sticks of varying lengths. 
 * You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. 
 * At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. 
 * When all the remaining sticks are the same length, they cannot be shortened so discard them.
 * Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.
 */
/**
 * @solution_thirtyFive
 */
function cutTheSticks(arr) {
	// Write your code here
	let noOfSticks = [];

	while (arr.length > 0) {
		let smallestStick = arr.sort((a, b) => a - b)[0];

		arr = arr.map(ele => ele -= smallestStick);

		noOfSticks.push(arr.length);

		arr = arr.filter(ele => ele > 0);
	}

	return noOfSticks;
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));

/**
 * @problem_thirtySix
 * Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.
 */
/**
 * @solution_thirtySix
 */
function equalizeArray(arr) {
	// Write your code here
	let count = {}, maxCount = 0;

	for (let element of arr) {
		if (count[element]) count[element] += 1;
		else count[element] = 1;
	}

	for (let element in count) {
		if (maxCount < count[element]) maxCount = count[element];
	}

	return arr.length - maxCount;
}
console.log(equalizeArray([3, 3, 2, 1, 3]));

/**
 * @problem_thirtySeven
 * Watson likes to challenge Sherlock's math ability.
 * He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints.
 * Sherlock must determine the number of square integers within that range.
 * Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.
 * Example
 * a = 24
 * b = 49
 * There are three square integers in the range: 25, 36 and 49. Return 3.
 */
/**
 * @solution_thirtySeven
 */
function squares(a, b) {
	// Write your code here
	let sqrtA = Math.ceil(Math.sqrt(a));
	let sqrtB = Math.ceil(Math.sqrt(b));

	return Math.pow(sqrtB, 2) === b ? Math.abs(sqrtA - sqrtB) + 1 : Math.abs(sqrtA - sqrtB);

}
console.log(squares(24, 49));

/**
 * @problem_thirtyEight
 * The distance between two array values is the number of indices between them.
 * Given a, find the minimum distance between any pair of equal elements in the array.
 *  If no such value exists, return -1.
 */
/**
 * @solution_thirtyEight
 */
function minimumDistances(a) {
	// Write your code here
	let minimumDistance = [];

	for (let i = 0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			if ((a[i] === a[j])) minimumDistance.push(Math.abs(i - j));
		}
	}

	return minimumDistance.length > 0 ? minimumDistance.sort((a, b) => a - b)[0] : -1;
}
console.log(minimumDistances([3, 2, 1, 2, 3]));

/**
 * @problem_thirtyNine
 * Complete the libraryFine function in the editor below.
 * libraryFine has the following parameter(s):
 * d1, m1, y1: returned date day, month and year, each an integer
 * d2, m2, y2: due date day, month and year, each an integer
 */
/**
 * @solution_thirtyNine
 */
function libraryFine(d1, m1, y1, d2, m2, y2) {
	// Write your code here
	if (d1 > d2 && m1 === m2 && y1 === y2) return 15 * (d1 - d2);

	if (m1 > m2 && y1 === y2) return 500 * (m1 - m2);

	if (y1 > y2) return 10000;

	return 0;
}
console.log(libraryFine(2, 7, 1014, 1, 1, 1015));

/**
 * @problem_forty
 * There is a string, s, of lowercase English letters that is repeated infinitely many times. 
 * Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.
 */
/**
 * @solution_forty
 */
function repeatedString(s, n) {
	// Write your code here
	let count = 0;
	let repeat = Math.floor(n / s.length);
	let remain = n - s.length * repeat;

	for (let i = 0; i <= s.length; i++) {
		if (s[i] === 'a') count++;
	}
	count *= repeat;

	for (let i = 0; i < remain; i++) {
		if (s[i] === 'a') count++;
	}

	return count;
}
console.log(repeatedString('aba', 10));

/**
 * @problem_fortyOne
 * Complete the timeInWords function in the editor below.
 * timeInWords has the following parameter(s):
 * int h: the hour of the day
 * int m: the minutes after the hour
 */
/**
 * @solution_fortyOne
 */
function timeInWords(h, m) {
	// Write your code here
	const numberToWord = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		21: 'twenty one',
		22: 'twenty two',
		23: 'twenty three',
		24: 'twenty four',
		25: 'twenty five',
		26: 'twenty six',
		27: 'twenty seven',
		28: 'twenty eight',
		29: 'twenty nine',
	};

	if (m === 0) return `${numberToWord[h]} o' clock`;
	if (m === 15) return `quarter past ${numberToWord[h]}`;
	if (m === 30) return `half past ${numberToWord[h]}`;
	if (m < 30) return `${numberToWord[m]} ${m > 1 ? 'minutes' : 'minute'} past ${numberToWord[h]}`;
	if (m === 45) return `quarter to ${numberToWord[h + 1]}`;
	if (m < 60) return `${numberToWord[60 - m]} minutes to ${numberToWord[h + 1]}`;
}
console.log(timeInWords(5, 47));

/**
 * @problem_fortyTwo
 * A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. 
 * Luckily, a service lane runs parallel to the highway. It varies in width along its length.
 * You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. 
 * Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.
 */
/**
 * @solution_fortyTwo
 */
function serviceLane(n, cases, width) {
	// Write your code here
	let minWidth = [];

	for (let i = 0; i < cases.length; i++) {
		let possibleWidths = [];

		for (let j = cases[i][0]; j <= cases[i][1] && j < n; j++) possibleWidths.push(width[j]);

		minWidth.push(Math.min(...possibleWidths));
	}

	return minWidth;
}
console.log(serviceLane(8, [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]], [
	2, 3, 1, 2,
	3, 2, 3, 3
]));

/**
 * @problem_fortyThree
 * There is a sequence of words in CamelCase as a string of letters, s, having the following properties:
 * It is a concatenation of one or more words consisting of English letters.
 * All letters in the first word are lowercase.
 * For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
 * Given s, determine the number of words in s.
 */
/**
 * @solution_fortyThree
 */
function camelCase(s) {
	// Write your code here
	return s.match(/[A-Z]/g) ? s.match(/[A-Z]/g).length + 1 : 1;
}
console.log(camelCase("saveChangesInTheEditor"));

/**
 * @problem_fortyFour
 * Taum is planning to celebrate the birthday of his friend, Diksha.
 * There are two types of gifts that Diksha wants from Taum: one is black and the other is white. 
 * To make her happy, Taum has to buy b black gifts and w white gifts.
 * The cost of each black gift is bc units.
 * The cost of every white gift is wc units.
 * The cost to convert a black gift into white gift or vice versa is z units.
 * Determine the minimum cost of Diksha's gifts.
 */
/**
 * @solution_fortyFour
 */
function taumBday(b, w, bc, wc, z) {
	// Write your code here
	b = BigInt(b);
	w = BigInt(w);
	bc = BigInt(bc);
	wc = BigInt(wc);
	z = BigInt(z);

	if (bc > wc + z) return ((b + w) * wc + b * z).toString();
	else if (wc > bc + z) return ((b + w) * bc + w * z).toString();
	else return (b * bc + w * wc).toString();
}
console.log(taumBday(10, 10, 1, 1, 1));