/**
 * @problem_one
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */
/**
 * @solution_one
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const keys = {};

  for (let i = 0; i < nums.length; i++) {
    if (keys[target - nums[i]] !== undefined) {
      return [keys[target - nums[i]], i];
    }

    keys[nums[i]] = i;
  }
};
console.log({ twoSum: twoSum([3, 2, 4], 6) });

/**
 * @problem_two
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */
/**
 * @solution_two
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const trimmedString = s.trim();
  let count = 0;

  for (let i = trimmedString.length - 1; i >= 0; i--) {
    if (trimmedString[i] !== " ") count++;
    else return count;
  }

  return count;
};
console.log({ lengthOfLastWord: lengthOfLastWord('Hello World') });

/**
 * @problem_three
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */
/**
 * @solution_three
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);

  const length = merged.length;

  if (length % 2 === 0) return (merged[length / 2] + merged[(length / 2) - 1]) / 2;
  else return merged[(length - 1) / 2];
};
console.log({ findMedianSortedArrays: findMedianSortedArrays([1, 2], [3, 4]) });

/**
 * @problem_four
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */
/**
 * @solution_four
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let temp = 0, reverseNumber = 0;

  if (x > 0) {
    while (x > 0) {
      temp = x % 10;
      x = parseInt(x / 10);
      reverseNumber = reverseNumber * 10 + temp;
    }
  } else {
    x = -x;
    while (x > 0) {
      temp = x % 10;
      x = parseInt(x / 10);
      reverseNumber = reverseNumber * 10 + temp;
    }
    reverseNumber = -reverseNumber;
  }

  if (reverseNumber > BigInt(Math.pow(2, 31) - 1) || reverseNumber < BigInt(Math.pow(-2, 31))) return 0;
  return reverseNumber;
};
console.log({ reverse: reverse(-2147483648) });

/**
 * @problem_five
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */
/**
 * @solution_five
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry = 0) {
  if (l1 === null && l2 === null && carry === 0) return null;

  let a = 0, b = 0;

  if (l1 !== null) {
    a = l1.val;
    l1 = l1.next;
  }

  if (l2 !== null) {
    b = l2.val;
    l2 = l2.next;
  }

  let value = a + b + carry;

  carry = Math.floor(value / 10);
  value %= 10;

  const result = new ListNode(value, addTs(l1, l2, carry));

  return result;
};

/**
 * @problem_six
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 */
/**
 * @solution_six
 * @param {number} n
 * @return {boolean}
*/
var isPowerOfFour = function (n) {
  if (n <= 0) return false;

  if (n === 1) return true;

  if (n % 4 > 0) {
    return false;
  } else {
    n /= 4;
  }

  return isPowerOfFour(Math.floor(n));
};
console.log({ isPowerOfFour: isPowerOfFour(-2147483647) });

/**
 * @problem_seven
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 */
/**
 * @solution_seven
 * @param {number} n
 * @return {boolean}
*/
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};
console.log({ isPowerOfTwo: isPowerOfTwo(-2147483647) });

/**
 * @problem_eight
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 */
/**
 * @solution_eight
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  if (n === 1) return true;

  if (n % 3 > 0) {
    return false;
  } else {
    n /= 3;
  }

  return isPowerOfThree(Math.floor(n));
};
console.log({ isPowerOfThree: isPowerOfThree(-2147483647) });

/**
 * @problem_nine
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
 * That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const series = [0, 1];

  for (let i = 2; i <= n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  return n === 0 ? 0 : n === 1 ? 1 : series[series.length - 1];
};
console.log({ withLoop: fib(4) });

// with recursion
function fibRecursion(n) {
  return n < 2 ? n : fib(n - 2) + fib(n - 1);
};
console.log({ withRecursion: fibRecursion(4) });

/**
 * @problem_ten
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */
/**
 * @solution_ten
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (const character of ransomNote) {
    if (magazine.indexOf(character) !== -1) {
      magazine = magazine.replace(character, '');
    } else return false;
  }

  return true;
};
console.log({ canConstruct: canConstruct('baa', 'aab') });

/**
 * @problem_eleven
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 * The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
 * Return the quotient after dividing dividend by divisor.
 */
/**
 * @solution_eleven
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let quotient = parseInt(dividend / divisor);

  if (quotient > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  if (quotient <= Math.pow(-2, 31)) return Math.pow(-2, 31);

  return quotient;
};
console.log({ divide: divide(-2147483648, 1) });

/**
 * @problem_twelve You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.
 * Return true if and only if we can do this so that the resulting number is a power of two.
 */
/**
 * @solution_twelve
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  n = n.toString().split('').sort((a, b) => a - b).join('');
  let lengthOfNumber = n.length;
  let N, pow = 0;

  while (n) {
    N = (2 ** pow).toString();

    if (N.length === lengthOfNumber) if (N.split('').sort((a, b) => a - b).join('') === n) return true;

    if (N.length > lengthOfNumber) break;

    pow++;
  }

  return false;
};
console.log({ reorderedPowerOf2: reorderedPowerOf2(10) });

/**
 * @problem_thirteen Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
/**
 * @solution_thirteen
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (const num of nums) ans ^= num;
  return ans;
};
console.log({ singleNumber: singleNumber([2, 3, 3, 2, 1]) });

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  const referenceStr = strs[0];

  for (let i = 0; i < referenceStr.length; i++) {
    const char = referenceStr[i];

    for (let j = 1; j < strs.length; j++) {
      const string = strs[j];

      if (char !== string[i]) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
};
console.log({ longestCommonPrefix: longestCommonPrefix(["dog", "racecar", "car"]) });

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = -Infinity;
    } else {
      if (nums[j] === -Infinity) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
      }

      j++;
    }
  }

  return j;
};
console.log({ removeElement: removeElement([3, 2, 3, 2], 3) });

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (romanNumber) {
  const symbolValue = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let charIndex = 0, number = 0;

  while (charIndex < romanNumber.length) {
    if (symbolValue[romanNumber[charIndex]] < symbolValue[romanNumber[charIndex + 1]]) {
      number += symbolValue[romanNumber[charIndex + 1]] - symbolValue[romanNumber[charIndex]];
      charIndex++;
    } else {
      number += symbolValue[romanNumber[charIndex]];
    }

    charIndex++;
  }

  return number;
};
console.log({ romanToInt: romanToInt(10) });

/**
 * @problem_fourteen Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 * @param {number} n
 * @return {number}
 */
/**
 * @solution_fourteen
 */
var smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : n * 2;
};
console.log({ smallestEvenMultiple: smallestEvenMultiple(5) });

/**
 * @problem_fifteen You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num.
 * Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.
 * For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3.
 * Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
 * Return the minimum possible sum of new1 and new2.
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let numArray = num.toString().split('').sort();
  return parseInt(numArray[0]) + parseInt(numArray[numArray.length - 1]);
};
console.log({ minimumSum: minimumSum(2932) });

/**
 * @problem_sixteen
 * Write a function that checks if a given value is an instance of a given class or superclass.
 * For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
 * There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined
 */
/**
 * @solution_sixteen
 * @param {any} object
 * @param {any} classFunction
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== 'function')
    return false;
  return Object(obj) instanceof classFunction;
};
console.log({ checkIfInstanceOf: checkIfInstanceOf(5, Number) });

/**
 * @problem_seventeen
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */
/**
 * @solution_seventeen
 */
var createHelloWorld = function () {
  return () => "Hello World";
};

/**
 * @problem_eighteen
 * Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.
 */
/**
 * @solution_eighteen
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.parkingSpace = {
    current: [0, 0, 0],
    allowed: [big, medium, small]
  };
};

ParkingSystem.prototype.addCar = function (carType) {
  if (this.parkingSpace.current[carType - 1] < this.parkingSpace.allowed[carType - 1]) {
    this.parkingSpace.current[carType - 1] += 1;
    return true;
  } else {
    return false;
  }
};

/**
 * @problem_nineteen
 * Design a HashSet without using any built-in hash table libraries.
 * Implement MyHashSet class:
 * void add(key) Inserts the value key into the HashSet.
 * bool contains(key) Returns whether the value key exists in the HashSet or not.
 * void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 */
/**
 * @solution_nineteen
 */
var MyHashSet = function () {
  this.hashset = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.hashset.includes(key))
    this.hashset.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.hashset.includes(key)) {
    const index = this.hashset.indexOf(key);
    this.hashset.splice(index, 1);
  }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hashset.includes(key);
};

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitudes = [], totalAltitude = 0, maxAltitude = 0;

  for (let i = 0; i < gain.length + 1; i++) {
    if (i === 0) {
      totalAltitude += 0;
    } else {
      totalAltitude = totalAltitude + gain[i - 1];
    }

    altitudes.push(totalAltitude);
  }

  for (let i = 0; i < altitudes.length; i++) {
    if (maxAltitude <= altitudes[i]) {
      maxAltitude = altitudes[i];
    }
  }

  return maxAltitude;
};
console.log({ largestAltitude: largestAltitude([-5, 1, 5, 0, -7]) });

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const count = {}, occurrenceCount = new Set();

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const key in count) {
    if (!occurrenceCount.has(count[key])) {
      occurrenceCount.add(count[key]);
    }
    else {
      return false;
    }
  }

  return true;
};
console.log({ uniqueOccurrences: uniqueOccurrences([1, 2, 2, 1, 1, 3]) });

function findDuplicate(nums) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }

  for (let i = 1; i < nums.length; i++) {
    ans = ans ^ i;
  }

  return ans;
}
console.log({ findDuplicate: findDuplicate([5, 1, 2, 3, 4, 2]) });

function findInPeakIndexInMountainArray(arr) {
  let start = 0, end = arr.length - 1;

  let mid = start + parseInt((end - start) / 2);

  while (start < end) {
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }

    mid = start + parseInt((end - start) / 2);
  }

  return start;
}
console.log({ findInPeakIndexInMountainArray: findInPeakIndexInMountainArray([0, 10, 5, 2]) });

var sortPeople = function (names, heights) {
  for (let i = 0; i < heights.length; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < heights.length; j++) {
      if (heights[maxIndex] < heights[j]) maxIndex = j;
    }

    const temp = heights[i], tempName = names[i];
    heights[i] = heights[maxIndex];
    names[i] = names[maxIndex];
    heights[maxIndex] = temp;
    names[maxIndex] = tempName;
  }

  return names;
};
console.log({ answer: sortPeople(["IEO", "Sgizfdfrims", "QTASHKQ", "Vk", "RPJOFYZUBFSIYp", "EPCFFt", "VOYGWWNCf", "WSpmqvb"], [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]) });

var getPivot = function (arr) {
  let start = 0, end = arr.length - 1;

  while (start < end) {
    let mid = start + parseInt((end - start) / 2);

    (arr[mid] >= arr[0]) ? start = mid + 1 : end = mid;
  }

  return start;
};

var findTarget = function (arr, target, start, end) {
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    arr[mid] > target ? end = mid - 1 : start = mid + 1;
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivot = getPivot(nums, target);

  if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
    return findTarget(nums, target, pivot, nums.length - 1);
  } else {
    return findTarget(nums, target, 0, pivot - 1);
  }
};

var firstOccurrence = function (nums, target) {
  let start = 0, end = nums.length - 1, ans = -1;

  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);

    if (nums[mid] === target) {
      ans = mid;
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
  }

  return ans;
};

var lastOccurrence = function (nums, target) {
  let start = 0, end = nums.length - 1, ans = -1;

  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);

    if (nums[mid] === target) {
      ans = mid;
      start = mid + 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const firstIndex = firstOccurrence(nums, target);
  const lastIndex = lastOccurrence(nums, target);

  return [firstIndex, lastIndex];
};
console.log({ searchRange: searchRange([5, 7, 7, 8, 8, 10], 8) });

/**
 * @param {number} num
 * @returns {number}
 */
var integerValue = function (num) {
  let start = 0, end = num, integer = -1;

  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);

    const square = mid * mid;

    if (square === num) {
      return mid;
    }

    if (square < num) {
      integer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return integer;
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return integerValue(x);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => a - b)[nums.length - k];
};
console.log({ kthLargest: findKthLargest([3, 2, 1, 5, 6, 4], 2) });

/**
 * @param {array} operations 
 * @returns {number}
 */
function calPoints(operations) {
  const score = [];

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        const total = score[score.length - 1] + score[score.length - 2];
        score.push(total);
        break;
      case "D":
        score.push(score[score.length - 1] * 2);
        break;
      case "C":
        score.pop();
        break;
      default:
        score.push(+operations[i]);
    }
  }

  return score.length > 0 ? score.reduce((curr, next) => curr + next, 0) : 0;
};
console.log({ points: calPoints(["5", "2", "C", "D", "+"]) });

/**
 * @param {string} char 
 * @returns {string}
 */
function lowerCase(char) {
  if (char >= "a" && char <= "z") {
    return char;
  } else if (char >= "A" && char <= "Z") {
    return String.fromCharCode(char.charCodeAt(0) + 32);
  }

  return char;
}

/**
 * @param {string} s 
 * @returns {string}
 */
function toLowerCase(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    result.push(lowerCase(s[i]));
  }

  return result.join("");
};
console.log({ lowerCase: toLowerCase("Hello@WORLD") });

/**
 * @param {array} nums 
 * @returns {boolean}
 */
function isMonotonic(nums) {
  let start = 0, next = 1;

  while (next < nums.length) {
    if (nums[0] <= nums[nums.length - 1]) {
      if (nums[start] > nums[next]) return false;
    } else {
      if (nums[start] < nums[next]) return false;
    }
    start++;
    next++;
  }

  return true;
};
console.log({ isMonotonic: isMonotonic([1, 1, 0]) });

/**
 * 
 * @param {string} s 
 * @returns {boolean}
 */
function repeatedSubstringPattern(s) {
  const length = s.length;

  for (let i = 0; i <= length / 2; i++) {
    if (length % i === 0) {
      let pattern = "";

      for (let j = 0; j < length / i; j++) {
        pattern += s.substr(0, i);
      }

      if (pattern === s) return true;
    }
  }

  return false;
};
console.log({ canBeFormed: repeatedSubstringPattern("ababab") });

/**
 * @param {number} low 
 * @param {number} high 
 * @returns {number}
 */
function countOdds(low, high) {
  return low % 2 === 0 ? Math.round((high - low) / 2) : Math.floor((high - low) / 2) + 1;
};
console.log({ count: countOdds(0, 100) });

/**
 * @param {number[][]} mat 
 * @returns {num}
 */
function principalDiagonal(mat) {
  let sum = 0;

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (row === col) {
        sum += mat[row][col];
      }
    }
  }

  return sum;
}

/**
 * @param {number[][]} mat 
 * @returns {num}
 */
function secondaryDiagonal(mat) {
  let sum = 0;

  for (let row = 0; row < mat.length; row++) {
    for (let col = mat[0].length - 1; col >= 0; col--) {
      if (row !== col && Math.abs(row + col) === mat[0].length - 1) {
        sum += mat[row][col];
      }
    }
  }

  return sum;
}

/**
 * @param {number[][]} mat 
 * @returns {num}
 */
function diagonalSum(mat) {
  return principalDiagonal(mat) + secondaryDiagonal(mat);
};
console.log({ diagonalSum: diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]) });

/**
 * @param {number[]} salary 
 * @returns {number}
 */
function average(salary) {
  let averageSalary = 0, maxSalary = -Infinity, minSalary = Infinity;

  for (let i = 0; i < salary.length; i++) {
    if (maxSalary <= salary[i]) {
      maxSalary = salary[i];
    }

    if (minSalary >= salary[i]) {
      minSalary = salary[i];
    }

    averageSalary += salary[i];
  }

  return Number(((averageSalary - minSalary - maxSalary) / (salary.length - 2)).toFixed(5));
};
console.log({ averageSalary: average([48000, 59000, 99000, 13000, 78000, 45000, 31000, 17000, 39000, 37000, 93000, 77000, 33000, 28000, 4000, 54000, 67000, 6000, 1000, 11000]) });

/**
 * @param {Function} fn
 * @returns {number}
 */
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}
const memoizedSum = memoize((a, b) => a + b);
console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5

/**
 * @param {number[]} numbers 
 * @returns {number}
 */
function countNegativeNumbers(numbers) {
  let count = 0, start = 0, end = numbers.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (numbers[mid] >= 0) {
      start = mid + 1;
    } else {
      end = mid - 1;
      count = numbers.length - mid;
    }
  }

  return count;
}

/**
 * @param {number[][]} grid 
 * @returns {number}
 */
function countNegatives(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    count += countNegativeNumbers(grid[i]);
  }

  return count;
};
console.log({ negativeNumbers: countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]) });

/**
 * @param {string} s 
 * @returns {string}
 */
function reverseWords(s) {
  const string = s.split(" ");

  let reversedString = "", index = string.length - 1;

  while (index >= 0) {
    if (string[index]) reversedString += `${string[index]} `;
    index--;
  }

  return reversedString.trim();
};
console.log({ reverseWords: reverseWords("the sky is blue") });

/**
 * @param {string} s 
 * @param {number} k 
 * @returns {string[]}
 */
function createGroups(s, k) {
  const groups = [];
  let i = 0;

  while (i < s.length) {
    let j = 0, charString = '';

    while (j < 2 * k) {
      if (s[j + (i * 2 * k)] !== undefined) {
        charString += s[j + (i * 2 * k)];
      }

      j++;
    }

    if (charString) groups.push(charString);
    i++;
  }

  return groups;
}

/**
 * @param {string} s 
 * @param {number} k 
 * @returns {string}
 */
function partiallyReverseLetters(charGroup, k) {
  let result = '';

  for (let i = 0; i < charGroup.length; i++) {
    const chars = charGroup[i].split('');
    let start = 0, end = k - 1;

    while (start <= end) {
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start++;
      end--;
    }

    result += chars.join('');
  }

  return result;
}

/**
 * @param {string} s 
 * @param {number} k 
 * @returns {string}
 */
function reverseWordsVariantTwo(s, k) {
  const charGroups = createGroups(s, k);
  return partiallyReverseLetters(charGroups, k);
};
console.log({ reverseWordsVariantTwo: reverseWordsVariantTwo("abcdefg", 2) });

/**
 * @param {string} s 
 * @returns {string}
 */
function reverseWordsVariantThree(s) {
  let reversedString = s.split(' '), result = "";

  for (let i = 0; i < reversedString.length; i++) {
    const chars = reversedString[i].split('');
    let start = 0, end = chars.length;

    while (start <= end) {
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start++;
      end--;
    }

    result += `${chars.join("")} `;
  }

  return result.trim();
};
console.log({ reverseWordsVariantThree: reverseWordsVariantThree("Let's take LeetCode contest") });

/**
 * @param {string} s 
 * @param {string} part 
 * @returns {string}
 */
function removeOccurrences(s, part) {
  while (s.length !== 0 && s.includes(part)) {
    s = s.replace(part, "");
  }

  return s;
};
console.log({ removed: removeOccurrences("daabcbaabcbc", "abc") });

/**
 * @param {number[]} a 
 * @param {number[]} b 
 * @returns {boolean}
 */
function checkEqual(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

/**
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @returns {boolean}
 */
function checkInclusion(s1, s2) {
  const count1 = new Array(26).fill(0);

  // character count array
  for (let i = 0; i < s1.length; i++) {
    const index = s1[i].charCodeAt(0) - 97;
    count1[index]++;
  }

  // traverse s2 string in window of size s1 length and compare
  let i = 0;
  const windowSize = s1.length;
  const count2 = new Array(26).fill(0);

  //first window
  while (i < windowSize && i < s2.length) {
    const index = s2[i].charCodeAt(0) - 97;
    count2[index]++;
    i++;
  }

  if (checkEqual(count1, count2)) return true;

  //next windows
  while (i < s2.length) {
    const newCharIndex = s2[i].charCodeAt(0) - 97;
    count2[newCharIndex]++;

    const oldCharIndex = s2[i - windowSize].charCodeAt(0) - 97;
    count2[oldCharIndex]--;

    i++;

    if (checkEqual(count1, count2)) return true;
  }

  return false;
};
console.log({ checkInclusion: checkInclusion("ab", "eidbaooo") });

/**
 * @param {number[][]} matrix 
 * @param {number} target 
 * @returns {boolean}
 */
function searchMatrix(matrix, target) {
  let row = matrix.length, col = matrix[0].length, start = 0, end = row * col - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (matrix[Math.floor(mid / col)][mid % col] === target) {
      return true;
    }

    matrix[Math.floor(mid / col)][mid % col] > target ? end = mid - 1 : start = mid + 1;
  }

  return false;
};
console.log({ isPresent: searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3) });

/**
 * @param {number[][]} matrix 
 * @param {number} target 
 * @returns {boolean}
 */
function searchMatrixLevelTwo(matrix, target) {
  let rows = matrix.length, cols = matrix[0].length, rowIndex = 0, colIndex = cols - 1;

  while (rowIndex < rows && colIndex >= 0) {
    let element = matrix[rowIndex][colIndex];

    if (element === target) {
      return true;
    }

    element < target ? rowIndex++ : colIndex--;
  }

  return false;
};
console.log({ isPresentInLevelTwo: searchMatrixLevelTwo([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5) });

/**
 * @param {string[]} chars 
 * @returns {number}
 */
function compress(chars) {
  let i = 0, ansIndex = 0;
  const length = chars.length;

  while (i < length) {
    let j = i + 1;

    while (j < length && chars[i] === chars[j]) {
      j++;
    }

    chars[ansIndex++] = chars[i];

    const count = j - i;

    if (count > 1) {
      const cnt = count.toString();

      for (let i = 0; i < cnt.length; i++) {
        chars[ansIndex++] = cnt[i];
      }
    }

    i = j;
  }

  return ansIndex;
};
console.log({ compressedString: compress(["a", "a", "b", "b", "c", "c", "c"]) });

/**
 * @param {string} s 
 * @param {string} goal 
 * @returns {boolean}
 */
function rotateString(s, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (s[0] === goal[i]) {
      const firstPart = goal.substr(0, i);
      const secondPart = goal.substr(i);
      const lookAlike = `${secondPart}${firstPart}`;

      if (lookAlike === s) return true;
    }
  }

  return false;
};
console.log({ isRotated: rotateString("abcde", "cdeab") });

/**
 * @param {number[][]} matrix 
 * @returns {number[][]}
 */
function rotate(matrix) {
  const rotatedMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    rotatedMatrix[col] = [];

    for (let row = matrix.length - 1; row >= 0; row--) {
      rotatedMatrix[col].push(matrix[row][col]);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[row][col] = rotatedMatrix[row][col];
    }
  }

  return matrix;
};
console.log({ matrixRotated: rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) });

/**
 * @param {number[][]} matrix 
 * @returns {number[]}
 */
function spiralOrder(matrix) {
  let rows = matrix.length, cols = matrix[0].length;

  let count = 0, total = rows * cols;

  let startingRow = 0, startingCol = 0, endingRow = rows - 1, endingCol = cols - 1;

  const spiralMatrix = [];

  while (count < total) {
    for (let index = startingCol; count < total && index <= endingCol; index++) {
      spiralMatrix.push(matrix[startingRow][index]);
      count++;
    }
    startingRow++;

    for (let index = startingRow; count < total && index <= endingRow; index++) {
      spiralMatrix.push(matrix[index][endingCol]);
      count++;
    }
    endingCol--;

    for (let index = endingCol; count < total && index >= startingCol; index--) {
      spiralMatrix.push(matrix[endingRow][index]);
      count++;
    }
    endingRow--;

    for (let index = endingRow; count < total && index >= startingRow; index--) {
      spiralMatrix.push(matrix[index][startingCol]);
      count++;
    }
    startingCol++;
  }

  return spiralMatrix;
}
console.log({ spiralPattern: spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) });

class NumArray {
  constructor(nums) {
    this.prefixSum = [0];

    for (let i = 0; i < nums.length; i++) {
      this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
    }
  }

  sumRange(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
}

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function largestPerimeter(nums) {
  for (let i = nums.sort((a, b) => a - b).length - 1; i >= 2; i--) {
    const firstSide = nums[i], secondSide = nums[i - 1], thirdSide = nums[i - 2];

    if (firstSide < secondSide + thirdSide) {
      return firstSide + secondSide + thirdSide;
    }
  }

  return 0;
};
console.log({ largestPerimeter: largestPerimeter([2, 1, 2]) });

/**
 * @param {Function} fn 
 * @param {number} t 
 * @returns 
 */
function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((delayResolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeoutId);
          delayResolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  };
}

/**
 * @param {number} numRows 
 * @returns {number[][]}
 */
function generate(numRows) {
  const result = [];

  result.push([1]);

  if (numRows === 1) return result;

  result.push([1, 1]);

  if (numRows === 2) return result;

  for (let i = 2; i < numRows; i++) {
    result[i] = [1];

    for (let j = 1; j < i; j++) {
      result[i].push(result[i - 1][j] + result[i - 1][j - 1]);
    }

    result[i].push(1);
  }

  return result;
};
console.log({ pascalPattern: generate(5) });

class TimeLimitedCache {
  constructor() {
    this.cache = {};
  }

  set(key, value, duration) {
    if (this.cache[key] && this.cache[key].timer) {
      clearTimeout(this.cache[key].timer);

      this.cache[key] = {
        value,
        timer: setTimeout(() => delete this.cache[key], duration),
      };

      return true;
    } else {
      this.cache[key] = {
        value,
        timer: setTimeout(() => delete this.cache[key], duration),
      };

      return false;
    }
  }

  get(key) {
    return this.cache[key] && this.cache[key].value
      ? this.cache[key].value
      : -1;
  }

  count() {
    return Object.keys(this.cache).length;
  }
}

/**
 * @param {number} rowIndex 
 * @returns {number[]}
 */
function getRow(rowIndex) {
  const result = [[1], [1, 1]];

  for (let i = 2; i <= rowIndex; i++) {
    result[i] = [1];

    for (let j = 1; j < i; j++) {
      result[i].push(result[i - 1][j] + result[i - 1][j - 1]);
    }

    result[i].push(1);
  }

  return result[rowIndex];
};

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function commonFactors(a, b) {
  let numberOfFactors = 0;
  const minNum = Math.min(a, b);

  for (let number = 0; number <= minNum; number++) {
    if (a % number == 0 && b % number === 0) numberOfFactors++;
  }

  return numberOfFactors;
};
console.log({ numberOfFactors: commonFactors(12, 6) });

/**
 * @param {number} arrivalTime 
 * @param {number} delayedTime 
 * @returns {number}
 */
function findDelayedArrivalTime(arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};
console.log({ updatedTime: findDelayedArrivalTime(5, 24) });

/**
 * @param {number[]} nums1 
 * @param {number} m 
 * @param {number[]} nums2 
 * @param {number} n
 */
function combine(nums1, m, nums2, n) {
  let firstIndex = m - 1;
  let secondIndex = n - 1;
  let totalLength = m + n - 1;

  while (secondIndex >= 0) {
    if (firstIndex >= 0 && nums1[firstIndex] > nums2[secondIndex]) {
      nums1[totalLength--] = nums1[firstIndex--];
    } else {
      nums1[totalLength--] = nums2[secondIndex--];
    }
  }

  console.log({ nums1 });
};
combine([3], 1, [9], 1);

/**
 * @param {string} s 
 * @returns {number}
 */
function minDeletions(s) {
  const charFrequency = {};
  const frequency = [];

  let deletions = 0;

  for (let i = 0; i < s.length; i++) {
    charFrequency[s[i]] = (charFrequency[s[i]] || 0) + 1;
  }

  for (const value in charFrequency) {
    let count = charFrequency[value];

    while (frequency.includes(count)) {
      count--;
      deletions++;
    }

    if (count > 0) {
      frequency.push(count);
    }
  }

  return deletions;
}
console.log({ deletions: minDeletions("aaabbcdddeef") });

/**
 * @param {number[]} nums 
 * @param {number[]} set 
 * @param {number} index 
 * @param {number[][]} subSet 
 * @returns {void}
 */
function getSubsets(nums, set, index, subSet) {
  if (index >= nums.length) {
    subSet.push([...set]);
    return;
  }

  getSubsets(nums, set, index + 1, subSet);
  set.push(nums[index]);

  getSubsets(nums, set, index + 1, subSet);
  set.pop();
}

/**
 * @param {number[]} nums 
 * @returns {number[][]}
 */
function subsets(nums) {
  const subSet = [], set = [];
  let index = 0;

  getSubsets(nums, set, index, subSet);

  return subSet;
};
console.log({ subSets: subsets([1, 2, 3]) });

/**
 * @param {string} digits 
 * @param {string[]} combination 
 * @param {number} index 
 * @param {string[]} combinations 
 * @param {string[]} mapping 
 * @returns {void}
 */
function createCombination(digits, combination, index, combinations, mapping) {
  if (index >= digits.length) {
    combinations.push(combination.join(""));
    return;
  }

  const number = parseInt(digits[index]);
  const value = mapping[number];

  for (let i = 0; i < value.length; i++) {
    combination.push(value[i]);
    createCombination(digits, combination, index + 1, combinations, mapping);
    combination.pop();
  }
}

/**
 * @param {string} digits 
 * @returns {string[]}
 */
function letterCombinations(digits) {
  const combinations = [];
  if (digits.length == 0) return combinations;

  const mapping = [null, null, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let index = 0, combination = [];

  createCombination(digits, combination, index, combinations, mapping);

  return combinations;
};
console.log({ letterComb: letterCombinations('23') });

/**
 * @param {Array<number>} nums 
 * @param {Array<Array<number>>} permutations 
 * @param {number} index 
 * @returns {void}
 */
function createPermutation(nums, permutations, index) {
  if (index >= nums.length) {
    permutations.push([...nums]);
    return;
  }

  for (let swapIndex = index; swapIndex < nums.length; swapIndex++) {
    [nums[index], nums[swapIndex]] = [nums[swapIndex], nums[index]];

    createPermutation(nums, permutations, index + 1);

    [nums[index], nums[swapIndex]] = [nums[swapIndex], nums[index]];
  }
}

/**
 * @param {Array<number>} nums 
 * @returns {Array<Array<number>>}
 */
function permute(nums) {
  const permutations = [];
  const index = 0;

  createPermutation(nums, permutations, index);

  return permutations;
};
console.log({ permutations: permute([1, 2, 3]) });

/**
 * @param {string} command 
 * @returns {string}
 */
function interpret(command) {
  const map = { '()': 'o', '(al)': 'al' };

  return command.replace(/\(\)|\(al\)/g, a => map[a]);
};
console.log({ parsed: interpret("G()(al)") });

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number}
 */
function countPairs(nums, target) {
  let count = 0, left = 0, right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    }
    else {
      right--;
    }
  }

  return count;
};
console.log({ pairs: countPairs([-1, 1, 2, 3, 1], 2) });

/**
 * @param {number[]} hours 
 * @param {number} target 
 * @returns {number}
 */
function numberOfEmployeesWhoMetTarget(hours, target) {
  return hours.filter(hour => hour >= target).length;
};
console.log({ count: numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2) });

/**
 * @param {number} num 
 * @param {number} t 
 * @returns {number}
 */
function theMaximumAchievableX(num, t) {
  return num + 2 * t;
};
console.log({ maxNum: theMaximumAchievableX(4, 1) });

/**
 * @param {number} celsius 
 * @returns {number}
 */
function convertToKelvin(celsius) {
  return celsius + 273.15;
}

/**
 * @param {number} celsius 
 * @returns {number}
 */
function convertToFahrenheit(celsius) {
  return 1.8 * (celsius) + 32.00;
}

/**
 * @param {number} celsius 
 * @returns {number[]}
 */
function convertTemperature(celsius) {
  return [convertToKelvin(celsius), convertToFahrenheit(celsius)];
};
console.log({ convertTemperature: convertTemperature(36.50) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function findDuplicateOnceAgain(nums) {
  const frequency = {};

  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > 1) {
      return num;
    }
  }

  return 0;
}
console.log({ duplicate: findDuplicateOnceAgain([1, 2, 3, 4, 5, 2]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function missingNumber(nums) {
  let numSum = (nums.length * (nums.length + 1)) / 2;

  for (let i = 0; i < nums.length; i++) {
    numSum -= nums[i];
  }

  return numSum;
};
console.log({ missingNumber: missingNumber([3, 0, 2, 5, 1]) });

/**
 * @param {number[][]} mat 
 * @param {number} k 
 * @returns {number[]}
 */
function kWeakestRows(mat, k) {
  const rows = [];

  for (let row = 0; row < mat.length; row++) {
    let numberOfSoldiers = 0;

    for (let col = 0; col < mat[row].length; col++) {
      if (mat[row][col]) numberOfSoldiers++;
    }

    rows.push([row, numberOfSoldiers]);
  }

  return rows.sort((a, b) => a[1] - b[1]).splice(0, k).map(count => count[0]);
};
console.log({ weakestRow: kWeakestRows([[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, , 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]], 3) });

/**
 * @param {number} num 
 * @returns {number}
 */
function addDigits(num) {
  while (Math.floor(num / 10) !== 0) {
    let sum = 0;

    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }

  return num;
};
console.log({ digitSum: addDigits(38) });

/**
 * @param {number[][]} coordinates 
 * @returns {boolean}
 */
function checkStraightLine(coordinates) {
  if (coordinates.length === 2) return true;

  const dx = coordinates[1][0] - coordinates[0][0];
  const dy = coordinates[1][1] - coordinates[0][1];

  for (let point = 2; point < coordinates.length; point++) {
    const currentDx = coordinates[point][0] - coordinates[0][0];
    const currentDy = coordinates[point][1] - coordinates[0][1];

    const isSame = dx * currentDy === dy * currentDx;

    if (!isSame) return false;
  }

  return true;
};
console.log({ isStraightLine: checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]) });

/**
 * @param {number} n 
 * @returns {boolean}
 */
function isUgly(n) {
  if (n < 1) return false;

  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;

  return n === 1;
};
console.log({ isUgly: isUgly(6) });

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
function isSubsequence(s, t) {
  let counter = 0;

  for (let index = 0; index < t.length; index++) {
    if (s[counter] === t[index]) counter++;
  }

  return counter === s.length;
};
console.log({ isSubsequence: isSubsequence("abc", "ahbgdc") });

class MyLinkedList {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  /**
   * @param {number} index 
   * @returns {LinkedListNode | null}
   */
  getNodeAtIndex(index) {
    if (index > -1 && index < this.len) {
      let node = this.head;
      let currentIndex = 0;
      while (currentIndex < index) {
        node = node.next;
        currentIndex++;
      }
      return node;
    }
    return null;
  }

  /**
   * @param {number} index 
   * @returns {number}
   */
  get(index) {
    const node = this.getNodeAtIndex(index);
    return node === null ? -1 : node.val;
  }

  /**
   * @param {number} val 
   * @returns {void}
   */
  addAtHead(val) {
    const newNode = { val, next: this.head };
    this.head = newNode;
    this.len++;
  }

  /**
   * @param {number} val 
   * @returns {void}
   */
  addAtTail(val) {
    const tailNode = this.getNodeAtIndex(this.len - 1);
    if (!tailNode) {
      this.addAtHead(val);
    } else {
      tailNode.next = { val, next: null };
      this.len++;
    }
  }

  /**
   * @param {number} index 
   * @param {number} val 
   * @returns {void}
   */
  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
    } else if (index > 0 && index <= this.len) {
      const prevNode = this.getNodeAtIndex(index - 1);
      const nextNode = prevNode.next;
      prevNode.next = { val, next: nextNode };
      this.len++;
    }
  }

  /**
   * @param {number} val 
   * @returns {void}
   */
  deleteAtIndex(index) {
    if (index > -1 && index < this.len) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        const prevNode = this.getNodeAtIndex(index - 1);
        prevNode.next = prevNode.next.next;
      }
      this.len--;
    }
  }
}

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode | null} list1 
 * @param {ListNode | null} list2 
 * @returns {ListNode | null}
 */
function mergeTwoLists(list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  const mergedList = new ListNode();
  let current = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 ?? list2;

  return mergedList.next;
};

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function reverseList(head) {
  let previous = null, current = head;

  while (current !== null) {
    previous = new ListNode(current.val, previous);
    current = current.next;
  }

  return previous;
};

/**
 * @param {ListNode | null} head 
 * @param {number} left 
 * @param {number} right 
 * @returns {ListNode | null}
 */
function reverseBetween(head, left, right) {
  let currNode = head, start = head, counter = 1;

  while (counter < left) {
    start = currNode;
    currNode = currNode.next;
    counter++;
  }

  let tail = currNode, prev = null;

  while (counter >= left && counter <= right) {
    const next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
    counter++;
  }

  start.next = prev;
  tail.next = currNode;

  return left > 1 ? head : prev;
};

/**
 * @param {ListNode | null} head 
 * @returns {number}
 */
function getLength(head) {
  let length = 0;

  while (head !== null) {
    length++;
    head = head.next;
  }

  return length;
}

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function middleNode(head) {
  const listLength = Math.floor(getLength(head) / 2);
  let count = 0;

  while (count < listLength) {
    head = head.next;
    count++;
  }

  return head;
};

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function deleteDuplicates(head) {
  let node = head;

  while (node) {
    if (node.next && node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
};

/**
 * @param {ListNode | null} head 
 * @returns {boolean}
 */
function isPalindrome(head) {
  let reversedList = reverseList(head);

  while (reversedList !== null && head !== null) {
    if (reversedList.val !== head.val) {
      return false;
    }

    reversedList = reversedList.next;
    head = head.next;
  }

  return true;
};

/**
 * @param {ListNode | null} head 
 * @returns {boolean}
 */
function hasCycle(head) {
  let slow = head, fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;

    if (slow && fast && slow === fast) return true;
  }

  return false;
};

/**
 * @param {ListNode | null} head 
 * @param {number} val 
 * @returns {ListNode | null}
 */
function removeElements(head, val) {
  if (head === null) return head;

  if (head.val === val) {
    return removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);
  }

  return head;
};

/**
 * @param {ListNode | null} head
 * @returns {number}
 */
function getDecimalValue(head) {
  let num = 0;

  while (head) {
    num = num << 1;
    num += head.val;
    head = head.next;
  }

  return num;
};

/**
 * @param {ListNode | null} node 
 */
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

/**
 * @param {Node | null} head 
 * @returns {Node | null}
 */
function copyRandomList(head) {
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = new Node(current.val);
    current.next.next = temp;
    current = temp;
  }

  current = head;

  while (current) {
    if (current.next) {
      current.next.random = current.random ? current.random.next : current.random;
    }
    current = current.next.next;
  }

  let originalHead = head, clonedHead = head?.next;
  let temp = clonedHead;

  while (originalHead && clonedHead) {
    originalHead.next = originalHead.next.next;

    if (clonedHead.next)
      clonedHead.next = clonedHead.next.next;

    originalHead = originalHead.next;
    clonedHead = clonedHead.next;
  }

  return temp;
};

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function findMid(head) {
  let fast = head, slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next?.next;
    slow = slow.next;
  }

  return slow;
};

/**
 * @param {ListNode | null} list1 
 * @param {ListNode | null} list2 
 * @returns {ListNode | null}
 */
function merge(list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  const mergedList = new ListNode();
  let current = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 ?? list2;

  return mergedList.next;
};

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function sortList(head) {
  if (head === null || head.next === null) return head;

  let mid = findMid(head);

  const right = sortList(mid.next);
  mid.next = null;
  const left = sortList(head);

  return merge(left, right);
};

class MyHashMap {
  constructor() {
    this.buckets = new Array(this.bucketsNumber).fill(null);
  }

  put(key, value) {
    const bucketIndex = this.getBucketIndex(key);
    const bucket = this.buckets[bucketIndex];

    // Check if the key already exists and update its value in case it does.
    let node = bucket;
    while (node) {
      if (node.key === key) {
        node.value = value;
        return;
      }

      node = node.next;
    }

    // Otherwise just append the value to the beginning of the list.
    this.buckets[bucketIndex] = { next: bucket, key, value };
  }

  get(key) {
    const bucketIndex = this.getBucketIndex(key);
    const bucket = this.buckets[bucketIndex];

    let node = bucket;
    while (node) {
      if (node.key === key) {
        return node.value;
      }

      node = node.next;
    }

    return -1;
  }

  remove(key) {
    const bucketIndex = this.getBucketIndex(key);
    const bucket = this.buckets[bucketIndex];

    if (!bucket) {
      return;
    }

    if (bucket.key === key) {
      this.buckets[bucketIndex] = bucket.next;
    } else {
      let node = bucket.next;
      let prev = bucket;

      while (node) {
        if (node.key === key) {
          prev.next = node.next;
          return;
        }

        prev = prev.next;
        node = node.next;
      }
    }
  }

  getBucketIndex(key) {
    return key % this.bucketsNumber;
  };
}

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {string}
 */
function findTheDifference(s, t) {
  const tChars = {};

  for (const char of t) {
    tChars[char] = (tChars[char] || 0) + 1;
  }

  for (const char of s) {
    if (tChars[char]) tChars[char]--;
  }

  return Object.keys(tChars).find(val => tChars[val] > 0);
};
console.log({ difference: findTheDifference("abcd", "abcde") });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function sortArrayByParity(nums) {
  let insertPointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[insertPointer], nums[i]] = [nums[i], nums[insertPointer]];
      insertPointer++;
    }
  }

  return nums;
};
console.log({ sort: sortArrayByParity([3, 1, 2, 4]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function numIdenticalPairs(nums) {
  let goodPair = 0;
  const numCount = {};

  for (const num of nums) {
    if (numCount[num]) {
      goodPair += numCount[num];
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }
  }

  return goodPair;
};
console.log({ numIdenticalPairs: numIdenticalPairs([1, 2, 3, 1, 1, 3]) });

/**
 * @param {string} order 
 * @param {string} s 
 * @returns {string}
 */
function customSortString(order, s) {
  const charCount = {}, chars = [];

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of order) {
    while (charCount[char]-- > 0) chars.push(char);
  }

  for (const char in charCount) {
    while (charCount[char]-- > 0) chars.push(char);
  }

  return chars.join("");
}
console.log({ customSortString: customSortString("cba", "abcd") });

/**
 * @param {TreeNode | null} node 
 * @returns {TreeNode | null}
 */
function minVal(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}

/**
 * @param {TreeNode | null} root 
 * @param {number} key 
 * @returns {TreeNode | null}
 */
function deleteNodeInBST(root, key) {
  if (!root) return null;
  if (root.val > key) root.left = deleteNodeInBST(root.left, key);
  if (root.val < key) root.right = deleteNodeInBST(root.right, key);

  if (root.val === key) {
    if (!root.left && !root.right) return null;

    if (!root.left) return root.right;
    else if (!root.right) return root.left;
    else {
      const minValueNode = minVal(root.right);
      minValueNode.left = root.left;
      return root.right;
    }
  }

  return root;
}

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function removeZeroSumSublists(head) {
  const front = new ListNode(0, head);
  let start = front;

  while (start) {
    let prefixSum = 0, end = start.next;

    while (end) {
      prefixSum += end.val;
      if (prefixSum === 0) start.next = end.next;
      end = end.next;
    }

    start = start.next;
  }

  return front.next;
};

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function majorityElement(nums) {
  const elementCount = {};

  for (let i = 0; i < nums.length; i++) {
    elementCount[nums[i]] = (elementCount[nums[i]] || 0) + 1;

    if (elementCount[nums[i]] >= nums.length / 2) return nums[i];
  }
};
console.log({ majorityElement: majorityElement([3, 2, 3]) });

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function majorityElementVariantTwo(nums) {
  const elementCount = {}, elementFrequency = [], length = nums.length;


  for (let i = 0; i < length; i++) {
    elementCount[nums[i]] = (elementCount[nums[i]] || 0) + 1;


    if (elementCount[nums[i]] > length / 3 && !elementFrequency.includes(nums[i])) {
      elementFrequency.push(nums[i]);
    }
  }


  return elementFrequency;
};
console.log({ majorityElementVariantTwo: majorityElementVariantTwo([3, 2, 3]) });

/**
 * @param {TreeNode | null} root 
 * @param {number} min 
 * @param {number} max 
 * @returns {boolean}
 */
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  const isValid = min < root.val && root.val < max;
  if (!isValid) return false;

  const left = isValidBST(root.left, min, root.val);
  const right = isValidBST(root.right, root.val, max);

  return left && right;
};

/**
 * @param {number} n 
 * @returns {number}
 */
function pivotInteger(n) {
  let leftSum = 0, rightSum = 0, left = 1, right = n;

  while (left < right) {
    if (leftSum <= rightSum) leftSum += left++;
    else rightSum += right--;
  }

  return leftSum === rightSum ? left : -1;
};
console.log({ pivotInteger: pivotInteger(8) });

/**
 * @param {number[][]} intervals 
 * @param {number[]} newInterval 
 * @returns {number[][]}
 */
function insert(intervals, newInterval) {
  const updatedIntervals = [];
  let idx = 0;

  while (idx < intervals.length && intervals[idx][1] < newInterval[0]) {
    updatedIntervals.push(intervals[idx]);
    idx++;
  }

  while (idx < intervals.length && newInterval[1] >= intervals[idx][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[idx][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[idx][1]);
    idx++;
  }
  updatedIntervals.push(newInterval);

  while (idx < intervals.length) {
    updatedIntervals.push(intervals[idx]);
    idx++;
  }

  return updatedIntervals;
};
console.log({ insert: insert([[1, 3], [6, 9]], [2, 5]) });

/**
 * @param {number} n 
 * @returns {number} 
 */
function integerBreak(n) {
  if (n < 4) return n - 1;

  const threes = Math.floor(n / 3), remainder = n % 3;

  if (remainder === 1) return 3 ** (threes - 1) * 4;
  if (remainder === 2) return 3 ** threes * 2;

  return 3 ** threes;
};
console.log({ maxProduct: integerBreak(3) });

/**
 * @param {number[]} startedBlooming 
 * @param {number} time 
 * @returns {number}
 */
function startCount(startedBlooming, time) {
  let start = 0, end = startedBlooming.length;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (startedBlooming[mid] <= time) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

/**
 * @param {number[]} finishedBlooming 
 * @param {number} time 
 * @returns {number}
 */
function endCount(finishedBlooming, time) {
  let start = 0, end = finishedBlooming.length;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (finishedBlooming[mid] < time) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

/**
 * @param {number[][]} flowers 
 * @param {number[]} people 
 * @returns {number[]}
 */
function fullBloomFlowers(flowers, people) {
  const startedBlooming = [], finishedBlooming = [];

  for (const flower of flowers) {
    startedBlooming.push(flower[0]);
    finishedBlooming.push(flower[1]);
  }

  startedBlooming.sort((a, b) => a - b);
  finishedBlooming.sort((a, b) => a - b);

  return people.map(time => startCount(startedBlooming, time) - endCount(finishedBlooming, time));
};
console.log({ fullBloomFlowers: fullBloomFlowers([[1, 6], [3, 7], [9, 12], [4, 13]], [2, 3, 7, 11]) });

class MountainArray {
  get(index) { }
  length() { }
};

/**
 * @param {MountainArray} arr 
 * @returns {number}
 */
function getPeakIndex(arr) {
  let start = 1, end = arr.length() - 2;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr.get(mid) > arr.get(mid + 1)) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

/**
 * @param {MountainArray} arr 
 * @param {number} endIndex 
 * @param {number} target 
 * @returns {number}
 */
function getMinIndex(arr, endIndex, target) {
  let start = 0, end = endIndex;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr.get(mid) === target) return mid;

    arr.get(mid) > target ? (end = mid - 1) : (start = mid + 1);
  }

  return -1;
}

/**
 * @param {MountainArray} arr 
 * @param {number} startIndex 
 * @param {number} target 
 * @returns {number}
 */
function getMaxIndex(arr, startIndex, target) {
  let start = startIndex, end = arr.length() - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr.get(mid) === target) return mid;

    arr.get(mid) < target ? (end = mid - 1) : (start = mid + 1);
  }

  return -1;
}

/**
 * @param {number} target 
 * @param {MountainArray} mountainArr 
 * @returns {number}
 */
function findInMountainArray(target, mountainArr) {
  const peakIndex = getPeakIndex(mountainArr);

  const minIndex = getMinIndex(mountainArr, peakIndex, target);

  if (minIndex === -1) return getMaxIndex(mountainArr, peakIndex, target);
  return minIndex;
};

/**
 * @param {number[]} cost 
 * @returns {number}
 */
function minCostClimbingStairs(cost) {
  for (let index = 2; index < cost.length; index++) {
    cost[index] += Math.min(cost[index - 1], cost[index - 2]);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};
console.log({ minCostClimbingStairs: minCostClimbingStairs([10, 15, 20]) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function findDuplicates(nums) {
  const count = {}, duplicates = [];

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] === 2) duplicates.push(num);
  }

  return duplicates;
};
console.log({ findDuplicates: findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]) });

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
function backspaceCompare(s, t) {
  let firstString = [], secondString = [];

  for (let index = 0; index < s.length; index++) {
    s[index] !== "#" ? firstString.push(s[index]) : firstString.pop();
  }

  for (let index = 0; index < t.length; index++) {
    t[index] !== "#" ? secondString.push(t[index]) : secondString.pop();
  }

  return firstString.join("") === secondString.join("");
};
console.log({ backspaceCompare: backspaceCompare("ab#c", "ad#c") });

/**
 * @param {() => Promise<T>[]} functions 
 * @returns {Promise<T[]>}
 */
async function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const res = new Array(functions.length).fill(null);

    let resolvedCount = 0;

    functions.forEach(async (fn, idx) => {
      try {
        const subResult = await fn();
        res[idx] = subResult;
        resolvedCount++;

        if (resolvedCount === functions.length) resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  });
};
promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))]).then(res => console.log({ res }));

/**
 * @param {number[]} pref 
 * @returns {number[]}
 */
function findArray(pref) {
  const length = pref.length;

  for (let i = length - 1; i > 0; i--) {
    pref[i] ^= pref[i - 1];
  }

  return pref;
};
console.log({ prefixXOR: findArray([5, 2, 0, 3, 1]) });

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.length ? this.nums.reduce((curr, next) => curr + next) : 0;
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
};

/**
 * @param {number[]} target 
 * @param {number} n 
 * @returns {string[]} 
 */
function buildArray(target, n) {
  const operations = [];
  let targetIndex = 0;

  for (let index = 1; index <= n; index++) {
    if (target[targetIndex] === index) {
      operations.push("Push");
      targetIndex++;
    } else {
      operations.push("Push", "Pop");
    }

    if (targetIndex === target.length) break;
  }

  return operations;
};
console.log({ arrayOperations: buildArray([1, 2], 4) });

/**
 * @param {string} s 
 * @returns {boolean}
 */
function isValid(s) {
  const parenthesesStack = [];

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(" || s[index] === "{" || s[index] === "[") {
      parenthesesStack.push(s[index]);
    } else if (s[index] === ")" && (parenthesesStack[parenthesesStack.length - 1] === "(")) {
      parenthesesStack.pop();
    } else if (s[index] === "}" && (parenthesesStack[parenthesesStack.length - 1] === "{")) {
      parenthesesStack.pop();
    } else if (s[index] === "]" && (parenthesesStack[parenthesesStack.length - 1] === "[")) {
      parenthesesStack.pop();
    } else {
      return false;
    }
  }

  return parenthesesStack.length === 0;
};
console.log({ validParentheses: isValid('()') });

/**
 * @param {number} n 
 * @param {number[]} left 
 * @param {number[]} right 
 * @returns {number}
 */
function getLastMoment(n, left, right) {
  let ans = 0;

  for (let index = 0; index < left.length; index++) {
    ans = Math.max(ans, left[index]);
  }

  for (let index = 0; index < right.length; index++) {
    ans = Math.max(ans, n - right[index]);
  }

  return ans;
};
console.log({ lastMoment: getLastMoment(5, [3, 4], [2]) });

/**
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number}
 */
function getWinner(arr, k) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxElement = Math.max(maxElement, arr[i]);
  }

  let curr = arr[0], winStreak = 0;

  for (let i = 1; i < arr.length; i++) {
    const opponent = arr[i];

    if (curr > opponent) {
      winStreak++;
    } else {
      curr = opponent;
      winStreak = 1;
    }

    if (winStreak === k || curr === maxElement) return curr;
  }

  return -1;
};
console.log({ winner: getWinner([3, 2, 1], 10) });

class SeatManager {
  constructor(n) {
    this.seatState = Array(n).fill(1);
  }

  reserve() {
    for (let i = 0; i < this.seatState.length; i++) {
      if (this.seatState[i] === 1) {
        this.seatState[i] = 0;
        return i + 1;
      }
    }
  }

  unreserve(seatNumber) {
    this.seatState[seatNumber - 1] = 1;
  }
}

/**
 * @param {number[]} dist 
 * @param {number[]} speed 
 * @returns {number}
 */
function eliminateMaximum(dist, speed) {
  let eliminatedCount = 0;
  const timeToArrive = new Array(dist.length);

  for (let index = 0; index < dist.length; index++) {
    timeToArrive[index] = dist[index] / speed[index];
  }

  timeToArrive.sort((a, b) => a - b);

  for (let index = 0; index < timeToArrive.length; index++) {
    if (timeToArrive[index] <= index) {
      break;
    }

    eliminatedCount++;
  }

  return eliminatedCount;
};
console.log({ eliminated: eliminateMaximum([1, 3, 4], [1, 1, 1]) });

/**
 * @param {number} sx 
 * @param {number} sy 
 * @param {number} fx 
 * @param {number} fy 
 * @param {number} t 
 * @returns {number}
 */
function isReachableAtTime(sx, sy, fx, fy, t) {
  return (sx === fx && sy === fy) ? false : t >= Math.max(Math.abs(fx - sx), Math.abs(fy - sy));
};
console.log({ reachable: isReachableAtTime(2, 5, 7, 8, 6) });

class CustomStack {
  constructor(maxSize) {
    this.stack = [];
    this.stackSize = maxSize;
  }

  push(x) {
    if (this.stack.length < this.stackSize) this.stack.push(x);
  }

  pop() {
    return this.stack.length === 0 ? -1 : this.stack.pop();
  }

  increment(k, val) {
    const elementCount = Math.min(k, this.stack.length);

    for (let index = 0; index < elementCount; index++) {
      this.stack[index] += val;
    }
  }
}

/**
 * @param {string} s 
 * @returns {number}
 */
function countHomogenous(s) {
  let ans = 0, currStreak = 0;
  const MOD = 1e9 + 7;

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i] === s[i - 1]) currStreak++;
    else currStreak = 1;
    ans = (ans + currStreak) % MOD;
  }

  return ans;
};
console.log({ homogenous: countHomogenous('aabbb') });

class MinStack {
  constructor() {
    this.stack = [];
    this.minValue = 0;
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      this.minValue = val;
    } else {
      if (val < this.minValue) {
        this.stack.push(2 * val - this.minValue);
        this.minValue = val;
      } else {
        this.stack.push(val);
      }
    }
  }

  pop() {
    const currentNum = this.stack.pop();

    if (currentNum < this.minValue) {
      this.minValue = 2 * this.minValue - currentNum;
    }
  }

  top() {
    const currentNumber = this.stack[this.stack.length - 1];

    return currentNumber < this.minValue ? this.minValue : currentNumber;
  }

  getMin() {
    return this.minValue;
  }
}

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function maximumElementAfterDecrementingAndRearranging(arr) {
  let maxElement = 1;

  arr.sort((a, b) => a - b);

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] >= maxElement + 1) {
      maxElement++;
    }
  }

  return maxElement;
};
console.log({ max: maximumElementAfterDecrementingAndRearranging([2, 3, 4, 6, 6, 7]) });

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  const [numIdx, stack] = [{}, []];
  const result = new Array(nums1.length).fill(-1);

  nums1.forEach((num, index) => numIdx[num] = index);

  nums2.forEach(num => {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      const poppedNum = stack.pop();
      const indexInNums1 = numIdx[poppedNum];
      if (indexInNums1 !== undefined) result[indexInNums1] = num;
    }
    stack.push(num);
  });

  return result;
};
console.log({ nextGt: nextGreaterElement([4, 5], [1, 2, 3, 4, 5]) });

/**
 * @param {number[]} numbers 
 * @returns {number[]}
 */
function nextSmallerElements(numbers) {
  const s = [], ans = new Array(numbers.length).fill(-1);
  s.push(-1);

  for (let index = numbers.length - 1; index >= 0; index--) {
    const current = numbers[index];

    while (s[s.length - 1] !== -1 && numbers[s[s.length - 1]] >= current) {
      s.pop();
    }

    ans[index] = s[s.length - 1];
    s.push(index);
  }

  return ans;
}

/**
 * @param {number[]} numbers 
 * @returns {number[]}
 */
function prevSmallerElements(numbers) {
  const s = [], ans = new Array(numbers.length).fill(-1);
  s.push(-1);

  for (let index = 0; index < numbers.length; index++) {
    const current = numbers[index];

    while (s[s.length - 1] !== -1 && numbers[s[s.length - 1]] >= current) {
      s.pop();
    }

    ans[index] = s[s.length - 1];
    s.push(index);
  }

  return ans;
}

/**
 * @param {number[]} heights 
 * @returns {number}
 */
function largestRectangleArea(heights) {
  const next = nextSmallerElements(heights);
  const prev = prevSmallerElements(heights);

  let area = -Infinity;

  for (let index = 0; index < heights.length; index++) {
    const length = heights[index];

    if (next[index] === -1) {
      next[index] = heights.length;
    }

    const breadth = next[index] - prev[index] - 1;

    const newArea = length * breadth;
    area = Math.max(area, newArea);
  }

  return area;
};
console.log({ area: largestRectangleArea([2, 1, 5, 6, 2, 3]) });

/**
 * @param {string[][]} matrix 
 * @returns {number[][]}
 */
function matrixInNumber(matrix) {
  const convertedMatrix = [...matrix];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      convertedMatrix[i][j] = Number(matrix[i][j]);
    }
  }

  return convertedMatrix;
}

/**
 * @param {string[][]} matrix 
 * @returns {number}
 */
function maximalRectangle(matrix) {
  const convertedMatrix = matrixInNumber(matrix);
  let largestArea = largestRectangleArea(convertedMatrix[0]);

  for (let i = 1; i < convertedMatrix.length; i++) {
    for (let j = 0; j < convertedMatrix[0].length; j++) {
      if (convertedMatrix[i][j] !== 0) convertedMatrix[i][j] = convertedMatrix[i][j] + convertedMatrix[i - 1][j];
      else convertedMatrix[i][j] = 0;
    }

    largestArea = Math.max(largestArea, largestRectangleArea(convertedMatrix[i]));
  }

  return largestArea;
};
console.log({ maxArea: maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"]]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minPairSum(nums) {
  let maxSum = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length / 2; i++) {
    maxSum = Math.max(maxSum, nums[i] + nums[nums.length - 1 - i]);
  }

  return maxSum;
};
console.log({ maxSum: minPairSum([3, 5, 2, 3]) });

/**
 * @param {number} n 
 * @returns {number}
 */
function arrangeCoins(n) {
  let start = 0, end = n;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const completedRows = mid / 2 * (mid + 1);

    completedRows <= n ? start = mid + 1 : end = mid - 1;
  }

  return end;
};
console.log({ arrangedCoins: arrangeCoins(8) });

/**
 * @param {TreeNode | null} root 
 * @returns {number}
 */
function countNodes(root) {
  if (!root) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
};

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function singleNonDuplicate(nums) {
  let start = 0, end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid - 1] === nums[mid]) mid = mid - 1;

    mid % 2 === 0 ? start = mid + 2 : end = mid - 1;
  }

  return nums[end];
};
console.log({ singleDigit: singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]) });

class MyQueue {
  constructor() {
    this.values = [];
  }

  push(x) {
    this.values.push(x);
  }

  pop() {
    return this.values.shift();
  }

  peek() {
    return this.values[0];
  }

  empty() {
    return this.values.length === 0;
  }
}

/**
 * @param {number[]} height 
 * @returns {number}
 */
function maxArea(height) {
  let left = 0, right = height.length - 1, area = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    area = Math.max(width * minHeight, area);

    height[left] < height[right] ? left++ : right--;
  }

  return area;
};
console.log({ maxArea: maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) });

/**
 * @param {number} n 
 * @returns {number}
 */
function hammingWeight(n) {
  let numberOfOneBit = 0;

  while (n !== 0) {
    if (n & 1) numberOfOneBit++;
    n >>>= 1;
  }

  return numberOfOneBit;
};
console.log({ hammingWeight: hammingWeight(9) });

/**
 * @param {string[]} word1 
 * @param {string[]} word2 
 * @returns {boolean}
 */
function arrayStringsAreEqual(word1, word2) {
  return word1.join("") === word2.join("");
};
console.log({ arrayStringsAreEqual: arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']) });

/**
 * @param {(...args: number[]) => void} fn 
 * @param {number} t 
 * @returns {(...args: number[]) => void}
 */
function debounce(fn, t) {
  let timeOutId;

  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => fn(...args), t);
  };
};
const sayHello = () => console.log('hello');
debounce(sayHello, 10000)();

/**
 * @param {string} chars 
 * @returns {{ [key: string]: number }}
 */
function getCharCount(chars) {
  const charsCount = {};

  for (const char of chars) {
    charsCount[char] = (charsCount[char] || 0) + 1;
  }

  return charsCount;
}

/**
 * @param {{ [key: string]: number }} charCountInWord 
 * @param {{ [key: string]: number }} charsCount 
 * @returns {number}
 */
function getLetterCount(charCountInWord, charsCount) {
  let letterCount = 0;

  for (const char in charCountInWord) {
    if (charCountInWord[char] <= charsCount[char]) letterCount += charCountInWord[char];
  }

  return letterCount;
}

/**
 * @param {string[]} words 
 * @param {string} chars 
 * @returns {number}
 */
function countCharacters(words, chars) {
  let possibleLength = 0;
  const charsCount = getCharCount(chars);

  for (const word of words) {
    const charCountInWord = getCharCount(word);
    const letterCount = getLetterCount(charCountInWord, charsCount);
    if (letterCount === word.length) possibleLength += letterCount;
  }

  return possibleLength;
};
console.log({ countCharacters: countCharacters(["cat", "bt", "hat", "tree"], "atach") });

/**
 * @param {number[][]} points 
 * @returns {number}
 */
function minTimeToVisitAllPoints(points) {
  let ans = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const currX = points[i][0];
    const currY = points[i][1];
    const targetX = points[i + 1][0];
    const targetY = points[i + 1][1];
    ans += Math.max(Math.abs(targetX - currX), Math.abs(targetY - currY));
  }

  return ans;
};
console.log({ minTimeToVisitAllPoints: minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]) });

/**
 * @param {string} num 
 * @returns {string}
 */
function largestGoodInteger(num) {
  let result = "";

  for (let index = 0; index < num.length - 2; index++) {
    const firstDigit = num[index], secondDigit = num[index + 1], thirdDigit = num[index + 2];

    if (firstDigit === secondDigit && firstDigit === thirdDigit) {
      const possibleResult = `${firstDigit}${secondDigit}${thirdDigit}`;
      if (result === "" || result < possibleResult) result = possibleResult;
    }
  }

  return result;
};
console.log({ largestGoodInteger: largestGoodInteger("6777133339") });

Array.prototype.groupBy = function (fn) {
  const groupedArray = {};

  for (let i = 0; i < this.length; i++) {
    const value = fn(this[i]);
    if (!groupedArray[value]) groupedArray[value] = [];
    groupedArray[value].push(this[i]);
  }

  return groupedArray;
};

/**
 * @param {number} n 
 * @returns {number}
 */
function numberOfMatches(n) {
  if (n === 1) return 0;

  let matchCount = Math.floor(n / 2);

  n % 2 === 0 ? n /= 2 : n = Math.floor(n / 2) + 1;

  matchCount += numberOfMatches(n);
  return matchCount;
};
console.log({ numberOfMatches: numberOfMatches(7) });

class MyCircularQueue {
  constructor(k) {
    this.size = k;
    this.circularQueue = [];
    this.front = this.rear = -1;
  }

  enQueue(value) {
    if (this.isFull()) return false;
    else if (this.isEmpty()) this.front = this.rear = 0;
    else if (this.rear === this.size - 1 && this.front !== 0) this.rear = 0;
    else this.rear++;

    this.circularQueue[this.rear] = value;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;

    this.circularQueue[this.front] = -1;

    if (this.front === this.rear) this.front = this.rear = -1;
    else if (this.front === this.size - 1) this.front = 0;
    else this.front++;

    return true;
  }

  Front() {
    return this.circularQueue[this.front] ?? -1;
  }

  Rear() {
    return this.circularQueue[this.rear] ?? -1;
  }

  isEmpty() {
    return this.front === -1 && this.rear === -1;
  }

  isFull() {
    return (this.front === 0 && this.rear === this.size - 1) || this.front - this.rear === 1;
  }
}

/**
 * @param {number} n 
 * @returns {number}
 */
function totalMoney(n) {
  const NUMBER_OF_DAYS = 7;
  let weekCount = 0, moneySaved = 0;

  for (let num = 1; num <= n; num++) {
    if (num > NUMBER_OF_DAYS && num % NUMBER_OF_DAYS === 1) weekCount++;
    moneySaved += num - weekCount * (NUMBER_OF_DAYS - 1);
  }

  return moneySaved;
};
console.log({ totalMoney: totalMoney(4) });

/**
 * @param {string} num 
 * @returns {string}
 */
function largestOddNumber(num) {
  for (let index = num.length - 1; index >= 0; index--) {
    if (parseInt(num[index]) % 2 !== 0) {
      return num.substring(0, index + 1);
    }
  }

  return "";
};
console.log({ largestOddNumber: largestOddNumber("1234567890") });

/**
 * @param {TreeNode | null} node 
 * @param {number[]} values 
 * @returns {number[]}
 */
function getInOrderValues(node, values) {
  if (!node) return values;

  getInOrderValues(node.left, values);
  values.push(node.val);
  getInOrderValues(node.right, values);

  return values;
}

/**
 * @param {TreeNode | null} root 
 * @returns {number[]}
 */
function inorderTraversal(root) {
  return getInOrderValues(root, []);
};

/**
 * @param {TreeNode | null} node 
 * @param {number[]} values 
 * @returns {number[]}
 */
function getPreOrderValues(node, values) {
  if (!node) return values;

  values.push(node.val);
  getPreOrderValues(node.left, values);
  getPreOrderValues(node.right, values);

  return values;
}

/**
 * @param {TreeNode | null} root 
 * @returns {number[]}
 */
function preorderTraversal(root) {
  return getPreOrderValues(root, []);
};

/**
 * @param {TreeNode | null} node 
 * @param {number[]} values 
 * @returns {number[]}
 */
function getPostOrderValues(node, values) {
  if (!node) return values;

  getPostOrderValues(node.left, values);
  getPostOrderValues(node.right, values);
  values.push(node.val);

  return values;
}

/**
 * @param {TreeNode | null} root 
 * @returns {number[]}
 */
function postorderTraversal(root) {
  return getPostOrderValues(root, []);
};

/**
 * @param {number[][]} matrix 
 * @returns {number[][]}
 */
function transpose(matrix) {
  const rotatedMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    rotatedMatrix[col] = [];

    for (let row = 0; row < matrix.length; row++) {
      rotatedMatrix[col][row] = matrix[row][col];
    }
  }

  return rotatedMatrix;
};
console.log({ transpose: transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) });

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function findSpecialInteger(arr) {
  const oneFourth = Math.min(Math.floor(arr.length / 4), arr.length - 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + oneFourth]) return arr[i];
  }
};
console.log({ findSpecialInteger: findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 0]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function maxProduct(nums) {
  let left = 0, right = nums.length - 1, result = 0;

  while (left < right) {
    result = Math.max(result, (nums[left] - 1) * (nums[right] - 1));
    nums[left] < nums[right] ? left++ : right--;
  }

  return result;
};
console.log({ maxProduct: maxProduct([3, 4, 5, 2]) });

/**
 * @param {number[][]} mat 
 * @returns {number}
 */
function numSpecial(mat) {
  const row = mat.length;
  const col = mat[0].length;
  let rowCounts = new Array(mat.length).fill(0);
  let colCounts = new Array(mat[0].length).fill(0);

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      if (mat[x][y] === 1) {
        rowCounts[x] += 1;
        colCounts[y] += 1;
      }
    }
  }

  let result = 0;

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      if (mat[x][y] === 1 && rowCounts[x] === 1 && colCounts[y] === 1) result++;
    }
  }

  return result;
};
console.log({ numSpecial: numSpecial([[1, 0, 0], [0, 0, 1], [1, 0, 0]]) });

/**
 * 
 * @param {string[][]} paths 
 * @returns {string}
 */
function destCity(paths) {
  const values = {};

  for (const path of paths) {
    values[path[0]] = path[1];
  }

  for (const path of paths) {
    if (!values[path[1]]) return path[1];
  }
};
console.log({ destCity: destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]) });

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charFrequency = {};

  for (const char of s) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  for (const char of t) {
    if (charFrequency[char]) charFrequency[char]--;
    else return false;
  }

  return true;
};
console.log({ isAnagram: isAnagram("anagram", "nagaram") });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function maxProductDifference(nums) {
  nums.sort((a, b) => a - b);

  const firstSmallestNum = nums[0], secondSmallestNum = nums[1];
  const firstLargestNum = nums[nums.length - 1], secondLargestNum = nums[nums.length - 2];

  return (firstLargestNum * secondLargestNum) - (firstSmallestNum * secondSmallestNum);
};
console.log({ maxProductDifference: maxProductDifference([5, 6, 2, 7, 4]) });

/**
 * @param {number[][]} img 
 * @returns {number[][]}
 */
function imageSmoother(img) {
  // Save the dimensions of the image.
  const m = img.length;
  const n = img[0].length;

  // Create a new image of the same dimension as the input image.
  const smoothImg = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // Iterate over the cells of the image.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Initialize the sum and count 
      let sum = 0;
      let count = 0;

      // Iterate over all plausible nine indices.
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          // If the indices form valid neighbor
          if (0 <= x && x < m && 0 <= y && y < n) {
            sum += img[x][y];
            count += 1;
          }
        }
      }

      // Store the rounded down value in smoothImg[i][j].
      smoothImg[i][j] = Math.floor(sum / count);
    }
  }

  // Return the smooth image.
  return smoothImg;
};
console.log({ imageSmoother: imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]]) });

/**
 * @param {number[]} prices 
 * @param {number} money 
 * @returns {number}
 */
function buyChoco(prices, money) {
  const [price1, price2] = prices.sort((a, b) => a - b);

  const amountRemaining = money - (price1 + price2);

  if (amountRemaining >= 0) return amountRemaining;
  return money;
};
console.log({ buyChoco: buyChoco([1, 2, 2], 3) });

/**
 * @param {number[][]} points 
 * @returns {number}
 */
function maxWidthOfVerticalArea(points) {
  points.sort((a, b) => a[0] - b[0]);
  let maxWidth = 0;

  for (let idx = 0; idx < points.length; idx++) {
    const currentPoint = points[idx];

    if (idx + 1 < points.length) {
      const nextPoint = points[idx + 1];

      const maxDifference = Math.abs(currentPoint[0] - nextPoint[0]);

      if (maxWidth <= maxDifference) maxWidth = maxDifference;
    }
  }

  return maxWidth;
};
console.log({ maxWidthOfVerticalArea: maxWidthOfVerticalArea([[8, 7], [9, 9], [7, 4], [9, 7]]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function maxScore(s) {
  let score = s[0] === '0' ? 1 : 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '1') score++;
  }

  let maxScore = score;

  for (let i = 1; i < s.length - 1; i++) {
    s[i] === '1' ? score-- : score++;
    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};
console.log({ maxScore: maxScore("011101") });
