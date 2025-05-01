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
  return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
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

var findTargetInNums = function (arr, target, start, end) {
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
    return findTargetInNums(nums, target, pivot, nums.length - 1);
  } else {
    return findTargetInNums(nums, target, 0, pivot - 1);
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
 * @param {number} idx 
 * @param {number} heapSize 
 */
var heapify = function (nums, idx, heapSize) {
  let largest = idx;
  const left = 2 * idx + 1, right = 2 * idx + 2;

  if (left < heapSize && nums[largest] < nums[left]) largest = left;
  if (right < heapSize && nums[largest] < nums[right]) largest = right;

  if (largest !== idx) {
    [nums[largest], nums[idx]] = [nums[idx], nums[largest]];
    heapify(nums, largest, heapSize);
  }
};

/**
 * @param {number[]} nums 
 */
var buildMaxHeap = function (nums) {
  for (let i = Math.floor(nums.length / 2); i >= 0; i--) {
    heapify(nums, i, nums.length);
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  buildMaxHeap(nums);
  let heapSize = nums.length;

  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    heapSize--;
    heapify(nums, 0, heapSize);
  }

  return nums[0];
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
function diagonalSum(mat) {
  let ans = 0, size = mat.length;

  for (let i = 0; i < size; i++) {
    // primary diagonal elements
    ans += mat[i][i];
    // secondary diagonal elements
    ans += mat[size - 1 - i][i];
  }

  if (size % 2 !== 0) {
    const middle = Math.floor(size / 2);
    ans -= mat[middle][middle];
  }

  return ans;
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
  const subSet = [];
  getSubsets(nums, [], 0, subSet);
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

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

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

/**
 * @param {string} path 
 * @returns {boolean}
 */
function isPathCrossing(path) {
  const currentLocation = [0, 0], origin = new Set(['0,0']);

  for (let idx = 0; idx < path.length; idx++) {
    const point = path[idx];

    switch (point) {
      case "N":
        currentLocation[1] += 1;
        break;
      case "S":
        currentLocation[1] -= 1;
        break;
      case "E":
        currentLocation[0] += 1;
        break;
      default:
        currentLocation[0] -= 1;
        break;
    }

    if (origin.has(currentLocation.toString())) return true;
    origin.add(currentLocation.toString());
  }

  return false;
};
console.log({ isPathCrossing: isPathCrossing("NES") });

/**
 * @param {string} s 
 * @returns {number}
 */
function minOperations(s) {
  let forOne = 0, forZero = 0;

  for (let idx = 0; idx < s.length; idx++) {
    const char = s[idx];

    if (idx % 2 === 0) char === '0' ? forOne++ : forZero++;
    else char === '1' ? forOne++ : forZero++;
  }

  return Math.min(forOne, forZero);
};
console.log({ minOperations: minOperations("0100") });

/**
 * @param {string} password 
 * @returns {boolean}
 */
function strongPasswordCheckerII(password) {
  if (password.length < 8) return false;

  const passwordChecks = {
    lowerCase: false,
    upperCase: false,
    oneDigit: false,
    specialCharacter: false,
    adjacentCharacters: false,
  };

  for (let idx = 0; idx < password.length; idx++) {
    const char = password[idx], charCode = char.charCodeAt(0), charToNum = Number(char);

    if (!passwordChecks.lowerCase && charCode >= 97 && charCode <= 122)
      passwordChecks.lowerCase = true;

    if (!passwordChecks.upperCase && charCode >= 65 && charCode <= 90)
      passwordChecks.upperCase = true;

    if (charToNum >= 0 && charToNum <= 9) passwordChecks.oneDigit = true;

    const nextChar = password[idx + 1];
    if (nextChar)
      if (!passwordChecks.adjacentCharacters && char === nextChar)
        passwordChecks.adjacentCharacters = true;

    if (
      !passwordChecks.specialCharacter &&
      ((charCode >= 33 && charCode <= 45) || charCode === 64 || charCode === 94)
    )
      passwordChecks.specialCharacter = true;
  }

  return (passwordChecks.lowerCase && passwordChecks.upperCase && passwordChecks.oneDigit && passwordChecks.specialCharacter && !passwordChecks.adjacentCharacters
  );
}
console.log({ strongPasswordCheckerII: strongPasswordCheckerII("IloveLe3tcode!") });

/**
 * @param {string[]} words 
 * @returns {boolean}
 */
function makeEqual(words) {
  const charCount = {};

  for (const word of words) {
    for (const char of word) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  for (const char in charCount) {
    if (charCount[char] % words.length !== 0) return false;
  }

  return true;
};
console.log({ makeEqual: makeEqual(["abc", "aabc", "bc"]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function maxLengthBetweenEqualCharacters(s) {
  let largestSubStringLength = -1;
  const charIndex = {};

  for (let idx = 0; idx < s.length; idx++) {
    const char = s[idx];

    if (charIndex[char]) charIndex[char].push(idx);
    else charIndex[char] = [idx];
  }

  for (const char in charIndex) {
    const length = charIndex[char].length;

    if (length > 1) {
      const firstIndex = charIndex[char][0], lastIndex = charIndex[char][length - 1];
      const currentSubStringLength = Math.abs(firstIndex - lastIndex + 1);
      largestSubStringLength = Math.max(largestSubStringLength, currentSubStringLength);
    }
  }

  return largestSubStringLength;
};
console.log({ maxLengthBetweenEqualCharacters: maxLengthBetweenEqualCharacters("cbzxy") });

/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const subLeft = mergeSort(arr.slice(0, mid));
  const subRight = mergeSort(arr.slice(mid));

  return mergeArr(subLeft, subRight);
}

/**
 * @param {number[]} a 
 * @param {number[]} b 
 * @returns {number[]}
 */
function mergeArr(a, b) {
  const result = [];

  while (a.length && b.length)
    result.push(a[0] < b[0] ? a.shift() : b.shift());

  return result.concat(a.length ? a : b);
}

/**
 * @param {number[]} heights 
 * @returns {number}
 */
function heightChecker(heights) {
  let indicesDiff = 0;
  const sortedHeights = mergeSort(heights);

  for (let idx = 0; idx < heights.length; idx++) {
    if (heights[idx] !== sortedHeights[idx]) indicesDiff++;
  }

  return indicesDiff;
};
console.log({ heightChecker: heightChecker([1, 1, 4, 2, 1, 3]) });

/**
 * @param {number[]} g 
 * @param {number[]} s 
 * @returns {number}
 */
function findContentChildren(g, s) {
  let contentChildren = 0, cookieIndex = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (cookieIndex < s.length && contentChildren < g.length) {
    if (s[cookieIndex] >= g[contentChildren]) contentChildren++;
    cookieIndex++;
  }

  return contentChildren;
};
console.log({ findContentChildren: findContentChildren([1, 2, 3], [1, 1]) });

/**
 * @param {number[]} nums 
 * @returns {number[][]}
 */
function findMatrix(nums) {
  const numCount = {}, resultMatrix = [];

  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    const numValue = numCount[num];
    let index = 0;

    while (index < numValue) {
      if (resultMatrix[index]) resultMatrix[index].push(parseInt(num));
      else resultMatrix.push([parseInt(num)]);
      index++;
    }
  }

  return resultMatrix;
};
console.log({ findMatrix: findMatrix([1, 3, 4, 1, 2, 3, 1]) });

/**
 * @param {string[]} bank 
 * @returns {number}
 */
function numberOfBeams(bank) {
  let totalBeams = 0, prevRow = 0;

  for (let idx = 0; idx < bank.length; idx++) {
    const row = bank[idx];
    let numberOfBeams = 0;

    for (const position of row) {
      if (position === "1") numberOfBeams++;
    }

    if (numberOfBeams !== 0) {
      totalBeams += prevRow * numberOfBeams;
      prevRow = numberOfBeams;
    }
  }

  return totalBeams;
};
console.log({ totalBeams: numberOfBeams(["011001", "000000", "010100", "001000"]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minOperationsToMakeArrayEmpty(nums) {
  let operationCount = 0;
  const numCount = {};

  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    const count = numCount[num];

    if (count === 1) return -1;

    operationCount += Math.ceil(count / 3);
  }

  return operationCount;
}
console.log({ minOperations: minOperationsToMakeArrayEmpty([2, 3, 3, 2, 2, 4, 2, 3, 4]) });

/**
 * @param {number[]} values 
 * @param {number} low 
 * @param {number} high 
 * @returns {number}
 */
function getRangeSum(values, low, high) {
  let sum = 0;

  for (const value of values) {
    if (value >= low && value <= high) sum += value;
  }

  return sum;
}

/**
 * @param {TreeNode | null} root 
 * @param {number} low 
 * @param {number} high 
 * @returns {number}
 * @borrows Used `getInOrderValues` method to generate the nodeValues
 */
function rangeSumBST(root, low, high) {
  const nodeValues = getInOrderValues(root, []);

  return getRangeSum(nodeValues, low, high);
};

/**
 * @param {TreeNode | null} node 
 * @param {number[]} values 
 * @returns {void}
 */
function getInOrderValues2(node, values) {
  if (!node) return;

  getInOrderValues2(node.left, values);
  if (!node.left && !node.right) values.push(node.val);
  getInOrderValues2(node.right, values);
}

/**
 * @param {TreeNode | null} root1 
 * @param {TreeNode | null} root2 
 * @returns {boolean}
 */
function leafSimilar(root1, root2) {
  const root1Values = [];
  const root2Values = [];

  getInOrderValues2(root1, root1Values);
  getInOrderValues2(root2, root2Values);

  if (root1Values.length !== root2Values.length) return false;

  for (let idx = 0; idx < root1Values.length; idx++) {
    if (root1Values[idx] !== root2Values[idx]) return false;
  }

  return true;
};

/**
 * @param {TreeNode | null} root 
 * @returns {number}
 */
function maxDepth(root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  const treeHeight = Math.max(left, right) + 1;

  return treeHeight;
};

/**
 * @param {TreeNode | null} root 
 * @returns {number}
 */
function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  /**
   * @param {TreeNode | null} root 
   * @returns {number}
   */
  function maxDepth(root) {
    if (!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    const currentDiameter = left + right;

    maxDiameter = Math.max(currentDiameter, maxDiameter);

    return Math.max(left + 1, right + 1);
  };

  maxDepth(root);
  return maxDiameter;
};

/**
 * @param {TreeNode | null} root 
 * @returns {number}
 */
function maxAncestorDiff(root) {
  if (!root) return 0;

  let result = 0;

  /**
   * @param {TreeNode | null} node 
   * @param {number} min 
   * @param {number} max 
   * @returns {void}
   */
  function findDifference(node, min, max) {
    if (!node) return;

    result = Math.max(result,
      Math.max(Math.abs(min - node.val), Math.abs(max - node.val)));

    min = Math.min(min, node.val);
    max = Math.max(max, node.val);

    findDifference(node.left, min, max);
    findDifference(node.right, min, max);
  }

  findDifference(root, root.val, root.val);
  return result;
};

/**
 * @param {string} char 
 * @returns {boolean}
 */
function isVowel(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") return true;
  return false;
}

/**
 * @param {string} s 
 * @returns {boolean}
 */
function halvesAreAlike(s) {
  let vowelCount = 0, start = 0, end = s.length - 1;

  while (start < end) {
    if (isVowel(s[start++].toLowerCase())) vowelCount++;
    if (isVowel(s[end--].toLowerCase())) vowelCount--;
  }

  return vowelCount === 0;
};
console.log({ halvesAreAlike: halvesAreAlike("book") });

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {number}
 */
function minSteps(s, t) {
  let stepsCount = 0;
  const initCount = new Array(26).fill(0), charCountInS = {}, charCountInT = {};

  for (const char of s) {
    charCountInS[char] = (charCountInS[char] || 0) + 1;
  }

  for (const char of t) {
    charCountInT[char] = (charCountInT[char] || 0) + 1;
  }

  for (const char in charCountInT) {
    if (charCountInS[char]) {
      if (charCountInT[char] > charCountInS[char]) {
        stepsCount += charCountInT[char] - charCountInS[char];
      }
    } else {
      const charCode = char.charCodeAt(0) - 97;
      stepsCount += charCountInT[char] - initCount[charCode];
    }
  }

  return stepsCount;
};
console.log({ minSteps: minSteps("leetcode", "practice") });

/**
 * @param {string} word1 
 * @param {string} word2 
 * @returns {boolean}
 */
function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;

  const charsFreqInWord1 = new Array(26).fill(0), charsFreqInWord2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    charsFreqInWord1[word1.charCodeAt(i) - 97]++;
    charsFreqInWord2[word2.charCodeAt(i) - 97]++;
  }

  const charCount = {};

  for (let i = 0; i < 26; i++) {
    const charFreqInWord1 = charsFreqInWord1[i], charFreqInWord2 = charsFreqInWord2[i];

    if ((!charFreqInWord1 || !charFreqInWord2) && (charFreqInWord1 !== charFreqInWord2)) return false;

    charCount[charFreqInWord1] = (charCount[charFreqInWord1] || 0) + 1;
    charCount[charFreqInWord2] = (charCount[charFreqInWord2] || 0) - 1;
  }

  for (const char in charCount) {
    if (charCount[char]) return false;
  }

  return true;
};
console.log({ closeStrings: closeStrings("abc", "bca") });

/**
 * @param {TreeNode | null} root 
 * @returns {boolean}
 */
function isBalanced(root) {
  /**
   * @param {TreeNode | null} root 
   * @returns {[boolean, number]}
   */
  function maxDepth(root) {
    if (!root) return [true, 0];

    const [isLeftTreeBalanced, leftTreeHeight] = maxDepth(root.left);
    const [isRightTreeBalanced, rightTreeHeight] = maxDepth(root.right);
    const isTreeBalanced = isLeftTreeBalanced && isRightTreeBalanced && Math.abs(leftTreeHeight - rightTreeHeight) <= 1;

    return [isTreeBalanced, 1 + Math.max(leftTreeHeight, rightTreeHeight)];
  };

  return maxDepth(root)[0];
};

/**
 * @param {TreeNode | null} p 
 * @param {TreeNode | null} q 
 * @returns {boolean}
 */
function isSameTree(p, q) {
  if (!p && !q) return true;
  if ((!p && q) || (!q && p)) return false;

  const left = isSameTree(p.left, q.left);
  const valueSame = p.val === q.val;
  const right = isSameTree(p.right, q.right);

  return left && right && valueSame;
};

/**
 * @param {number[][]} matches 
 * @returns {number[][]}
 */
function findWinners(matches) {
  const playerLostCount = {}, result = [[], []];

  for (const match of matches) {
    playerLostCount[match[1]] = (playerLostCount[match[1]] || 0) + 1;
  }

  for (const match of matches) {
    if (!playerLostCount[match[0]]) {
      if (!result[0].includes(match[0])) result[0].push(match[0]);
    }
  }

  for (const count in playerLostCount) {
    if (playerLostCount[count] === 1) result[1].push(parseInt(count));
  }

  result[0].sort((a, b) => a - b);
  result[1].sort((a, b) => a - b);
  return result;
};
console.log({ findWinners: findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]) });

class RandomizedSet {
  constructor() {
    this.valMap = {};
    this.valList = [];
  }

  insert(val) {
    if (!isNaN(this.valMap[val])) return false;
    this.valMap[val] = this.valList.length;
    this.valList.push(val);
    return true;
  }

  remove(val) {
    if (isNaN(this.valMap[val])) return false;

    const index = this.valMap[val];
    const lastVal = this.valList[this.valList.length - 1];
    this.valMap[lastVal] = index;
    this.valList[index] = lastVal;
    delete this.valMap[val];
    this.valList.pop();
    return true;
  }

  getRandom() {
    return this.valList[Math.floor(Math.random() * this.valList.length)];
  }
}

/**
 * @param {TreeNode | null} root 
 * @returns {number[][]}
 */
function zigzagLevelOrder(root) {
  const result = [];
  if (!root) return result;

  const currentQueue = [root];

  let leftToRight = true;

  while (currentQueue.length) {
    const size = currentQueue.length;
    const currentRow = [];

    for (let idx = 0; idx < size; idx++) {
      const frontNode = currentQueue.shift();
      const index = leftToRight ? idx : size - idx - 1;
      currentRow[index] = frontNode.val;

      if (frontNode.left)
        currentQueue.push(frontNode.left);

      if (frontNode.right)
        currentQueue.push(frontNode.right);
    }

    leftToRight = !leftToRight;
    result.push(currentRow);
  }

  return result;
};

/**
 * @param {number} n 
 * @returns {number}
 */
function climbStairs(n) {
  return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);
};
console.log({ climbStairs: climbStairs(10) });

/**
 * @param {TreeNode | null} root 
 * @returns {TreeNode | null}
 */
function invertTree(root) {
  if (!root) return;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};

/**
 * @param {number[]} prices 
 * @returns {number}
 */
function maxProfit(prices) {
  let buyingPrice = Infinity, maxProfit = 0;

  for (let idx = 0; idx < prices.length; idx++) {
    const currentPrice = prices[idx];
    if (buyingPrice > currentPrice) {
      buyingPrice = currentPrice;

      for (let possibleIdx = idx; possibleIdx < prices.length; possibleIdx++) {
        const currentPrice = prices[possibleIdx];
        maxProfit = Math.max(maxProfit, currentPrice - buyingPrice);
      }
    }
  }

  return maxProfit;
};
console.log({ maxProfit: maxProfit([2, 4, 1]) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function findErrorNums(nums) {
  const result = [], numCount = {};

  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (let idx = 1; idx < nums.length + 1; idx++) {
    if (!numCount[idx]) result[1] = idx;
    if (numCount[idx] === 2) result[0] = idx;
  }

  return result;
};
console.log({ findErrorNums: findErrorNums([1, 2, 2, 4]) });

/**
 * @param {number[]} temperatures 
 * @returns {number[]}
 */
function dailyTemperatures(temperatures) {
  const minDays = new Array(temperatures.length).fill(0), stack = [];

  if (temperatures.length <= 1) return minDays;

  for (let idx = 0; idx < temperatures.length; idx++) {
    while (temperatures[stack[stack.length - 1]] < temperatures[idx]) {
      const top = stack.pop();
      minDays[top] = idx - top;
    }

    stack.push(idx);
  }

  return minDays;
};
console.log({ dailyTemperatures: dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number[][]}
 */
function divideArray(nums, k) {
  nums.sort((a, b) => a - b);

  const ans = [];

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) return [];
    ans.push([nums[i], nums[i + 1], nums[i + 2]]);
  }

  return ans;
};
console.log({ divideArray: divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2) });

/**
 * @param {number} low 
 * @param {number} high 
 * @returns {number[]}
 */
function sequentialDigits(low, high) {
  const possibleNos = [], digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  while (digits.length) {
    const digit = digits.shift();
    if (digit > high) continue;
    if (low <= digit && digit <= high) possibleNos.push(digit);
    const ones = digit % 10;
    if (ones < 9) digits.push(digit * 10 + (ones + 1));
  }

  return possibleNos;
};
console.log({ sequentialDigits: sequentialDigits(100, 300) });

/**
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number}
 */
function maxSumAfterPartitioning(arr, k) {
  const cache = {};

  function dfs(i) {
    if (i >= arr.length) return 0;
    if (i in cache) return cache[i];

    let currentMax = 0, result = 0;

    for (let j = i; j < Math.min(arr.length, i + k); j++) {
      currentMax = Math.max(currentMax, arr[j]);
      const windowSize = j - i + 1;
      result = Math.max(result, dfs(j + 1) + currentMax * windowSize);
    }

    cache[i] = result;
    return result;
  }

  return dfs(0);
};
console.log({ maxSumAfterPartitioning: maxSumAfterPartitioning([[1, 15, 7, 9, 2, 5, 10], 3]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function firstUniqChar(s) {
  const charCount = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let idx = 0; idx < s.length; idx++) {
    const char = s[idx];
    if (charCount[char] === 1) return idx;
  }

  return -1;
};
console.log({ firstUniqChar: firstUniqChar("leetcode") });

/**
 * @param {string[]} strs 
 * @returns {string[][]}
 */
function groupAnagrams(strs) {
  const result = {};

  for (const str of strs) {
    const charCount = new Array(26).fill(0);

    for (const char of str) {
      charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const countStr = charCount.toString();
    if (!result[countStr]) result[countStr] = [];
    result[countStr].push(str);
  }

  return Object.values(result);
}
console.log({ groupAnagrams: groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) });

/**
 * @param {string} char 
 * @returns {boolean}
 */
function validChar(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9");
}

/**
 * @param {string} char 
 * @returns {string}
 */
function toLowerCase(char) {
  if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
    return char;
  } else {
    return String.fromCharCode(char.charCodeAt(0) + 32);
  }
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function checkPalindrome(str) {
  let start = 0, end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
}

/**
 * @param {string} s 
 * @returns {boolean}
 */
function isStrPalindrome(s) {
  let tempString = [];

  for (let i = 0; i < s.length; i++) {
    if (validChar(s[i])) tempString.push(toLowerCase(s[i]));
  }

  return checkPalindrome(tempString.join(""));
};
console.log({ isStrPalindrome: isStrPalindrome("A man, a plan, a canal: Panama") });

/**
 * @param {string} words 
 * @returns {string}
 */
function firstPalindrome(words) {
  for (const word of words) {
    if (checkPalindrome(word)) return word;
  }

  return "";
};
console.log({ firstPalindrome: firstPalindrome(["abc", "car", "ada", "racecar", "cool"]) });

/**
 * @param {string} num1 
 * @param {string} num2 
 * @returns {string}
 */
function addStrings(num1, num2) {
  let num1Length = num1.length - 1, num2Length = num2.length - 1, result = [], carry = 0;

  while (num1Length >= 0 || num2Length >= 0 || carry > 0) {
    const firstDigit = +num1[num1Length--] || 0, secondDigit = +num2[num2Length--] || 0;
    let sum = firstDigit + secondDigit + carry;
    carry = Math.floor(sum / 10);

    if (sum >= 10) sum %= 10;

    result.unshift(sum);
  }

  return result.join("");
};
console.log({ addStrings: addStrings("1", "9") });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function rearrangeArray(nums) {
  const rearrangedNums = [];
  let posIndex = 0, negIndex = 1;

  for (const num of nums) {
    if (num > 0) {
      rearrangedNums[posIndex] = num;
      posIndex += 2;
    } else {
      rearrangedNums[negIndex] = num;
      negIndex += 2;
    }
  }

  return rearrangedNums;
};
console.log({ rearrangeArray: rearrangeArray([3, 1, -2, -5, 2, -4]) });

/**
 * @param {number} n 
 * @returns {string[]}
 */
function fizzBuzz(n) {
  const answer = [];

  for (let idx = 1; idx <= n; idx++) {
    if (idx % 3 === 0 && idx % 5 === 0) answer.push("FizzBuzz");
    else if (idx % 3 === 0) answer.push("Fizz");
    else if (idx % 5 === 0) answer.push("Buzz");
    else answer.push(`${idx}`);
  }

  return answer;
};
console.log({ fizzBuzz: fizzBuzz(3) });

/**
 * @param {string} num1 
 * @param {string} num2 
 * @returns {string}
 */
function addBinary(num1, num2) {
  let num1Length = num1.length - 1, num2Length = num2.length - 1, result = [], carry = 0;

  while (num1Length >= 0 || num2Length >= 0 || carry > 0) {
    const firstDigit = +num1[num1Length--] || 0, secondDigit = +num2[num2Length--] || 0;
    let sum = firstDigit + secondDigit + carry;
    carry = Math.floor(sum / 2);

    if (sum >= 2) sum %= 2;

    result.unshift(sum);
  }

  return result.join("");
};
console.log({ addBinary: addBinary("11", "1") });

/**
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number}
 */
function findLeastNumOfUniqueInts(arr, k) {
  // Create a map to store the frequency of each number.
  const freqMap = new Map();

  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Convert the map to an array of [number, frequency] pairs
  const freqArray = [...freqMap.entries()];

  // Sort the array in ascending order of frequency
  freqArray.sort((a, b) => a[1] - b[1]);

  // Initialize a variable to count the number of unique integers with the current
  // lowest frequency.
  let count = 0;

  // Remove elements from the array until k is reached.
  while (k > 0 && freqArray.length > 0) {
    const [, freq] = freqArray[0];

    if (k >= freq) {
      k -= freq;
      count++;
    } else break;
    freqArray.shift();
  }

  // If k is a non-negative, return the size of the freqMap minus the updated count variable.
  // frequency.
  if (k >= 0) return freqMap.size - count;

  // If we removed all elements from the array and still didn't reach k, return 0.
  return 0;
};
console.log({ findLeastNumOfUniqueInts: findLeastNumOfUniqueInts([5, 5, 4], 1) });

/**
 * @param {TreeNode | null} root 
 * @param {number[]} nodes 
 * @param {number} level 
 * @returns {number[]}
 */
function solve(root, nodes, level) {
  if (!root) return nodes;

  if (level === nodes.length) nodes.push(root.val);

  solve(root.right, nodes, level + 1);
  solve(root.left, nodes, level + 1);

  return nodes;
};

/**
 * @param {TreeNode | null} root 
 * @returns {number[]}
 */
function rightSideView(root) {
  return solve(root, [], 0);
};

/**
 * @param {TreeNode | null} root 
 * @returns {number[][]}
 */
function levelOrder(root) {
  const nodeVals = [], nodesQueue = [];

  if (!root) return nodeVals;
  nodesQueue.push(root);

  while (nodesQueue.length) {
    const size = nodesQueue.length, currentRow = [];

    for (let idx = 0; idx < size; idx++) {
      const node = nodesQueue.shift();
      currentRow[idx] = node.val;

      if (node.left) nodesQueue.push(node.left);
      if (node.right) nodesQueue.push(node.right);
    }

    nodeVals.push(currentRow);
  }

  return nodeVals;
};

/**
 * @param {TreeNode | null} root 
 * @returns {number}
 */
function sumOfLeftLeaves(root) {
  let sum = 0;

  /**
   * @param {TreeNode | null} root 
   * @param {boolean} isLeft 
   * @returns {void}
   */
  function solve(root, isLeft) {
    if (!root) return;
    if (!root.left && !root.right && isLeft) sum += root.val;

    solve(root.left, true);
    solve(root.right, false);
  }

  solve(root, false);
  return sum;
};

/**
 * @param {TreeNode | null} root 
 * @param {number} targetSum 
 * @returns {boolean}
 */
function hasPathSum(root, targetSum) {
  if (!root) return false;

  /**
   * @param {TreeNode | null} node 
   * @param {number} currentSum 
   * @returns {boolean}
   */
  function checkPathSum(node, currentSum) {
    if (!node) return false;

    // Check if it's a leaf node and if the path sum equals the target sum
    if (!node.left && !node.right && currentSum + node.val === targetSum) return true;

    // Recursively check the left and right subtrees
    return (checkPathSum(node.left, currentSum + node.val) || checkPathSum(node.right, currentSum + node.val));
  }

  return checkPathSum(root, 0);
}

/**
 * @param {number} left 
 * @param {number} right 
 * @returns {number}
 */
function rangeBitwiseAnd(left, right) {
  while (right > left) {
    right &= right - 1;
  }
  return right;
};
console.log({ rangeBitwiseAnd: rangeBitwiseAnd(5, 7) });

/**
 * @param {number} n 
 * @param {number[][]} trust 
 * @returns {number}
 */
function findJudge(n, trust) {
  const inDegree = new Array(n + 1).fill(0), outDegree = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    inDegree[b]++;
    outDegree[a]++;
  }

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === n - 1 && outDegree[i] == 0) return i;
  }

  return -1;
};
console.log({ findJudge: findJudge(2, [[1, 2]]) });

/**
 * @param {TreeNode | null} root 
 * @param {TreeNode | null} p 
 * @param {TreeNode | null} q 
 * @returns {TreeNode | null}
 */
function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;

  const leftAns = lowestCommonAncestor(root.left, p, q);
  const rightAns = lowestCommonAncestor(root.right, p, q);

  if (leftAns && rightAns) return root;
  else if (leftAns && !rightAns) return leftAns;
  else if (!leftAns && rightAns) return rightAns;
  else return null;
};

/**
 * @param {TreeNode | null} root 
 * @param {TreeNode | null} p 
 * @param {TreeNode | null} q 
 * @returns {TreeNode | null}
 */
function lowestCommonAncestorInBST(root, p, q) {
  if (!root) return null;
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestorInBST(root.right, p, q);
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestorInBST(root.left, p, q);
  return root;
};

/**
 * @param {TreeNode | null} root 
 * @returns {string[]}
 */
function binaryTreePaths(root) {
  const nodePaths = [];

  /**
   * @param {TreeNode | null} node 
   * @param {string[]} currentPath 
   * @returns {void}
   */
  function getNodes(node, currentPath) {
    if (!node) return;
    const path = [...currentPath];
    path.push(`${node.val}`);
    if (!node.left && !node.right) nodePaths.push(path.join("->"));
    getNodes(node.left, path);
    getNodes(node.right, path);
  }

  getNodes(root, []);
  return nodePaths;
};

/**
 * @param {TreeNode | null} root 
 * @returns {number}
 */
function findBottomLeftValue(root) {
  let maxDepth = -1, bottomLeftValue = 0;

  /**
   * @param {TreeNode | null} node 
   * @param {number} depth 
   * @returns {void}
   */
  function getBottomLeftValue(node, depth) {
    if (!node) return;

    if (depth > maxDepth) {
      maxDepth = depth;
      bottomLeftValue = node.val;
    }

    getBottomLeftValue(node.left, depth + 1);
    getBottomLeftValue(node.right, depth + 1);
  }

  getBottomLeftValue(root, 0);
  return bottomLeftValue;
};

/**
 * @param {TreeNode | null} root 
 * @returns {boolean}
 */
function isEvenOddTree(root) {
  let current = root, even = true;
  const nodesQueue = [current];

  while (nodesQueue.length) {
    let size = nodesQueue.length;

    let prev = Infinity;
    if (even) prev = -Infinity;

    while (size) {
      current = nodesQueue.shift();

      if (
        (even && (current.val % 2 === 0 || current.val <= prev)) ||
        (!even && (current.val % 2 === 1 || current.val >= prev))
      )
        return false;

      prev = current.val;

      if (current.left) nodesQueue.push(current.left);
      if (current.right) nodesQueue.push(current.right);

      size--;
    }

    even = !even;
  }

  return true;
};

/**
 * @param {string} s 
 * @returns {string}
 */
function maximumOddBinaryNumber(s) {
  let onesCount = 0;
  const result = [], strLength = s.length;

  for (let idx = 0; idx < strLength; idx++) {
    if (s[idx] === "1") onesCount++;
  }

  for (let idx = 0; idx < onesCount - 1; idx++) {
    result.push(1);
  }

  for (let idx = 0; idx < (strLength - onesCount); idx++) {
    result.push(0);
  }

  result.push(1);
  return result.join("");
};
console.log({ maximumOddBinaryNumber: maximumOddBinaryNumber("010") });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function sortedSquares(nums) {
  let start = 0, end = nums.length - 1, squaredNums = [];

  while (start <= end) {
    const startSquared = nums[start] ** 2, endSquared = nums[end] ** 2;

    if (startSquared > endSquared) {
      squaredNums.unshift(startSquared);
      start++;
    } else {
      squaredNums.unshift(endSquared);
      end--;
    }
  }

  return squaredNums;
};
console.log({ sortedSquares: sortedSquares([-4, -1, 0, 3, 10]) });

/**
 * @param {ListNode | null} head 
 * @param {number} n 
 * @returns {number}
 */
function removeNthFromEnd(head, n) {
  const listLength = getLength(head);
  let idx = 0, traverseTill = listLength - n - 1, curr = head;
  if (traverseTill === -1) return head.next;

  while (idx < traverseTill) {
    curr = curr.next;
    idx++;
  }

  curr.next = curr.next.next;
  return head;
};

/**
 * @param {number[]} tokens 
 * @param {number} power 
 * @returns {number}
 */
function bagOfTokensScore(tokens, power) {
  tokens.sort((a, b) => a - b);
  let low = 0, high = tokens.length - 1, score = 0;

  while (low <= high) {
    if (power >= tokens[low]) {
      power -= tokens[low];
      score += 1;
      low++;
    } else if (score > 0 && low !== high) {
      power += tokens[high];
      score -= 1;
      high--;
    } else {
      return score;
    }
  }
  return score;
};
console.log({ bagOfTokensScore: bagOfTokensScore([100], 50) });

/**
 * @param {number} inorder 
 * @returns {Map<number, number>}
 */
function createMapping(inorder) {
  const mapIndex = new Map();

  for (let idx = 0; idx < inorder.length; idx++) {
    mapIndex.set(inorder[idx], idx);
  }

  return mapIndex;
}

/**
 * @param {number[]} preorder 
 * @param {number[]} inorder 
 * @returns {TreeNode | null}
 */
function buildTreeWithPreOrder(preorder, inorder) {
  const nodeToIndex = createMapping(inorder);
  let index = 0;

  /**
   * @param {number[]} preorder 
   * @param {number} inorderStart 
   * @param {number} inorderEnd 
   * @param {Map<number, number>} nodeToIndex 
   * @returns {TreeNode | null}
   */
  function solve(preorder, inorderStart, inorderEnd, nodeToIndex) {
    if (index >= preorder.length || inorderStart > inorderEnd) return null;

    const element = preorder[index++];
    const root = new TreeNode(element), position = nodeToIndex.get(element);
    root.left = solve(preorder, inorderStart, position - 1, nodeToIndex);
    root.right = solve(preorder, position + 1, inorderEnd, nodeToIndex);

    return root;
  }

  return solve(preorder, 0, inorder.length - 1, nodeToIndex);
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @returns {TreeNode | null}
 */
function buildTreeWithPostOrder(inorder, postorder) {
  const nodeToIndex = createMapping(inorder);
  let index = postorder.length - 1;

  /**
   * @param {number[]} preorder
   * @param {number} inorderStart
   * @param {number} inorderEnd
   * @param {Map<number, number>} nodeToIndex
   * @returns {TreeNode | null}
   */
  function solve(postorder, inorderStart, inorderEnd, nodeToIndex) {
    if (index < 0 || inorderStart > inorderEnd) return null;

    const element = postorder[index--];
    const root = new TreeNode(element), position = nodeToIndex.get(element);
    root.right = solve(postorder, position + 1, inorderEnd, nodeToIndex);
    root.left = solve(postorder, inorderStart, position - 1, nodeToIndex);

    return root;
  }

  return solve(postorder, 0, postorder.length - 1, nodeToIndex);
};

/**
 * @param {string} s 
 * @returns {number}
 */
function minimumLength(s) {
  let begin = 0, end = s.length - 1;

  while (begin < end && s[begin] === s[end]) {
    const char = s[begin];

    // Delete consecutive occurrences of char from prefix
    while (begin <= end && s[begin] === char) begin++;

    // Delete consecutive occurrences of char from suffix
    while (end > begin && s[end] === char) end--;
  }

  // Return the number of remaining characters
  return end - begin + 1;
};
console.log({ minimumLength: minimumLength("ca") });

/**
 * @param {TreeNode | null} node 
 * @param {number} start 
 * @returns {{nodeToParentMap: Map<TreeNode, TreeNode>, targetNode: TreeNode | null}}
 */
function getParentMapping(node, start) {
  let targetNode = null;
  const nodeToParentMap = new Map(), queue = [node];

  while (queue.length) {
    const frontNode = queue.shift();

    if (frontNode.val === start) targetNode = frontNode;

    if (frontNode.left) {
      nodeToParentMap.set(frontNode.left, frontNode);
      queue.push(frontNode.left);
    }

    if (frontNode.right) {
      nodeToParentMap.set(frontNode.right, frontNode);
      queue.push(frontNode.right);
    }
  }

  return { nodeToParentMap, targetNode };
}

/**
 * @param {TreeNode | null} node 
 * @param {Map<TreeNode, TreeNode>} nodeToParent 
 * @returns {number}
 */
function infectTree(node, nodeToParent) {
  let timeTaken = 0;
  const visitedNodes = new Map(), queue = [node];
  visitedNodes.set(node, true);

  while (queue.length) {
    const size = queue.length;
    let flag = false;

    for (let idx = 0; idx < size; idx++) {
      const frontNode = queue.shift();

      if (frontNode.left && !visitedNodes.get(frontNode.left)) {
        flag = true;
        queue.push(frontNode.left);
        visitedNodes.set(frontNode.left, true);
      }

      if (frontNode.right && !visitedNodes.get(frontNode.right)) {
        flag = true;
        queue.push(frontNode.right);
        visitedNodes.set(frontNode.right, true);
      }

      if (nodeToParent.get(frontNode) && !visitedNodes.get(nodeToParent.get(frontNode))) {
        flag = true;
        queue.push(nodeToParent.get(frontNode));
        visitedNodes.set(nodeToParent.get(frontNode), true);
      }
    }

    if (flag) timeTaken++;
  }

  return timeTaken;
}

/**
 * @param {TreeNode | null} root 
 * @param {number} start 
 * @returns {number}
 */
function amountOfTime(root, start) {
  const { nodeToParentMap, targetNode } = getParentMapping(root, start);
  return infectTree(targetNode, nodeToParentMap);
}

/**
 * @param {TreeNode | null} root 
 * @returns {void}
 */
function flatten(root) {
  let current = root;

  while (current) {
    if (current.left) {
      let predecessor = current.left;

      while (predecessor.right) predecessor = predecessor.right;

      predecessor.right = current.right;
      current.right = current.left;
      current.left = null;
    }

    current = current.right;
  }
};

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function maxFrequencyElements(nums) {
  const numsCount = {};
  let totalCount = 0, maxCount = -Infinity;

  for (const num of nums) {
    numsCount[num] = (numsCount[num] || 0) + 1;
  }

  for (const num in numsCount) {
    maxCount = Math.max(maxCount, numsCount[num]);
  }

  for (const num in numsCount) {
    const numCount = numsCount[num];
    if (numCount === maxCount) totalCount += numCount;
  }

  return totalCount;
}
console.log({ maxFrequencyElements: maxFrequencyElements([1, 2, 2, 3, 1, 4]) });

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {boolean}
 */
function findNum(nums, target) {
  let start = 0, end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] > target) end = mid - 1;
    else if (nums[mid] < target) start = mid + 1;
    else return true;
  }

  return false;
}

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number}
 */
function getCommon(nums1, nums2) {
  if (nums1.length > nums2.length) return getCommon(nums2, nums1);

  for (const num of nums1) {
    if (findNum(nums2, num)) return num;
  }

  return -1;
}
console.log({ getCommon: getCommon([1, 2, 3], [2, 4]) });

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]}
 */
function intersection(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const commonNumSet = new Set();
  let first = 0, second = 0;

  while (first < nums1.length && second < nums2.length) {
    const num1 = nums1[first], num2 = nums2[second];

    if (num1 === num2) {
      commonNumSet.add(num1);
      first++;
      second++;
    } else if (num1 < num2) first++;
    else second++;
  }

  return Array.from(commonNumSet);
};
console.log({ intersection: intersection([1, 2, 2, 1], [2, 2]) });

/**
 * @param {TreeNode | null} root 
 * @param {number} val 
 * @returns {TreeNode | null}
 */
function searchBST(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
};

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function productExceptSelf(nums) {
  const result = [];
  let prefix = 1, postfix = 1;

  for (let idx = 0; idx < nums.length; idx++) {
    result[idx] = prefix;
    prefix *= nums[idx];
  }

  for (let idx = nums.length - 1; idx >= 0; idx--) {
    result[idx] *= postfix;
    postfix *= nums[idx];
  }

  return result;
};
console.log({ productExceptSelf: productExceptSelf([1, 2, 3, 4]) });

/**
 * @param {TreeNode | null} node 
 * @param {number[]} values 
 * @returns {number[]}
 */
function inOrder(node, values) {
  if (!node) return values;

  inOrder(node.left, values);
  values.push(node.val);
  inOrder(node.right, values);

  return values;
}

/**
 * @param {TreeNode | null} root 
 * @param {number} k 
 * @returns {boolean}
 */
function findTarget(root, k) {
  const values = inOrder(root, []);
  let start = 0, end = values.length - 1;

  while (start < end) {
    const sum = values[start] + values[end];
    if (sum === k) return true;
    else if (sum > k) end--;
    else start++;
  }

  return false;
}

/**
 * @param {number[]} points 
 * @returns {number}
 */
function findMinArrowShots(points) {
  points.sort((a, b) => a[0] - b[0]);
  let count = points.length, prev = points[0];

  for (let idx = 1; idx < points.length; idx++) {
    const curr = points[idx];

    if (curr[0] <= prev[1]) {
      count--;
      prev = [curr[0], Math.min(curr[1], prev[1])];
    } else prev = curr;
  }

  return count;
};
console.log({ findMinArrowShots: findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]) });

/**
 * @param {ListNode | null} list1 
 * @param {number} a 
 * @param {number} b 
 * @param {ListNode | null} list2 
 * @returns {ListNode | null}
 */
function mergeInBetween(list1, a, b, list2) {
  let current = list1, idx = 0;

  while (idx < a - 1) {
    current = current.next;
    idx++;
  }

  let head = current;

  while (idx <= b) {
    current = current.next;
    idx++;
  }

  head.next = list2;

  while (list2.next) {
    list2 = list2.next;
  }

  list2.next = current;
  return list1;
}

/**
 * @param {ListNode | null} head 
 * @param {ListNode | null} tail 
 * @returns {TreeNode | null}
 */
function toBST(head, tail) {
  let slow = head, fast = head;

  if (head === tail) return null;

  while (fast !== tail && fast.next !== tail) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const currHead = new TreeNode(slow.val);
  currHead.left = toBST(head, slow);
  currHead.right = toBST(slow.next, tail);

  return currHead;
}

/**
 * @param {ListNode | null} head 
 * @returns {TreeNode | null}
 */
function sortedListToBST(head) {
  return head === null ? null : toBST(head, null);
};

/**
 * @param {ListNode | null} head
 * @returns {void}
 */
function reorderList(head) {
  let slow = head, fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next, prev = null;
  slow.next = null;

  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  let first = head;
  second = prev;

  while (second) {
    let temp1 = first.next, temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function firstMissingPositive(nums) {
  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] < 0) nums[idx] = 0;
  }

  for (let idx = 0; idx < nums.length; idx++) {
    const val = Math.abs(nums[idx]);

    if (val >= 1 && val <= nums.length) {
      if (nums[val - 1] > 0) nums[val - 1] *= -1;
      else if (nums[val - 1] === 0) nums[val - 1] = -1 * (nums.length + 1);
    }
  }

  for (let idx = 1; idx < nums.length + 1; idx++) {
    if (nums[idx - 1] >= 0) return idx;
  }

  return nums.length + 1;
};
console.log({ firstMissingPositive: firstMissingPositive([1, 2, 0]) });

/**
 * @param {number[]} nums 
 * @param {number} size 
 * @param {number} idx 
 */
function heapify(nums, size, idx) {
  let largest = idx, left = 2 * idx + 1, right = 2 * idx + 2;

  if (left < size && nums[largest] < nums[left]) largest = left;

  if (right < size && nums[largest] < nums[right]) largest = right;

  if (largest !== idx) {
    [nums[largest], nums[idx]] = [nums[idx], nums[largest]];
    heapify(nums, size, largest);
  }
}

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function heapSort(nums) {
  let size = nums.length;
  const length = Math.floor(size / 2);

  for (let idx = length; idx >= 0; idx--) {
    heapify(nums, size, idx);
  }

  while (size > 0) {
    [nums[size - 1], nums[0]] = [nums[0], nums[size - 1]];
    size--;

    heapify(nums, size, 0);
  }

  return nums;
}

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function sortArray(nums) {
  return heapSort(nums);
};
console.log({ sortArray: sortArray([3, 4, 5, 1, 2]) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function numSubarrayProductLessThanK(nums, k) {
  let result = 0, left = 0, product = 1;

  for (let idx = 0; idx < nums.length; idx++) {
    product *= nums[idx];

    while (left <= idx && product >= k) {
      product = Math.floor(product / nums[left++]);
    }

    result += idx - left + 1;
  }

  return result;
}
console.log({ numSubarrayProductLessThanK: numSubarrayProductLessThanK([10, 5, 2, 6], 100) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function maxSubarrayLength(nums, k) {
  let result = 0, left = 0;
  const numCount = {};

  for (let right = 0; right < nums.length; right++) {
    numCount[nums[right]] = (numCount[nums[right]] || 0) + 1;

    while (numCount[nums[right]] > k) {
      numCount[nums[left++]]--;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
console.log({ maxSubarrayLength: maxSubarrayLength([9, 6, 7, 4, 1, 3, 4, 5], 3) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function countSubarrays(nums, k) {
  const maxNum = Math.max(...nums);
  let maxCount = 0, left = 0, result = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === maxNum) maxCount++;

    while (maxCount === k) {
      if (nums[left++] === maxNum) maxCount--;
    }

    result += left;
  }

  return result;
};
console.log({ countSubarrays: countSubarrays([1, 2, 1, 1, 3, 3], 2) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function subarraysWithKDistinct(nums, k) {
  const numCount = new Map();
  let leftNear = 0, leftFar = 0, result = 0;

  for (let right = 0; right < nums.length; right++) {
    numCount.set(nums[right], (numCount.get(nums[right]) || 0) + 1);

    while (numCount.size > k) {
      numCount.set(nums[leftNear], numCount.get(nums[leftNear]) - 1);
      if (numCount.get(nums[leftNear]) === 0) numCount.delete(nums[leftNear++]);
      leftFar = leftNear;
    }

    while (numCount.get(nums[leftNear]) > 1) {
      numCount.set(nums[leftNear], numCount.get(nums[leftNear++]) - 1);
    }

    if (numCount.size === k) result += leftNear - leftFar + 1;
  }

  return result;
}
console.log({ subarraysWithKDistinct: subarraysWithKDistinct([10, 5, 2, 6], 2) });

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
function isIsomorphic(s, t) {
  const mapST = {}, mapTS = {};

  for (let idx = 0; idx < s.length; idx++) {
    const char1 = s[idx], char2 = t[idx];

    if ((char1 in mapST && mapST[char1] !== char2) || (char2 in mapTS && mapTS[char2] !== char1)) return false;

    mapST[char1] = char2;
    mapTS[char2] = char1;
  }

  return true;
};
console.log({ isIsomorphic: isIsomorphic("egg", "add") });

/**
 * @param {string} s 
 * @returns {number}
 */
function maxDepthOfParentheses(s) {
  let depth = 0, maxDepth = 0;

  for (const char of s) {
    if (char === "(") depth++;
    else if (char === ")") depth--;
    maxDepth = Math.max(maxDepth, depth);
  }

  return maxDepth;
};
console.log({ maxDepthOfParentheses: maxDepthOfParentheses("(1+(2*3)+((8)/4))+1") });

/**
 * @param {string} s 
 * @returns {string}
 */
function minRemoveToMakeValid(s) {
  const result = [], updatedString = [];
  let count = 0;

  for (const char of s) {
    if (char === "(") {
      result.push(char);
      count++;
    } else if (char === ")" && count > 0) {
      result.push(char);
      count--;
    } else if (char !== ")") {
      result.push(char);
    }
  }

  for (let idx = result.length - 1; idx >= 0; idx--) {
    if (result[idx] === "(" && count > 0) count--;
    else updatedString.push(result[idx]);
  }

  let start = 0, end = updatedString.length - 1;

  while (start <= end) {
    [updatedString[start++], updatedString[end--]] = [updatedString[end], updatedString[start]];
  }

  return updatedString.join("");
};
console.log({ minRemoveToMakeValid: minRemoveToMakeValid("lee(t(c)o)de)") });

/**
 * @param {string} num 
 * @param {number} k 
 * @returns {string}
 */
function removeKdigits(num, k) {
  const stack = [];

  for (const char of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > char) {
      k--;
      stack.pop();
    }
    stack.push(char);
  }

  while (k) {
    stack.pop();
    k--;
  }

  while (stack[0] === '0') {
    stack.shift();
  }

  return stack.length ? stack.join('') : '0';
}
console.log({ removeKdigits: removeKdigits("1432219", 3) });

/**
 * @param {string} word 
 * @param {number} idx 
 * @returns {string}
 */
function reverse(word, idx) {
  const chars = word.split('');
  let start = 0, end = idx;

  while (start < end) {
    [chars[start++], chars[end--]] = [chars[end], chars[start]];
  }

  return chars.join('');
}

/**
 * @param {string} word 
 * @param {string} ch 
 * @returns {string}
 */
function reversePrefix(word, ch) {
  let charIdx = -1;

  for (let idx = 0; idx < word.length; idx++) {
    if (word[idx] === ch) {
      charIdx = idx;
      break;
    }
  }

  return charIdx === -1 ? word : reverse(word, charIdx);
}
console.log({ reversePrefix: reversePrefix("abcdefd", "d") });

/**
 * @param {TreeNode | null} root 
 * @param {number} val 
 * @param {number} depth 
 * @returns {TreeNode | null}
 */
function addOneRow(root, val, depth) {
  if (!root) return null;
  if (depth === 1) return new TreeNode(val, root, null);

  if (depth === 2) {
    root.left = new TreeNode(val, root.left, null);
    root.right = new TreeNode(val, null, root.right);
  } else {
    root.left = addOneRow(root.left, val, depth - 1);
    root.right = addOneRow(root.right, val, depth - 1);
  }

  return root;
};

/**
 * @param {TreeNode | null} root 
 * @returns {string}
 */
function smallestFromLeaf(root) {
  let smallestString = "";

  /**
   * @param {TreeNode | null} node 
   * @param {string} currentString 
   * @returns {void}
   */
  function createString(node, currentString) {
    if (!node) return;

    currentString = String.fromCharCode(node.val + 97) + currentString;

    if (!node.left && !node.right) {
      if (smallestString === "" || smallestString > currentString) smallestString = currentString;
    }

    if (node.right) createString(node.right, currentString);

    if (node.left) createString(node.left, currentString);
  }

  createString(root, "");
  return smallestString;
};

/**
 * @param {number[][]} grid 
 * @returns {number}
 */
function islandPerimeter(grid) {
  const visited = new Set();

  /**
   * @param {number} i 
   * @param {number} j 
   * @returns {number}
   */
  function dfs(i, j) {
    if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === 0) return 1;
    if (visited.has(`${i}:${j}`)) return 0;

    visited.add(`${i}:${j}`);
    let perimeter = dfs(i, j + 1);
    perimeter += dfs(i + 1, j);
    perimeter += dfs(i, j - 1);
    perimeter += dfs(i - 1, j);

    return perimeter;
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col]) return dfs(row, col);
    }
  }
}
console.log({ islandPerimeter: islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]) });

/**
 * @param {string[][]} grid 
 * @returns {number}
 */
function numIslands(grid) {
  const rows = grid.length, cols = grid[0].length, visited = new Set();
  const directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];
  let islands = 0;

  /**
   * @param {number} row 
   * @param {number} col 
   * @returns {void}
   */
  function bfs(row, col) {
    const queue = [];
    queue.push([row, col]);
    visited.add(`${row}-${col}`);

    while (queue.length) {
      const value = queue.shift();

      for (let idx = 0; idx < 4; idx++) {
        const dr = value[0] + directions[idx][0], dc = value[1] + directions[idx][1];

        if (dr < 0 || dc < 0 || dr >= rows || dc >= cols) continue;
        if (dr === row && dc === col) continue;

        if (grid[dr][dc] === '1' && !visited.has(`${dr}-${dc}`)) {
          visited.add(`${dr}-${dc}`);
          queue.push([dr, dc]);
        }
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited.has(`${row}-${col}`) && grid[row][col] === '1') {
        bfs(row, col);
        islands++;
      }
    }
  }

  return islands;
}
console.log({ numIslands: numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]) });

/**
 * @param {number[][]} land 
 * @returns {number[][]}
 */
function findFarmland(land) {
  const ans = [], n = land.length, m = land[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j]) {
        let x = i, y = j;
        while (y < m && land[i][y])
          y++;
        y--;
        while (x < n && land[x][j])
          x++;
        x--;
        ans.push([i, j, x, y]);

        for (let k = i; k <= x; k++) {
          for (let l = j; l <= y; l++)
            land[k][l] = 0;
        }
      }
    }
  }

  return ans;
};
console.log({ findFarmland: findFarmland([[1, 0, 0], [0, 1, 1], [0, 1, 1]]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function sumOfUnique(nums) {
  const numCount = {};
  let sum = 0;

  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    if (numCount[num] === 1) sum += +num;
  }

  return sum;
};
console.log({ sumOfUnique: sumOfUnique([1, 2, 3, 2]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function countAsterisks(s) {
  let count = 0, shouldCount = true;

  for (const char of s) {
    if (char === "*" && shouldCount) count++;
    else if (char === "|") shouldCount = !shouldCount;
  }

  return count;
};
console.log({ countAsterisks: countAsterisks("l|*e*et|c**o|*de|") });

/**
 * @param {number} n 
 * @returns {number}
 */
function tribonacci(n) {
  const values = new Array(38);
  values[0] = 0;
  values[1] = values[2] = 1;

  for (let idx = 3; idx <= n; idx++) {
    values[idx] = values[idx - 3] + values[idx - 2] + values[idx - 1];
  }

  return values[n];
};
console.log({ tribonacci: tribonacci(4) });

/**
 * @param {string} sentence 
 * @returns {boolean}
 */
function checkIfPangram(sentence) {
  const charCount = new Array(26).fill(0);

  for (const char of sentence) {
    const charIdx = char.charCodeAt(0) - 97;
    charCount[charIdx]++;
  }

  return charCount.every(count => count >= 1);
};
console.log({ checkIfPangram: checkIfPangram("thequickbrownfoxjumpsoverthelazydog") });

/**
 * @param {(number | MultiDimensionalArray)[]} arr 
 * @param {number} n 
 * @returns {(number | MultiDimensionalArray)[]}
 */
function flat(arr, n) {
  const result = [];
  let depth = 0;

  for (let i = 0; i < arr.length; i++) {
    buildNums(arr[i]);
  }

  /**
   * @param {(number | MultiDimensionalArray)[] | number} num 
   * @returns {void}
   */
  function buildNums(num) {
    if (typeof num === "number") {
      result.push(num);
    } else {
      depth++;

      if (depth <= n) {
        for (let j = 0; j < num.length; j++) {
          buildNums(num[j]);
        }
      } else result.push(num);

      depth--;
    }
  }

  return result;
}
console.log({ flat: flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0) });

/**
 * @param {string} num 
 * @returns {boolean}
 */
function digitCount(num) {
  const numCount = new Array(10).fill(0);

  for (const digit of num) {
    numCount[digit]++;
  }

  for (let idx = 0; idx < num.length; idx++) {
    if (numCount[idx] !== +num[idx]) return false;
  }

  return true;
};
console.log({ digitCount: digitCount("1210") });

/**
 * @param {number} n 
 * @returns {number}
 */
function guessNumber(n) {
  let start = 1, end = n;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const result = guess(mid);

    if (result === 0) return mid;

    result === 1 ? start = mid + 1 : end = mid - 1;
  }

  return -1;
};
console.log({ guessNumber: guessNumber(10) });

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]}
 */
function intersect(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const commonNum = [];
  let first = 0, second = 0;

  while (first < nums1.length && second < nums2.length) {
    const num1 = nums1[first], num2 = nums2[second];

    if (num1 === num2) {
      commonNum.push(num1);
      first++;
      second++;
    } else if (num1 < num2) first++;
    else second++;
  }

  return commonNum;
}
console.log({ intersect: intersect([1, 2, 2, 1], [2, 2]) });

/**
 * @param {string[]} timeValues 
 * @returns {number[]}
 */
function getTime(timeValues) {
  return timeValues.map((time) => {
    const timeDetails = time.split(":");
    return Number(timeDetails[0]) * 60 + Number(timeDetails[1]);
  });
}

/**
 * @param {string[]} event1 
 * @param {string[]} event2 
 * @returns {boolean} 
 */
function haveConflict(event1, event2) {
  const time1 = getTime(event1), time2 = getTime(event2);
  if ((time2[0] >= time1[0] && time2[0] <= time1[1]) || (time1[0] >= time2[0] && time1[0] <= time2[1])) return true;
  return false;
}
console.log({ haveConflict: haveConflict(["01:15", "02:00"], ["02:00", "03:00"]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function findMaxK(nums) {
  nums.sort((a, b) => a - b);

  let start = 0, end = nums.length - 1;

  while (start <= end) {
    const sum = nums[start] + nums[end];

    if (sum > 0) end--;
    else if (sum < 0) start++;
    else return nums[end];
  }

  return -1;
};
console.log({ findMaxK: findMaxK([-10, 8, 6, 7, -2, -3]) });

/**
 * @param {string} version1 
 * @param {string} version2 
 * @returns {number}
 */
function compareVersion(version1, version2) {
  const ver1Values = version1.split("."), ver2Values = version2.split(".");
  let first = 0, second = 0;

  while (first < ver1Values.length || second < ver2Values.length) {
    const firstNum = +ver1Values[first++] || 0, secondNum = +ver2Values[second++] || 0;

    if (firstNum > secondNum) return 1;
    else if (firstNum < secondNum) return -1;
  }

  return 0;
};
console.log({ compareVersion: compareVersion("1.2", "1.10") });

/**
 * @param {ListNode | null} node 
 * @returns {number[]}
 */
function getMaxValues(node) {
  let maxValue = 0;
  const maxValues = [];

  while (node) {
    const value = node.val;
    maxValue = Math.max(maxValue, value);
    if (value >= maxValue) maxValues.push(value);
    node = node.next;
  }

  return maxValues;
}

/**
 * @param {ListNode | null} node 
 * @param {number[]} maxValues 
 * @returns {ListNode | null}
 */
function shrinkList(node, maxValues) {
  let updatedList = new ListNode(-1), previous = null;

  while (node) {
    const topValue = maxValues[maxValues.length - 1];

    if (node.val === topValue) {
      updatedList.next = new ListNode(topValue, previous);
      previous = updatedList.next;
      maxValues.pop();
    } else {
      node = node.next;
    }
  }

  return updatedList.next;
}

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function removeNodes(head) {
  const reversed = reverseList(head), maxValues = getMaxValues(reversed);
  const updatedList = shrinkList(head, maxValues);
  return reverseList(updatedList);
}

/**
 * @param {ListNode | null} node 
 * @returns {ListNode | null}
 */
function doubleDigits(node) {
  let carry = 0, current = node, lastNode = null;

  while (current) {
    const value = carry + 2 * current.val;
    carry = Math.floor(value / 10);
    current.val = value % 10;

    if (!current.next) lastNode = current;

    current = current.next;
  }

  if (carry) lastNode.next = new ListNode(carry);

  return node;
}

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function doubleIt(head) {
  const reversedList = reverseList(head);
  const doubledDigits = doubleDigits(reversedList);
  return reverseList(doubledDigits);
}

/**
 * @param {number[]} nums 
 * @param {number} n 
 * @returns {number[]} 
 */
function shuffle(nums, n) {
  const shuffled = [];
  let first = 0, second = n;

  while (first < n) {
    shuffled.push(nums[first++], nums[second++]);

  }

  return shuffled;
};
console.log({ shuffle: shuffle([2, 5, 1, 3, 4, 7], 3) });


/**
 * @param {number[]} score 
 * @returns {string[]}
 */
function findRelativeRanks(score) {
  const scoreToRank = {}, localScores = [...score].sort((a, b) => b - a), ranks = [];

  for (let idx = 0; idx < localScores.length; idx++) {
    if (idx === 0) scoreToRank[localScores[idx]] = "Gold Medal";
    else if (idx === 1) scoreToRank[localScores[idx]] = "Silver Medal";
    else if (idx === 2) scoreToRank[localScores[idx]] = "Bronze Medal";
    else scoreToRank[localScores[idx]] = `${idx + 1}`;
  }

  for (const eachScore of score) {
    ranks.push(scoreToRank[eachScore]);
  }

  return ranks;
};
console.log({ findRelativeRanks: findRelativeRanks([5, 4, 3, 2, 1]) });

/**
 * @param {number[]} happiness 
 * @param {number} k 
 * @returns {number}
 */
function maximumHappinessSum(happiness, k) {
  happiness.sort((a, b) => b - a);
  let totalHappinessSum = 0, turns = 0;

  for (let idx = 0; idx < k; idx++) {
    totalHappinessSum += Math.max(happiness[idx] - turns++, 0);
  }

  return totalHappinessSum;
};
console.log({ maximumHappinessSum: maximumHappinessSum([1, 2, 3], 2) });

/**
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number[]}
 */
function kthSmallestPrimeFraction(arr, k) {
  let left = 0, right = 1, res = [];

  while (left <= right) {
    const mid = left + (right - left) / 2, n = arr.length;
    let j = 1, total = 0, num = 0, den = 0, maxFrac = 0;

    for (let i = 0; i < n; i++) {
      while (j < n && arr[i] > arr[j] * mid) {
        j++;
      }

      total += n - j;

      if (j < n && maxFrac < arr[i] * 1.0 / arr[j]) {
        maxFrac = arr[i] * 1.0 / arr[j];
        num = i;
        den = j;
      }
    }

    if (total === k) {
      res = [arr[num], arr[den]];
      break;
    }

    if (total > k) right = mid;
    else left = mid;
  }

  return res;
};
console.log({ kthSmallestPrimeFraction: kthSmallestPrimeFraction([1, 2, 3, 5], 3) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function findDisappearedNumbers(nums) {
  for (const num of nums) {
    const index = Math.abs(num) - 1;
    if (nums[index] > 0) nums[index] = -nums[index];
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }

  return result;
}
console.log({ findDisappearedNumbers: findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]) });

/**
 * @param {number[][]} grid 
 * @param {number} x 
 * @param {number} y 
 * @returns {number}
 */
function findMax(grid, x, y) {
  let maxElement = 0;

  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      maxElement = Math.max(maxElement, grid[i][j]);
    }
  }

  return maxElement;
}

/**
 * @param {number[][]} grid 
 * @returns {number[][]}
 */
function largestLocal(grid) {
  const N = grid.length, maxLocal = [];

  for (let i = 0; i < N - 2; i++) {
    maxLocal[i] = [];

    for (let j = 0; j < N - 2; j++) {
      maxLocal[i][j] = findMax(grid, i, j);
    }
  }

  return maxLocal;
}
console.log({ largestLocal: largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]) });

/**
 * @param {number[][]} grid 
 * @returns {number}
 */
function matrixScore(grid) {
  let m = grid.length, n = grid[0].length;

  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        grid[i][j] = 1 - grid[i][j];
      }
    }
  }

  for (let j = 1; j < n; j++) {
    let countZero = 0;

    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 0) countZero++;
    }

    if (countZero > m - countZero) {
      for (let i = 0; i < m; i++) {
        grid[i][j] = 1 - grid[i][j];
      }
    }
  }

  let score = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let columnScore = grid[i][j] << (n - j - 1);
      score += columnScore;
    }
  }

  return score;
}
console.log({ matrixScore: matrixScore([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]) });

/**
 * @param {number[][]} grid 
 * @returns {number}
 */
function getMaximumGold(grid) {
  const row = grid.length, col = grid[0].length;
  let maxGold = 0;

  /**
   * @param {number} i 
   * @param {number} j 
   * @param {number} currentGold 
   * @returns {number}
   */
  function dfsBacktrack(i, j, currentGold) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === 0) return;

    const goldInCurrentCell = grid[i][j];
    currentGold += goldInCurrentCell;

    grid[i][j] = 0;

    maxGold = Math.max(maxGold, currentGold);

    dfsBacktrack(i + 1, j, currentGold);
    dfsBacktrack(i - 1, j, currentGold);
    dfsBacktrack(i, j + 1, currentGold);
    dfsBacktrack(i, j - 1, currentGold);

    grid[i][j] = goldInCurrentCell;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] !== 0) dfsBacktrack(i, j, 0);
    }
  }

  return maxGold;
}
console.log({ getMaximumGold: getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function balancedStringSplit(s) {
  let count = 0, result = 0;

  for (const char of s) {
    if (char === "L") count++;
    else count--;
    if (count === 0) result++;
  }

  return result;
};
console.log({ balancedStringSplit: balancedStringSplit("RLRRLLRLRL") });

/**
 * @param {TreeNode | null} root 
 * @returns {boolean} 
 */
function evaluateTree(root) {
  if (!root.left && !root.right) return root.val === 1;

  const leftTree = evaluateTree(root.left);
  const rightTree = evaluateTree(root.right);

  let status = null;

  if (root.val === 2) status = leftTree || rightTree;
  else status = leftTree && rightTree;
  return status;
}

/**
 * 
 * @param {TreeNode | null} root 
 * @param {number} target 
 * @returns {TreeNode | null}
 */
function removeLeafNodes(root, target) {
  if (!root) return null;

  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  if (!root.left && !root.right && root.val === target) return null;
  return root;
};

/**
 * @param {TreeNode | null} root 
 * @returns {number}
 */
function distributeCoins(root) {
  let noOfMoves = 0;

  /**
   * @param {TreeNode | null} node 
   * @returns {number}
   */
  function getMoves(node) {
    if (!node) return 0;
    const leftExtra = getMoves(node.left);
    const rightExtra = getMoves(node.right);
    const extraCoins = node.val + leftExtra + rightExtra - 1;
    noOfMoves += Math.abs(extraCoins);
    return extraCoins;
  }

  getMoves(root);
  return noOfMoves;
};

/**
 * @param {number[][]} matrix 
 * @returns {number[][]}
 */
function flipRows(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    let start = 0, end = matrix[row].length - 1;

    while (start <= end) {
      const temp = matrix[row][start];
      matrix[row][start] = matrix[row][end];
      matrix[row][end] = temp;
      start++;
      end--;
    }
  }

  return matrix;
}

/**
 * @param {number[][]} matrix 
 * @returns {number[][]}
 */
function invertRows(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      matrix[row][col] ^= 1;
    }
  }

  return matrix;
}

/**
 * @param {number[][]} image 
 * @returns {number[][]}
 */
function flipAndInvertImage(image) {
  return invertRows(flipRows(image));
}
console.log({ flipAndInvertImage: flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function countGoodSubstrings(s) {
  let count = 0;
  const limit = 3;

  for (let idx = 0; idx < s.length - 2; idx++) {
    const first = s[idx], second = s[idx + 1], third = s[idx + 2];
    const charSet = new Set([first, second, third]);
    if (charSet.size === limit) count++;
  }

  return count;
};
console.log({ countGoodSubstrings: countGoodSubstrings("xyzzaz") });

/**
 * @param {string[]} words 
 * @param {string} pref 
 * @returns {number}
 */
function prefixCount(words, pref) {
  let wordCount = 0;

  for (const word of words) {
    let idx = 0;

    while (idx < pref.length) {
      if (word[idx] === pref[idx]) idx++;
      else break;
    }

    if (idx === pref.length) wordCount++;
  }

  return wordCount;
};
console.log({ prefixCount: prefixCount(["pay", "attention", "practice", "attend"], "at") });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function subsetXORSum(nums) {
  let result = 0;

  for (const num of nums) {
    result |= num;
  }

  return result << (nums.length - 1);
};
console.log({ subsetXORSum: subsetXORSum([1, 3]) });

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[][]}
 */
function findDifference(nums1, nums2) {
  const first = new Set(nums1), second = new Set(nums2);
  const result = [[], []];

  for (const num of first) {
    if (!second.has(num)) result[0].push(num);
  }

  for (const num of second) {
    if (!first.has(num)) result[1].push(num);
  }

  return result;
};
console.log({ findDifference: findDifference([1, 2, 3], [2, 4, 6]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minMaxGame(nums) {
  while (nums.length > 1) {
    let newNums = [], n = 1;

    for (let idx = 0; idx < nums.length; idx += 2) {
      if (n % 2 !== 0)
        newNums.push(Math.min(nums[idx], nums[idx + 1]));
      else newNums.push(Math.max(nums[idx], nums[idx + 1]));
      n++;
    }

    nums = [...newNums];
    n = 1;
  }

  return nums[0];
}
console.log({ minMaxGame: minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]) });

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @param {number[]} nums3 
 * @returns {number[]}
 */
function twoOutOfThree(nums1, nums2, nums3) {
  const numCount = {}, result = [];
  const set1 = new Set(nums1), set2 = new Set(nums2), set3 = new Set(nums3);

  for (const num of set1) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num of set2) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num of set3) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    if (numCount[num] >= 2) result.push(+num);
  }

  return result;
};
console.log({ twoOutOfThree: twoOutOfThree([1, 1, 3, 2], [2, 3], [3]) });

/**
 * @param {string[]} logs 
 * @returns {number}
 */
function minOperations(logs) {
  let distance = 0;

  for (const path of logs) {
    if (path === "./" || (path === "../" && distance === 0)) continue;
    else if (path === "../") distance--;
    else distance++;
  }

  return distance;
}
console.log({ minOperations: minOperations(["d1/", "d2/", "../", "d21/", "./"]) });

/**
 * @param {string} str 
 * @param {number} left 
 * @param {number} right 
 * @returns {boolean}
 */
function isSubStrPalindrome(str, left, right) {
  while (left < right) {
    if (str[left++] !== str[right--]) return false;
  }

  return true;
}

/**
 * @param {string} s 
 * @returns {string[][]}
 */
function partition(s) {
  const result = [];

  /**
   * @param {number} idx 
   * @param {string[]} part 
   * @returns 
   */
  function getSubStrings(idx, part) {
    if (idx >= s.length) {
      result.push([...part]);
      return;
    }

    for (let pos = idx; pos < s.length; pos++) {
      if (isSubStrPalindrome(s, idx, pos)) {
        part.push(s.slice(idx, pos + 1));
        getSubStrings(pos + 1, part);
        part.pop();
      }
    }
  }

  getSubStrings(0, []);
  return result;
}
console.log({ partition: partition("aab") });

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function findLucky(arr) {
  const numCount = {};
  let largestLuckyNumber = -1;

  for (const num of arr) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    if (+num === numCount[num]) largestLuckyNumber = Math.max(largestLuckyNumber, +num);
  }

  return largestLuckyNumber;
};
console.log({ findLucky: findLucky([2, 2, 3, 4]) });

/**
 * @param {string} char 
 * @returns {boolean}
 */
function isLetter(char) {
  const charCode = char.charCodeAt(0);
  const isUpperCaseLetter = charCode <= 90 && charCode >= 65;
  const isLowerCaseLetter = charCode <= 122 && charCode >= 97;
  return isUpperCaseLetter || isLowerCaseLetter;
}

/**
 * @param {string} s 
 * @returns {string}
 */
function reverseOnlyLetters(s) {
  let start = 0, end = s.length - 1;
  const result = s.split("");

  while (start < end) {
    if (isLetter(s[start]) && isLetter(s[end])) [result[start++], result[end--]] = [result[end], result[start]];
    else if (!isLetter(s[start])) start++;
    else if (!isLetter(s[end])) end--;
  }

  return result.join("");
};
console.log({ reverseOnlyLetters: reverseOnlyLetters("ab-cd") });

/**
 * @param {string} text 
 * @returns {number}
 */
function maxNumberOfBalloons(text) {
  const charCount = { a: 0, b: 0, l: 0, n: 0, o: 0 };

  for (const char of text) {
    if (char === "a") charCount[char]++;
    else if (char === "b") charCount[char]++;
    else if (char === "l") charCount[char]++;
    else if (char === "n") charCount[char]++;
    else if (char === "o") charCount[char]++;
  }

  return Math.min(charCount.a, charCount.b, Math.floor(charCount.l / 2), Math.floor(charCount.o / 2), charCount.n);
}
console.log({ maxNumberOfBalloons: maxNumberOfBalloons("nlaebolko") });

/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function beautifulSubsets(nums, k) {
  const numCount = {};

  for (const num of nums) {
    numCount[num] = 0;
  }

  /**
   * @param {number} idx 
   * @returns {number}
   */
  function countBeautifulSubsets(idx) {
    if (idx === nums.length) return 1;

    let totalCount = countBeautifulSubsets(idx + 1);

    if (!numCount[nums[idx] + k] && !numCount[nums[idx] - k]) {
      numCount[nums[idx]]++;
      totalCount += countBeautifulSubsets(idx + 1);
      numCount[nums[idx]]--;
    }

    return totalCount;
  }

  return countBeautifulSubsets(0) - 1;
};
console.log({ beautifulSubsets: beautifulSubsets([2, 4, 6], 2) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function findClosestNumber(nums) {
  let closestNumber = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    const absNum = Math.abs(closestNumber);
    if (Math.abs(num) < absNum) closestNumber = num;
    else if (num === absNum) closestNumber = num;
  }

  return closestNumber;
};
console.log({ findClosestNumber: findClosestNumber([-4, -2, 1, 4, 8]) });

/**
 * @param {string} coordinates 
 * @returns {boolean}
 */
function squareIsWhite(coordinates) {
  const char = coordinates[0].charCodeAt(0) - 97, number = +coordinates[1];
  return ((char % 2 !== 0 && number % 2 !== 0) || (char % 2 === 0 && number % 2 === 0));
}
console.log({ squareIsWhite: squareIsWhite("a1") });

/**
 * @param {TreeNode | null} root 
 * @returns {number[]}
 */
function averageOfLevels(root) {
  const average = [], nodes = [root];

  while (nodes.length) {
    const length = nodes.length;
    let sum = 0;

    for (let idx = 0; idx < length; idx++) {
      const node = nodes.shift();
      sum += node.val;
      if (node.left) nodes.push(node.left);
      if (node.right) nodes.push(node.right);
    }

    average.push(sum / length);
  }

  return average;
};

/**
 * @param {string} s 
 * @returns {string}
 */
function sortSentence(s) {
  return s
    .split(' ')
    .sort((a, b) => +a[a.length - 1] - +b[b.length - 1])
    .map((word) => word.slice(0, word.length - 1))
    .join(' ');
}
console.log({ sortSentence: sortSentence("is2 sentence4 This1 a3") });

/**
 * @param {string} s 
 * @returns {boolean}
 */
function areNumbersAscending(s) {
  const digits = s.split(' ').filter((word) => +word >= 0);

  for (let idx = 0; idx < digits.length - 1; idx++) {
    const current = +digits[idx], next = +digits[idx + 1];
    if (current >= next) return false;
  }

  return true;
}
console.log({ areNumbersAscending: areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles") });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function specialArray(nums) {
  nums.sort((a, b) => a - b);
  let prevNum = -1, totalRight = nums.length, idx = 0;

  while (idx < nums.length) {
    if (nums[idx] === totalRight || (prevNum < totalRight && totalRight < nums[idx]))
      return totalRight;

    while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) idx++;

    prevNum = nums[idx];
    idx++;
    totalRight = nums.length - idx;
  }

  return -1;
}
console.log({ specialArray: specialArray([3, 5]) });

/**
 * @param {string} s 
 * @param {string} t 
 * @param {number} maxCost 
 * @returns {number}
 */
function equalSubstring(s, t, maxCost) {
  let currentCost = 0, left = 0, result = 0;

  for (let right = 0; right < s.length; right++) {
    currentCost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

    while (currentCost > maxCost) {
      currentCost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
console.log({ equalSubstring: equalSubstring("abcd", "bcdf", 3) });

/**
 * @param {string} s 
 * @returns {number}
 */
function numSteps(s) {
  let stepCount = 0, carry = 0;

  for (let idx = s.length - 1; idx >= 1; idx--) {
    const digit = (parseInt(s[idx]) + carry) % 2;

    if (digit === 0) stepCount++;
    else if (digit === 1) {
      carry = 1;
      stepCount += 2;
    }
  }

  return stepCount + carry;
}
console.log({ numSteps: numSteps("1101") });

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function countTriplets(arr) {
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let cur = arr[i];

    for (let k = i + 1; k < arr.length; k++) {
      cur ^= arr[k];

      if (cur === 0) result += k - i;
    }
  }

  return result;
}
console.log({ countTriplets: countTriplets([2, 3, 1, 6, 7]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function scoreOfString(s) {
  let score = 0;

  for (let idx = 0; idx < s.length - 1; idx++) {
    const current = s[idx].charCodeAt(0), next = s[idx + 1].charCodeAt(0);
    score += Math.abs(current - next);
  }

  return score;
}
console.log({ scoreOfString: scoreOfString("hello") });

/**
 * @param {string} s 
 * @returns {string}
 */
function reverseVowels(s) {
  const chars = s.split("");
  let left = 0, right = s.length - 1;

  while (left <= right) {
    if (!isVowel(chars[left].toLowerCase())) left++;
    else if (!isVowel(chars[right].toLowerCase())) right--;
    else if (isVowel(chars[left].toLowerCase()) && isVowel(chars[right].toLowerCase())) [chars[left++], chars[right--]] = [chars[right], chars[left]];
  }

  return chars.join("");
}
console.log({ reverseVowels: reverseVowels("IceCreAm") });

/**
 * @param {string} s 
 */
function reverseString(s) {
  let left = 0, right = s.length - 1;

  while (left <= right) {
    [s[left++], s[right--]] = [s[right], s[left]];
  }
}

/**
 * @param {string} s 
 * @returns {string}
 */
function finalString(s) {
  const result = [];

  for (const char of s) {
    if (char === "i") reverseString(result);
    else result.push(char);
  }

  return result.join("");
};
console.log({ finalString: finalString("leetcode is the best platform") });

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {number}
 */
function appendCharacters(s, t) {
  let first = 0, second = 0;

  while (first < s.length && second < t.length) {
    if (s[first] === t[second]) {
      first++;
      second++;
    } else first++;
  }

  return t.length - second;
};
console.log({ appendCharacters: appendCharacters("coaching", "coding") });

/**
 * @param {string} s 
 * @returns {number}
 */
function longestPalindrome(s) {
  const charSeen = new Set();
  let length = 0;

  for (const char of s) {
    if (charSeen.has(char)) {
      charSeen.delete(char);
      length += 2;
    } else charSeen.add(char);
  }

  return charSeen.size > 0 ? length + 1 : length;
};
console.log({ longestPalindrome: longestPalindrome("abccccdd") });

/**
 * @param {string[]} words 
 * @returns {string[]}
 */
function commonChars(words) {
  const commonCharCounts = new Array(26).fill(0), currentCharCounts = new Array(26);
  const result = [];

  for (const char of words[0]) {
    commonCharCounts[char.charCodeAt(0) - 97]++;
  }

  for (let idx = 1; idx < words.length; idx++) {
    currentCharCounts.fill(0);

    for (const char of words[idx]) {
      currentCharCounts[char.charCodeAt(0) - 97]++;
    }

    for (let letter = 0; letter < 26; letter++) {
      commonCharCounts[letter] = Math.min(commonCharCounts[letter], currentCharCounts[letter]);
    }
  }

  for (let letter = 0; letter < 26; letter++) {
    for (let count = 0; count < commonCharCounts[letter]; count++) {
      result.push(String.fromCharCode(letter + 97));
    }
  }

  return result;
}
console.log({ commonChars: commonChars(["bella", "label", "roller"]) });

/**
 * @param {number[]} hand 
 * @param {number} groupSize 
 * @returns {boolean}
 */
function isNStraightHand(hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  const count = new Map();

  for (const card of hand) {
    count.set(card, (count.get(card) || 0) + 1);
  }

  const sortedKeys = Array.from(count.keys()).sort((a, b) => a - b);

  for (const key of sortedKeys) {
    if (count.get(key) > 0) {
      const num = count.get(key);

      for (let i = 0; i < groupSize; i++) {
        if ((count.get(key + i) || 0) < num) return false;
        count.set(key + i, count.get(key + i) - num);
      }
    }
  }

  return true;
}
console.log({ isNStraightHand: isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {boolean}
 */
function checkSubarraySum(nums, k) {
  let prefixMod = 0;
  const modSeen = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    prefixMod = (prefixMod + nums[i]) % k;

    if (prefixMod in modSeen) {
      if ((i - modSeen[prefixMod]) > 1) return true;
    } else modSeen[prefixMod] = i;
  }

  return false;
}
console.log({ checkSubarraySum: checkSubarraySum([23, 2, 4, 6, 7], 6) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function subarraySum(nums, k) {
  let count = 0, currentSum = 0;
  const prefixSum = { 0: 1 };

  for (const num of nums) {
    currentSum += num;
    const difference = currentSum - k;
    count += prefixSum[difference] || 0;
    prefixSum[currentSum] = 1 + (prefixSum[currentSum] || 0);
  }

  return count;
}
console.log({ subarraySum: subarraySum([1, 1, 1], 2) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function subarraysDivByK(nums, k) {
  let prefixSum = 0, count = 0;
  const remainderCount = { 0: 1 };

  for (const num of nums) {
    prefixSum += num;
    const remainder = (prefixSum % k + k) % k;

    if (remainder in remainderCount) {
      count += remainderCount[remainder];
      remainderCount[remainder]++;
    } else remainderCount[remainder] = 1;
  }

  return count;
}
console.log({ subarraysDivByK: subarraysDivByK([4, 5, 0, -2, -3, 1], 5) });

/**
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const maxElement = Math.max(...arr1);
  const numCount = new Array(maxElement + 1).fill(0);
  const result = [];

  for (const num of arr1) {
    numCount[num]++;
  }

  for (const num of arr2) {
    while (numCount[num]) {
      result.push(num);
      numCount[num]--;
    }
  }

  for (let idx = 0; idx <= maxElement; idx++) {
    while (numCount[idx]) {
      result.push(idx);
      numCount[idx]--;
    }
  }

  return result;
}
console.log({ relativeSortArray: relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function sortColors(nums) {
  let low = 0, high = nums.length - 1, mid = 0;

  while (mid <= high) {
    if (nums[mid] === 0) [nums[low++], nums[mid++]] = [nums[mid], nums[low]];
    else if (nums[mid] === 1) mid++;
    else[nums[high--], nums[mid]] = [nums[mid], nums[high]];
  }

  return nums;
}
console.log({ sortColors: sortColors([2, 0, 2, 1, 1, 0]) });

/**
 * @param {number[]} seats 
 * @param {number[]} students 
 * @returns {number}
 */
function minMovesToSeat(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let moves = 0;

  for (let idx = 0; idx < seats.length; idx++) {
    moves += Math.abs(seats[idx] - students[idx]);
  }

  return moves;
}
console.log({ minMovesToSeat: minMovesToSeat([3, 1, 5], [2, 7, 4]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minOperations(nums) {
  let moves = 0;

  for (let idx = 1; idx < nums.length; idx++) {
    const previous = nums[idx - 1], current = nums[idx];

    if (current <= previous) {
      const value = Math.max(current, previous + 1);
      nums[idx] = value;
      moves += value - current;
    }
  }

  return moves;
}

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minIncrementForUnique(nums) {
  nums.sort((a, b) => a - b);
  return minOperations(nums);
}
console.log({ minIncrementForUnique: minIncrementForUnique([3, 2, 1, 2, 1, 7]) });

/**
 * @param {string} columnTitle 
 * @returns {number}
 */
function titleToNumber(columnTitle) {
  let columnNumber = 0;
  const length = columnTitle.length;

  for (let idx = 0; idx < length; idx++) {
    columnNumber += 26 ** (length - idx - 1) * (columnTitle[idx].charCodeAt(0) - 64);
  }

  return columnNumber;
}
console.log({ titleToNumber: titleToNumber("AB") });

/**
 * @param {string} pattern 
 * @param {string} s 
 * @returns {boolean}
 */
function wordPattern(pattern, s) {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const charMap = {};
  const isWordSeen = new Set();

  for (let idx = 0; idx < pattern.length; idx++) {
    const char = pattern[idx], word = words[idx];
    if (!charMap[char] && !isWordSeen.has(word)) {
      charMap[char] = word;
      isWordSeen.add(word);
    }
  }

  for (let idx = 0; idx < pattern.length; idx++) {
    if (charMap[pattern[idx]] !== words[idx]) return false;
  }

  return true;
}
console.log({ wordPattern: wordPattern("abba", "dog cat cat dog") });

/**
 * @param {number} num 
 * @returns {boolean}
 */
function isPerfectSquare(num) {
  let start = 0, end = num;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (mid * mid === num) return true;
    else if (mid * mid > num) end = mid - 1;
    else start = mid + 1;
  }

  return false;
}
console.log({ isPerfectSquare: isPerfectSquare(16) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function sumOfSquares(nums) {
  let specialSum = 0;

  for (let i = 1; i <= nums.length; i++) {
    if (nums.length % i === 0) specialSum += nums[i - 1] ** 2;
  }

  return specialSum;
}
console.log({ sumOfSquares: sumOfSquares([1, 2, 3, 4]) });

/**
 * @param {number} c 
 * @returns {boolean}
 */
function judgeSquareSum(c) {
  let start = 0, end = Math.floor(Math.sqrt(c));

  while (start <= end) {
    const sumSquared = start ** 2 + end ** 2;

    if (sumSquared === c) return true;
    else if (sumSquared > c) end--;
    else start++;
  }

  return false;
}
console.log({ judgeSquareSum: judgeSquareSum(5) });

/**
 * @param {number[]} difficulty 
 * @param {number[]} profit 
 * @param {number[]} worker 
 * @returns {number}
 */
function maxProfitAssignment(difficulty, profit, worker) {
  let maxProfit = 0, currentIdx = 0;
  let currentDifficulty = 0;
  worker.sort((a, b) => a - b);

  const difficultyWithProfit = [];

  for (let idx = 0; idx < difficulty.length; idx++) {
    difficultyWithProfit.push([difficulty[idx], profit[idx]]);
  }
  difficultyWithProfit.sort((a, b) => a[0] - b[0]);

  for (let workerIdx = 0; workerIdx < worker.length; workerIdx++) {
    for (let idx = currentIdx; idx < difficultyWithProfit.length; idx++) {
      if (worker[workerIdx] >= difficultyWithProfit[idx][0]) {
        currentIdx = idx;
        currentDifficulty = Math.max(currentDifficulty, difficultyWithProfit[idx][1]);
      }
    }
    maxProfit += currentDifficulty;
  }

  return maxProfit;
}
console.log({ maxProfitAssignment: maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]) });

/**
 * @param {number[]} bloomDay 
 * @param {number} mid 
 * @param {number} k 
 * @returns {number}
 */
function getNumOfBouquets(bloomDay, mid, k) {
  let numOfBouquets = 0, count = 0;

  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] <= mid) count++;
    else count = 0;

    if (count === k) {
      numOfBouquets++;
      count = 0;
    }
  }

  return numOfBouquets;
}

/**
 * @param {number[]} bloomDay 
 * @param {number} m 
 * @param {number} k 
 * @returns {number}
 */
function minDays(bloomDay, m, k) {
  let start = 0, end = 0;

  for (const day of bloomDay) {
    end = Math.max(end, day);
  }

  let minDays = -1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (getNumOfBouquets(bloomDay, mid, k) >= m) {
      minDays = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return minDays;
}
console.log({ minDays: minDays([1, 10, 3, 10, 2], 3, 1) });

/**
 * @param {number[]} nums 
 * @param {number} mid 
 * @returns {number}
 */
function getDivisor(nums, mid) {
  let total = 0;

  for (const num of nums) {
    total += Math.ceil(num / mid);
  }

  return total;
}

/**
 * @param {number[]} piles 
 * @param {number} h 
 * @returns {number}
 */
function minEatingSpeed(piles, h) {
  let start = 0, end = Math.max(...piles);

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (getDivisor(piles, mid) > h) start = mid + 1;
    else end = mid;
  }

  return start;
}
console.log({ minEatingSpeed: minEatingSpeed([3, 6, 7, 11], 8) });

/**
 * @param {number[]} nums 
 * @param {number} threshold 
 * @returns {number}
 */
function smallestDivisor(nums, threshold) {
  let start = 0, end = Math.max(...nums);

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (getDivisor(nums, mid) > threshold) start = mid + 1;
    else end = mid;
  }

  return start;
}
console.log({ smallestDivisor: smallestDivisor([1, 2, 5, 9], 6) });

/**
 * @param {number[]} arr 
 * @param {number} dist 
 * @param {number} balls 
 * @returns {boolean}
 */
function canPlace(arr, dist, balls) {
  let count = 1, lastPlaced = arr[0];

  for (let idx = 1; idx < arr.length; idx++) {
    if (arr[idx] - lastPlaced >= dist) {
      count++;
      lastPlaced = arr[idx];
    }

    if (count >= balls) return true;
  }

  return false;
}

/**
 * @param {number[]} position 
 * @param {number} m 
 * @returns {number}
 */
function maxDistance(position, m) {
  position.sort((a, b) => a - b);

  let low = 1, result = 1;
  let high = Math.floor((position[position.length - 1] - position[0]) / (m - 1));

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (canPlace(position, mid, m)) {
      result = mid;
      low = mid + 1;
    } else high = mid - 1;
  }

  return result;
}
console.log({ maxDistance: maxDistance([1, 2, 8, 4, 9], 3) });

/**
 * @param {number[]} customers 
 * @param {number[]} grumpy 
 * @param {number} minutes 
 * @returns {number}
 */
function maxSatisfied(customers, grumpy, minutes) {
  let left = 0, satisfied = 0;
  let currentWindow = 0, maxWindow = 0;

  for (let right = 0; right < customers.length; right++) {
    if (grumpy[right]) currentWindow += customers[right];
    else satisfied += customers[right];

    if (right - left + 1 > minutes) {
      if (grumpy[left]) currentWindow -= customers[left];
      left++;
    }

    maxWindow = Math.max(maxWindow, currentWindow);
  }

  return satisfied + maxWindow;
}
console.log({ maxSatisfied: maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function numberOfSubarrays(nums, k) {
  let count = 0, oddNums = 0;
  let left = 0, middle = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 === 1) oddNums++;

    while (oddNums > k) {
      if (nums[left] % 2 === 1) oddNums--;
      middle = ++left;
    }

    if (oddNums === k) {
      while (nums[middle] % 2 === 0) middle++;
      count += middle - left + 1;
    }
  }

  return count;
}
console.log({ numberOfSubarrays: numberOfSubarrays([1, 1, 2, 1, 1], 3) });

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function getPivot(arr) {
  let start = 0, end = arr.length - 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    arr[mid] >= arr[0] ? (start = mid + 1) : (end = mid);
  }

  return start;
}

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function findMin(nums) {
  const updatedNums = [...new Set(nums)];
  const pivot = getPivot(updatedNums);
  return updatedNums[pivot] > updatedNums[0] ? updatedNums[0] : updatedNums[pivot];
}
console.log({ findMin: findMin([2, 2, 2, 0, 1]) });

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {boolean}
 */
function search(nums, target) {
  let start = 0, end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) return true;

    if (nums[start] === nums[mid] && nums[mid] === nums[end]) {
      start++;
      end--;
      continue;
    }

    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else {
      if (nums[mid] <= target && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    }
  }

  return false;
}
console.log({ search: search([4, 5, 6, 7, 0, 1, 2], 0) });

/**
 * @param {TreeNode | null} root 
 * @returns {TreeNode | null}
 */
function bstToGst(root) {
  let nodeSum = 0;

  /**
   * @param {TreeNode | null} node 
   */
  function bstToGstHelper(node) {
    if (!node) return;

    bstToGstHelper(node.right);
    nodeSum += node.val;
    node.val = nodeSum;
    bstToGstHelper(node.left);
  }

  bstToGstHelper(root);
  return root;
}

/**
 * @param {TreeNode | null} root 
 * @returns {TreeNode | null}
 */
function convertBST(root) {
  let nodeSum = 0;

  /**
   * @param {TreeNode | null} node 
   */
  function bstToGstHelper(node) {
    if (!node) return;

    bstToGstHelper(node.right);
    nodeSum += node.val;
    node.val = nodeSum;
    bstToGstHelper(node.left);
  }

  bstToGstHelper(root);
  return root;
}

/**
 * @param {number[][]} nums 
 * @returns {number}
 */
function numberOfPoints(nums) {
  const points = new Set();

  for (const num of nums) {
    while (num[0] <= num[1]) points.add(num[0]++);
  }

  return points.size;
}
console.log({ numberOfPoints: numberOfPoints([[1, 3], [2, 5]]) });

/**
 * @param {number[]} mountain 
 * @returns {number[]}
 */
function findPeaks(mountain) {
  const peakIndices = [];

  for (let idx = 1; idx < mountain.length - 1; idx++) {
    const prev = mountain[idx - 1], curr = mountain[idx], next = mountain[idx + 1];
    if (curr > prev && curr > next) peakIndices.push(idx);
  }

  return peakIndices;
}
console.log({ findPeaks: findPeaks([2, 4, 4]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function findPeakElement(nums) {
  let start = 0, end = nums.length - 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] < nums[mid + 1]) start = mid + 1;
    else end = mid;
  }

  return start;
}
console.log({ findPeakElement: findPeakElement([1, 2, 3, 1]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function countHillValley(nums) {
  const uniqueNums = [];

  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] === nums[idx + 1]) continue;
    else uniqueNums.push(nums[idx]);
  }

  let count = 0;

  for (let idx = 1; idx < uniqueNums.length - 1; idx++) {
    const prev = uniqueNums[idx - 1], curr = uniqueNums[idx], next = uniqueNums[idx + 1];
    if ((curr > prev && curr > next) || (curr < prev && curr < next)) count++;
  }

  return count;
}
console.log({ countHillValley: countHillValley([2, 4, 1, 1, 6, 5]) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function separateDigits(nums) {
  const digits = [];

  for (let idx = 0; idx < nums.length; idx++) {
    let num = nums[idx];
    const currentDigits = [];

    while (num > 0) {
      currentDigits.unshift(num % 10);
      num = Math.floor(num / 10);
    }

    digits.push(...currentDigits);
  }

  return digits;
}
console.log({ separateDigits: separateDigits([13, 25, 83, 77]) });

/**
 * @param {number[]} arr 
 * @returns {boolean}
 */
function threeConsecutiveOdds(arr) {
  if (arr.length < 3) return false;

  for (let idx = 0; idx < arr.length - 2; idx++) {
    if (arr[idx] % 2 === 1 && arr[idx + 1] % 2 === 1 && arr[idx + 2] % 2 === 1) return true;
  }

  return false;
}
console.log({ threeConsecutiveOdds: threeConsecutiveOdds([2, 6, 4, 1]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minDifference(nums) {
  if (nums.length <= 4) return 0;

  nums.sort((a, b) => a - b);

  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let left = 0, right = nums.length - 4; left < 4; left++, right++) {
    minDiff = Math.min(minDiff, nums[right] - nums[left]);
  }

  return minDiff;
}
console.log({ minDifference: minDifference([5, 3, 2, 4]) });

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function mergeNodes(head) {
  let valuePtr = head;
  let resultList = null;
  let sum = 0;
  let isFirstNode = true;
  let currentResultNode = null;

  while (valuePtr) {
    sum += valuePtr.val;

    if (valuePtr.val === 0) {
      if (isFirstNode) {
        resultList = new ListNode(sum);
        currentResultNode = resultList;
        isFirstNode = false;
      } else {
        currentResultNode.next = new ListNode(sum);
        currentResultNode = currentResultNode.next;
      }
      sum = 0;
    }

    valuePtr = valuePtr.next;
  }

  return resultList.next;
}

/**
 * @param {ListNode | null} head 
 * @returns {number[]}
 */
function nodesBetweenCriticalPoints(head) {
  const distance = [-1, -1];
  let current = head.next, previous = head;
  let currentIndex = 1, previousCriticalIndex = 0, firstCriticalIndex = 0;
  let minDistance = Number.MAX_SAFE_INTEGER;

  while (current.next) {
    const left = previous.val;
    const center = current.val;
    const right = current.next.val;

    if ((center > left && center > right) || (center < left && center < right)) {
      if (previousCriticalIndex === 0) {
        previousCriticalIndex = currentIndex;
        firstCriticalIndex = currentIndex;
      } else {
        minDistance = Math.min(minDistance, currentIndex - previousCriticalIndex);
        previousCriticalIndex = currentIndex;
      }
    }

    previous = current;
    current = current.next;
    currentIndex++;
  }

  if (minDistance !== Number.MAX_SAFE_INTEGER) {
    distance[0] = minDistance;
    distance[1] = previousCriticalIndex - firstCriticalIndex;
  }

  return distance;
}

/**
 * @param {number} n 
 * @param {number} time 
 * @returns {number} 
 */
function passThePillow(n, time) {
  const rounds = Math.floor(time / (n - 1));
  const remainder = time % (n - 1);
  return rounds % 2 === 1 ? n - remainder : remainder + 1;
}
console.log({ passThePillow: passThePillow(10, 2) });

/**
 * @param {number} numBottles 
 * @param {number} numExchange 
 * @returns {number}
 */
function numWaterBottles(numBottles, numExchange) {
  if (numExchange > numBottles) return numBottles;

  let emptyBottles = numBottles, extraBottles = 0;

  while (emptyBottles > 0) {
    emptyBottles = emptyBottles - numExchange + 1;
    if (emptyBottles > 0) extraBottles++;
  }

  return numBottles + extraBottles;
}
console.log({ numWaterBottles: numWaterBottles(9, 3) });

/**
 * @param {number} n 
 * @param {number} k 
 * @returns {number}
 */
function findTheWinner(n, k) {
  let ans = 0;

  for (let idx = 2; idx <= n; idx++) {
    ans = (ans + k) % idx;
  }

  return ans + 1;
}
console.log({ findTheWinner: findTheWinner(5, 2) });

/**
 * @param {number[][]} customers 
 * @returns {number}
 */
function averageWaitingTime(customers) {
  let waitingTime = 0, currentTime = 0;

  for (const [arrival, wait] of customers) {
    currentTime = Math.max(currentTime, arrival) + wait;
    waitingTime += currentTime - arrival;
  }

  return waitingTime / customers.length;
}
console.log({ averageWaitingTime: averageWaitingTime([[1, 2], [2, 5], [4, 3]]) });

/**
 * @param {string} s 
 * @returns {string[]}
 */
function cellsInRange(s) {
  const cells = [];

  for (let charIdx = s[0].charCodeAt(0); charIdx <= s[3].charCodeAt(0); charIdx++) {
    for (let numIdx = +s[1]; numIdx <= +s[4]; numIdx++) {
      cells.push(`${String.fromCharCode(charIdx)}${numIdx}`);
    }
  }

  return cells;
}
console.log({ cellsInRange: cellsInRange("K1:L2") });

/**
 * @param {string[]} arr 
 * @param {number} left 
 * @param {number} right 
 */
function reverseInterval(arr, left, right) {
  while (left < right) {
    [arr[left++], arr[right--]] = [arr[right], arr[left]];
  }
}

/**
 * @param {string} s 
 * @returns {string}
 */
function reverseParentheses(s) {
  const result = s.split('');
  const closingStack = [];

  for (let idx = result.length - 1; idx >= 0; idx--) {
    if (s.at(idx) === ")") closingStack.push(idx);

    if (s.at(idx) === "(") {
      const last = closingStack.pop();
      result[idx] = null;
      result[last] = null;
      reverseInterval(result, idx + 1, last - 1);
    }
  }

  return result.join('');
}
console.log({ reverseParentheses: reverseParentheses("(abcd)") });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minimumOperations(nums) {
  let operations = 0;

  for (const num of nums) {
    operations += Math.min(num % 3, 3 - (num % 3));
  }

  return operations;
}
console.log({ minimumOperations: minimumOperations([1, 2, 3, 4, 5, 6]) });

/**
 * @param {number[][]} descriptions 
 * @returns {TreeNode | null}
 */
function createBinaryTree(descriptions) {
  const childrens = new Set();
  const nodes = {};

  for (const [parent, child, isLeft] of descriptions) {
    childrens.add(child);

    if (!nodes[parent]) nodes[parent] = new TreeNode(parent);
    if (!nodes[child]) nodes[child] = new TreeNode(child);

    if (isLeft) nodes[parent].left = nodes[child];
    else nodes[parent].right = nodes[child];
  }

  for (const [parent] of descriptions) {
    if (!childrens.has(parent)) return nodes[parent];
  }
}
console.log({ createBinaryTree: createBinaryTree([[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]) });

/**
 * @param {TreeNode | null} node 
 * @param {number} target 
 * @param {string[]} path 
 * @returns {boolean}
 */
function findPath(node, target, path) {
  if (!node) return false;
  if (node.val === target) return true;

  path.push("L");
  if (findPath(node.left, target, path)) return true;
  path.pop();

  path.push("R");
  if (findPath(node.right, target, path)) return true;
  path.pop();

  return false;
}

/**
 * @param {TreeNode | null} root 
 * @param {number} startValue 
 * @param {number} destValue 
 * @returns {string}
 */
function getDirections(root, startValue, destValue) {
  const startPath = [], destPath = [];

  findPath(root, startValue, startPath);
  findPath(root, destValue, destPath);

  let directions = "", commonPathLength = 0;
  const maxLength = Math.min(startPath.length, destPath.length);

  while (
    commonPathLength < maxLength &&
    startPath[commonPathLength] === destPath[commonPathLength]
  ) {
    commonPathLength++;
  }

  for (let i = 0; i < startPath.length - commonPathLength; i++) {
    directions += "U";
  }

  for (let i = commonPathLength; i < destPath.length; i++) {
    directions += destPath[i];
  }

  return directions;
}

/**
 * @param {TreeNode | null} root 
 * @param {number[]} to_delete 
 * @returns {Array<TreeNode | null>}
 */
function delNodes(root, to_delete) {
  const toDelete = new Set(to_delete), res = [];

  /**
   * @param {TreeNode | null} node 
   * @param {boolean} isRoot 
   * @returns {TreeNode | null}
   */
  function dfs(node, isRoot) {
    if (!node) return null;

    const deleted = toDelete.has(node.val);

    if (isRoot && !deleted) res.push(node);

    node.left = dfs(node.left, deleted);
    node.right = dfs(node.right, deleted);

    return deleted ? null : node;
  }

  dfs(root, true);

  return res;
}

/**
 * @param {TreeNode | null} root 
 * @param {number} distance 
 * @returns {number}
 */
function countPairs(root, distance) {
  let ans = 0;

  /**
   * @param {TreeNode | null} node 
   * @returns {number[]}
   */
  function dfs(node) {
    if (!node) return [];
    if (!node.left && !node.right) return [0];

    const leftDistances = dfs(node.left);
    const rightDistances = dfs(node.right);

    for (const l of leftDistances) {
      for (const r of rightDistances) {
        if (l + r + 2 <= distance) ans++;
      }
    }

    const distances = [];

    for (const l of leftDistances) distances.push(l + 1);
    for (const r of rightDistances) distances.push(r + 1);

    return distances;
  };

  dfs(root);
  return ans;
}

/**
 * @param {number[][]} matrix 
 * @returns {number[]}
 */
function luckyNumbers(matrix) {
  const minValues = [], maxValues = [], luckyNumber = [];

  for (const row of matrix) {
    minValues.push(Math.min(...row));
  }

  for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
    const colValues = [];

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
      colValues.push(matrix[rowIdx][colIdx]);
    }

    maxValues.push(Math.max(...colValues));
  }

  for (let rowIdx = 0; rowIdx < minValues.length; rowIdx++) {
    for (let colIdx = 0; colIdx < maxValues.length; colIdx++) {
      if (minValues[rowIdx] === maxValues[colIdx]) {
        luckyNumber.push(minValues[rowIdx]);
        break;
      }
    }
  }

  return luckyNumber;
}
console.log({ luckyNumbers: luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]) });

/**
 * @param {number[]} rowSum 
 * @param {number[]} colSum 
 * @returns {number[][]}
 */
function restoreMatrix(rowSum, colSum) {
  const ROWS = rowSum.length, COLS = colSum.length;
  const res = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

  for (let row = 0; row < ROWS; row++) {
    res[row][0] = rowSum[row];
  }

  for (let col = 0; col < COLS; col++) {
    let curColSum = 0;

    for (let row = 0; row < ROWS; row++) {
      curColSum += res[row][col];
    }

    let row = 0;

    while (curColSum > colSum[col]) {
      const diff = curColSum - colSum[col];
      const maxShift = Math.min(res[row][col], diff);
      res[row][col] -= maxShift;
      res[row][col + 1] += maxShift;
      curColSum -= maxShift;
      row++;
    }
  }

  return res;
}
console.log({ restoreMatrix: restoreMatrix([3, 8], [4, 7]) });

/**
 * @param {string[]} words 
 * @param {string} x 
 * @returns {number[]}
 */
function findWordsContaining(words, x) {
  const indices = [];

  for (let idx = 0; idx < words.length; idx++) {
    const word = words[idx];
    let start = 0, end = word.length - 1;

    while (start <= end) {
      if (word[start++] === x || word[end--] === x) {
        indices.push(idx);
        break;
      }
    }
  }

  return indices;
}
console.log({ findWordsContaining: findWordsContaining(["leet", "code"], "e") });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function differenceOfSum(nums) {
  let digitSum = 0;

  const elementSum = nums.reduce((acc, cur) => {
    let curNum = cur;

    while (curNum > 0) {
      const digit = curNum % 10;
      curNum = Math.floor(curNum / 10);
      digitSum += digit;
    }

    return cur + acc;
  }, 0);

  return Math.abs(digitSum - elementSum);
};
console.log({ differenceOfSum: differenceOfSum([1, 15, 6, 3]) });

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number}
 */
function addedInteger(nums1, nums2) {
  return Math.min(...nums2) - Math.min(...nums1);
}
console.log({ addedInteger: addedInteger([5, 7, 3], [2, 6, 8]) });

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number}
 */
function getFirstOccurrence(nums, target) {
  let start = 0, end = nums.length - 1, firstOccurrence = -1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      firstOccurrence = mid;
      end = mid - 1;
    } else if (target > nums[mid]) start = mid + 1;
    else if (target < nums[mid]) end = mid - 1;
  }

  return firstOccurrence;
}

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number}
 */
function getLastOccurrence(nums, target) {
  let start = 0, end = nums.length - 1, lastOccurrence = -1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      lastOccurrence = mid;
      start = mid + 1;
    } else if (target > nums[mid]) start = mid + 1;
    else if (target < nums[mid]) end = mid - 1;
  }

  return lastOccurrence;
}

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
function targetIndices(nums, target) {
  nums.sort((a, b) => a - b);

  const firstOccurrence = getFirstOccurrence(nums, target);
  const lastOccurrence = getLastOccurrence(nums, target);
  const indices = [];

  if (firstOccurrence === -1 && lastOccurrence === -1) return indices;

  for (let num = firstOccurrence; num <= lastOccurrence; num++) {
    indices.push(num);
  }

  return indices;
}
console.log({ targetIndices: targetIndices([1, 2, 5, 2, 3], 2) });

/**
 * @param {number[]} mapping 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function sortJumbled(mapping, nums) {
  const mappedNums = new Map();

  for (const num of nums) {
    const numStr = `${num}`;
    let mappedNum = '';

    for (let i = 0; i < numStr.length; i++) {
      mappedNum += mapping[+numStr.charAt(i)];
    }

    mappedNums.set(num, +mappedNum);
  }

  return nums.sort((a, b) => mappedNums.get(a) - mappedNums.get(b));
}
console.log({ sortJumbled: sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function triangularSum(nums) {
  while (nums.length > 1) {
    const newNums = [];

    for (let idx = 0; idx < nums.length - 1; idx++) {
      newNums.push((nums[idx] + nums[idx + 1]) % 10);
    }

    nums = [...newNums];
  }

  return nums[0];
}
console.log({ triangularSum: triangularSum([1, 2, 3, 4, 5]) });

/**
 * @param {string} s 
 * @param {number} k 
 * @returns {string}
 */
function digitSum(s, k) {
  while (s.length > k) {
    const nums = [];
    let num = 0, count = 0;

    for (let idx = 0; idx < s.length; idx++) {
      num += +s[idx];
      count++;

      if (count === k) {
        nums.push(num);
        num = 0;
        count = 0;
      }
    }

    if (count > 0) nums.push(num);

    s = nums.join("");
  }

  return s;
}
console.log({ digitSum: digitSum("11111222223", 3) });

/**
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function insertGreatestCommonDivisors(head) {
  if (!head || !head.next) return head;

  /**
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
   */
  function gcd(a, b) {
    while (b) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }

  const nums = [];
  let current = head;

  while (current) {
    nums.push(current.val);
    current = current.next;
  }

  const divisors = [];

  for (let i = 0; i < nums.length - 1; i++) {
    divisors.push(gcd(nums[i], nums[i + 1]));
  }

  const newHead = new ListNode();
  let newCurrent = newHead;

  for (let i = 0; i < nums.length; i++) {
    newCurrent.next = new ListNode(nums[i]);
    newCurrent = newCurrent.next;

    if (i < divisors.length) {
      newCurrent.next = new ListNode(divisors[i]);
      newCurrent = newCurrent.next;
    }
  }

  return newHead.next;
}

/**
 * @param {number} n 
 * @param {number} m 
 * @returns {number}
 */
function differenceOfSums(n, m) {
  const x = Math.floor(n / m);
  return (n * (n + 1) / 2) - (2 * m * x * (x + 1) / 2);
}
console.log({ differenceOfSums: differenceOfSums(10, 2) });

/**
 * @param {string[]} details 
 * @returns {number}
 */
function countSeniors(details) {
  let seniorCount = 0;

  for (const detail of details) {
    const age = +`${detail[11]}${detail[12]}`;
    if (age > 60) seniorCount++;
  }

  return seniorCount;
}
console.log({ countSeniors: countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]) });

/**
 * @param {number[]} nums 
 * @param {number} pivot 
 * @returns {number[]}
 */
function pivotArray(nums, pivot) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) result.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === pivot) result.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) result.push(nums[i]);
  }

  return result;
}
console.log({ pivotArray: pivotArray([2, 3, 1, 4, 5], 3) });

/**
 * @param {number} n 
 * @returns {number} 
 */
function minOperations(n) {
  return n ** 2 / 4;
}
console.log({ minOperations: minOperations(10) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minSwaps(nums) {
  const length = nums.length, totalOnes = nums.filter(num => num === 1).length;
  let left = 0, windowOnes = 0, maxWindowOnes = 0;

  for (let right = 0; right < 2 * length; right++) {
    if (nums[right % length]) windowOnes++;
    if (right - left + 1 > totalOnes) windowOnes -= nums[left++ % length];
    maxWindowOnes = Math.max(maxWindowOnes, windowOnes);
  }

  return totalOnes - maxWindowOnes;
}
console.log({ minSwaps: minSwaps([0, 1, 0, 1, 1, 0, 0]) });

/**
 * @param {number[]} target 
 * @param {number[]} arr 
 * @returns {boolean}
 */
function canBeEqual(target, arr) {
  const targetCount = new Map();

  for (const num of arr) {
    targetCount.set(num, (targetCount.get(num) || 0) + 1);
  }

  for (const num of target) {
    if (!targetCount.get(num)) return false;

    targetCount.set(num, targetCount.get(num) - 1);
    if (targetCount.get(num) === 0) targetCount.delete(num);
  }

  return targetCount.size === 0;
}
console.log({ canBeEqual: canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]) });

/**
 * @param {number[]} nums 
 * @param {number} n 
 * @param {number} left 
 * @param {number} right 
 * @returns {number}
 */
function rangeSum(nums, n, left, right) {
  const subArraySum = [], MOD = 10 ** 9 + 7;

  for (let i = 0; i < n; i++) {
    let currentSum = 0;

    for (let j = i; j < n; j++) {
      currentSum += nums[j];
      subArraySum.push(currentSum);
    }
  }

  subArraySum.sort((a, b) => a - b);

  let rangeSum = 0;

  for (let i = left - 1; i < right; i++) {
    rangeSum = (rangeSum + subArraySum[i]) % MOD;
  }

  return rangeSum;
}
console.log({ rangeSum: rangeSum([1, 2, 3, 4], 4, 1, 5) });

/**
 * @param {string[]} arr 
 * @param {number} k 
 * @returns {string}
 */
function kthDistinct(arr, k) {
  const strCount = new Map();

  for (const str of arr) {
    strCount.set(str, (strCount.get(str) || 0) + 1);
  }

  let distinctCount = 0;

  for (const [str, count] of strCount) {
    if (count === 1) if (++distinctCount === k) return str;
  }

  return "";
}
console.log({ kthDistinct: kthDistinct(["d", "b", "c", "b", "c", "a"], 2) });

/**
 * @param {string} word 
 * @returns {number}
 */
function minimumPushes(word) {
  const charCount = new Array(26).fill(0);

  for (const char of word) {
    charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  charCount.sort((a, b) => b - a);

  let result = 0;

  for (let idx = 0; idx < charCount.length; idx++) {
    result += charCount[idx] * (1 + Math.floor(idx / 8));
  }

  return result;
}
console.log({ minimumPushes: minimumPushes("abcde") });

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {number}
 */
function findPermutationDifference(s, t) {
  let difference = 0;
  const charIndexInS = new Map();

  for (let idx = 0; idx < s.length; idx++) {
    charIndexInS.set(s[idx], idx);
  }

  for (let idx = 0; idx < t.length; idx++) {
    difference += Math.abs(charIndexInS.get(t[idx]) - idx);
  }

  return difference;
}
console.log({ findPermutationDifference: findPermutationDifference("abc", "bac") });

/**
 * @param {number} num 
 * @returns {string}
 */
function numberToWords(num) {
  if (num === 0) return 'Zero';

  const ones = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
  };

  const tens = {
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
  };

  function getString(n) {
    const res = [];
    const hundreds = Math.floor(n / 100);

    if (hundreds) res.push(ones[hundreds] + ' Hundred');

    const lastTwo = n % 100;

    if (lastTwo >= 20) {
      const tensDigit = Math.floor(lastTwo / 10),
        onesDigit = lastTwo % 10;
      res.push(tens[tensDigit * 10]);
      if (onesDigit) res.push(ones[onesDigit]);
    } else if (lastTwo) res.push(ones[lastTwo]);

    return res.join(' ');
  }

  const postfix = ['', ' Thousand', ' Million', ' Billion'];
  let idx = 0;

  const res = [];

  while (num) {
    const digits = num % 1000;
    const str = getString(digits);
    if (str) res.push(str + postfix[idx]);
    num = Math.floor(num / 1000);
    idx++;
  }

  return res.reverse().join(' ');
}
console.log({ numberToWords: numberToWords(123) });

/**
 * @param {number} rows 
 * @param {number} cols 
 * @param {number} rStart 
 * @param {number} cStart 
 * @returns {number[][]}
 */
function spiralMatrixIII(rows, cols, rStart, cStart) {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const res = [];

  for (let step = 1, direction = 0; res.length < rows * cols;) {
    for (let i = 0; i < 2; ++i) {
      for (let j = 0; j < step; ++j) {
        if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) res.push([rStart, cStart]);
        rStart += directions[direction][0];
        cStart += directions[direction][1];
      }

      direction = (direction + 1) % 4;
    }

    ++step;
  }

  return res;
}
console.log({ spiralMatrixIII: spiralMatrixIII(1, 4, 0, 0) });

/**
 * @param {number[][]} grid 
 * @returns {number}
 */
function numMagicSquaresInside(grid) {
  const rows = grid.length, cols = grid[0].length;

  /**
   * @param {number} row 
   * @param {number} col 
   * @returns {0 | 1}
   */
  function magic(row, col) {
    const values = new Set();

    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        if (values.has(grid[i][j]) || grid[i][j] < 1 || grid[i][j] > 9)
          return 0;
        values.add(grid[i][j]);
      }
    }

    for (let i = row; i < row + 3; i++) {
      if (grid[i][col] + grid[i][col + 1] + grid[i][col + 2] !== 15) return 0;
    }

    for (let i = col; i < col + 3; i++) {
      if (grid[row][i] + grid[row + 1][i] + grid[row + 2][i] !== 15) return 0;
    }

    if (
      grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2] !== 15 ||
      grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col] !== 15
    )
      return 0;

    return 1;
  }

  let result = 0;

  for (let row = 0; row < rows - 2; row++) {
    for (let col = 0; col < cols - 2; col++) {
      result += magic(row, col);
    }
  }

  return result;
}
console.log({ numMagicSquaresInside: numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]) });

/**
 * @param {string[]} grid 
 * @returns {number}
 */
function regionsBySlashes(grid) {
  const matrix = Array.from({ length: grid.length * 3 }, () => Array(grid[0].length * 3));
  const mapChar = {
    " ": [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    "/": [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    "\\": [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const seq = mapChar[grid[i][j]];

      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          matrix[i * 3 + k][j * 3 + l] = seq[k][l];
        }
      }
    }
  }

  let count = 0;
  const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  /**
   * @param {number} i 
   * @param {number} j 
   * @returns {boolean}
   */
  function dfs(i, j) {
    if (matrix[i][j] !== 0) return false;
    matrix[i][j] = -1;

    for (const [dy, dx] of DIRECTIONS) {
      const newRow = i + dy;
      const newCol = j + dx;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow === matrix.length ||
        newCol === matrix[0].length ||
        matrix[newRow][newCol] !== 0
      ) {
        continue;
      }

      dfs(newRow, newCol);
    }

    return true;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (dfs(i, j)) count++;
    }
  }

  return count;
}
console.log({ regionsBySlashes: regionsBySlashes([" /", "/ "]) });

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = [];

    for (const num of nums) {
      this.add(num);
    }
  }

  add(val) {
    if (this.minHeap.length < this.k || this.minHeap[0] < val) {
      pushHeap(this.minHeap, val);
      if (this.minHeap.length > this.k) {
        popHeap(this.minHeap);
      }
    }
    return this.minHeap[0];
  }
}

/**
 * @param {number[]} arr 
 * @param {number} value 
 */
function pushHeap(arr, value) {
  arr.push(value);
  let index = arr.length - 1;

  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (arr[parentIndex] <= arr[index]) break;
    [arr[index], arr[parentIndex]] = [arr[parentIndex], arr[index]];
    index = parentIndex;
  }
}

/**
 * @param {number[]} arr 
 * @returns {number | void}
 */
function popHeap(arr) {
  if (arr.length === 0) return;
  const root = arr[0];
  arr[0] = arr.pop();
  heapify(arr, 0);
  return root;
};

/**
 * @param {number[]} arr 
 * @param {number} index 
 */
function heapify(arr, index) {
  let smallest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < arr.length && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < arr.length && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if (smallest !== index) {
    [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
    heapify(arr, smallest);
  }
}

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function smallestDistancePair(nums, k) {
  nums.sort((a, b) => a - b);

  let start = 0, end = Math.max(...nums);

  /**
   * @param {number} dist 
   * @returns {number} 
   */
  function getPairs(dist) {
    let left = 0, pairs = 0;

    for (let right = 0; right < nums.length; right++) {
      while (nums[right] - nums[left] > dist) {
        left++;
      }

      pairs += right - left;
    }

    return pairs;
  }

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    const pairs = getPairs(mid);
    pairs >= k ? (end = mid) : (start = mid + 1);
  }

  return start;
}
console.log({ smallestDistancePair: smallestDistancePair([1, 3, 1], 1) });

/**
 * @param {number[][]} arrays 
 * @returns {number} 
 */
function maxDistance(arrays) {
  let currentMin = arrays[0][0], currentMax = arrays[0][arrays[0].length - 1];
  let result = 0;

  for (let idx = 1; idx < arrays.length; idx++) {
    const num = arrays[idx];
    result = Math.max(result, num[num.length - 1] - currentMin, currentMax - num[0]);
    currentMax = Math.max(currentMax, num[num.length - 1]);
    currentMin = Math.min(currentMin, num[0]);
  }

  return result;
}
console.log({ maxDistance: maxDistance([[1, 2, 3], [4, 5], [1, 2, 3]]) });

/**
 * @param {string} allowed 
 * @param {string[]} words 
 * @returns {number}
 */
function countConsistentStrings(allowed, words) {
  let count = 0;
  const allowedChars = new Set(allowed);

  for (const word of words) {
    const distinctChars = new Set(word);
    let isPresent = true;

    for (const char of distinctChars) {
      if (!allowedChars.has(char)) isPresent = false;
    }

    if (isPresent) count++;
  }

  return count;
}
console.log({ countConsistentStrings: countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]) });

/**
 * @param {number} n 
 * @param {number} start 
 * @returns {number}
 */
function xorOperation(n, start) {
  const nums = Array.from({ length: n }, (_, idx) => start + 2 * idx);
  let result = 0;

  nums.forEach((num) => (result ^= num));

  return result;
}
console.log({ xorOperation: xorOperation(5, 0) });

/**
 * @param {string} s 
 * @param {string} letter 
 * @returns {number}
 */
function percentageLetter(s, letter) {
  let letterCount = 0;

  for (const char of s) {
    if (char === letter) letterCount++;
  }

  return Math.floor(letterCount / s.length * 100);
}
console.log({ percentageLetter: percentageLetter("hello", "o") });

/**
 * @param {number} num 
 * @returns {number}
 */
function findComplement(num) {
  let m = num, mask = 0;

  if (num === 0) return 1;

  while (m !== 0) {
    mask = (mask << 1) | 1;
    m = m >> 1;
  }

  let ans = (~num) & mask;

  return ans;
}
console.log({ findComplement: findComplement(5) });

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]}
 */
function findIntersectionValues(nums1, nums2) {
  let answer1 = 0, answer2 = 0;
  const uniqueNums1 = new Set(nums1), uniqueNums2 = new Set(nums2);

  for (const num of nums1) {
    if (uniqueNums2.has(num)) answer1++;
  }

  for (const num of nums2) {
    if (uniqueNums1.has(num)) answer2++;
  }

  return [answer1, answer2];
}
console.log({ findIntersectionValues: findIntersectionValues([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]) });

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function getCommonDivisor(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

/**
 * @param {string} expression 
 * @returns {string}
 */
function fractionAddition(expression) {
  const digits = [];
  let idx = 0;

  while (idx < expression.length) {
    const char = expression[idx], nextChar = expression[idx + 1];

    if (+char > 1 && +char < 10) {
      digits.push(+char);
      idx++;
    } else if (char === "1" && nextChar === "0") {
      digits.push(+`${char}${nextChar}`);
      idx++;
    } else if (char === "1") {
      digits.push(+char);
      idx++;
    } else {
      const digit = expression[idx + 1], nextDigit = expression[idx + 2];

      if (char === "-" || char === "+") {
        if (digit === "1" && nextDigit === "0") {
          digits.push(+`${char}${digit}${nextDigit}`);
          idx++;
        } else digits.push(+`${char}${digit}`);
      }

      if (char === "/") {
        if (digit === "1" && nextDigit === "0") {
          digits.push(+`${digit}${nextDigit}`);
          idx++;
        } else digits.push(+digit);
      }

      idx += 2;
    }
  }

  const L_C_M = [...new Set(digits.filter((_, idx) => idx % 2 === 1))].reduce((acc, curr) => (acc *= curr), 1);

  const numeratorSum = digits.reduce((acc, curr, idx) => {
    if (idx % 2 === 0) acc += curr * (L_C_M / digits[idx + 1]);
    return acc;
  }, 0);

  const commonDivisor = getCommonDivisor(numeratorSum, L_C_M);
  const numerator = numeratorSum / commonDivisor;
  const denominator = L_C_M / commonDivisor;

  return numeratorSum === 0 ? "0/1" : `${numerator}/${denominator}`;
}
console.log({ fractionAddition: fractionAddition("-1/2+1/2") });

/**
 * @param {string[]} words 
 * @returns {number}
 */
function similarPairs(words) {
  let pairsCount = 0;

  for (let i = 0; i < words.length; i++) {
    const wordOne = new Set(words[i]);

    for (let j = i + 1; j < words.length; j++) {
      const wordTwo = new Set(words[j]);

      if (wordOne.size === wordTwo.size && new Set([...wordOne, ...wordTwo]).size === wordOne.size) pairsCount++;
    }
  }

  return pairsCount;
}
console.log({ similarPairs: similarPairs("eat", "beat", "ate") });

/**
 * @param {_Node | null} root 
 * @returns {number[]}
 */
function postorder(root) {
  /**
   * @param {_Node | null} node 
   * @param {number[]} values 
   * @returns {number[]}
   */
  function getValues(node, values) {
    if (!node) return values;

    for (const child of node.children) {
      getValues(child, values);
    }

    values.push(node.val);

    return values;
  }

  return getValues(root, []);
}

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {boolean}
 */
function isPossibleDivide(nums, k) {
  if (nums.length % k !== 0) return false;

  const count = new Map();

  for (const card of nums) {
    count.set(card, (count.get(card) || 0) + 1);
  }

  const sortedKeys = Array.from(count.keys()).sort((a, b) => a - b);

  for (const key of sortedKeys) {
    if (count.get(key) > 0) {
      const num = count.get(key);

      for (let i = 0; i < k; i++) {
        if ((count.get(key + i) || 0) < num) return false;
        count.set(key + i, count.get(key + i) - num);
      }
    }
  }

  return true;
}
console.log({ isPossibleDivide: isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function mostFrequentEven(nums) {
  const numCount = {};

  for (const num of nums) {
    if (num % 2 === 0) numCount[num] = (numCount[num] || 0) + 1;
  }

  const maxCount = Object.values(numCount).reduce(((acc, curr) => Math.max(acc, curr)), 0);
  const minElement = Object.keys(numCount).filter(num => {
    if (numCount[num] === maxCount) return numCount[num];
  });

  if (minElement.length) return +minElement[0];
  return -1;
}
console.log({ mostFrequentEven: mostFrequentEven([0, 1, 2, 2, 4, 4, 1]) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function frequencySort(nums) {
  const sortedNums = [], numCount = {};

  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  const sortedNumCount = Object.entries(numCount).sort((a, b) => {
    if (a[1] === b[1]) return +b[0] - +a[0];
    return a[1] - b[1];
  });

  for (const num of sortedNumCount) {
    for (let idx = 0; idx < num[1]; idx++) {
      sortedNums.push(+num[0]);
    }
  }

  return sortedNums;
}
console.log({ frequencySort: frequencySort([2, 1, 2, 3, 4, 5, 6, 4, 2, 3]) });

/**
 * @param {number[]} arr 
 * @returns {boolean}
 */
function validMountainArray(arr) {
  const n = arr.length;
  if (n < 3) return false;

  let i = 0;

  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === n - 1) return false;

  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
}
console.log({ validMountainArray: validMountainArray([0, 3, 2, 1]) });

/**
 * @typedef {Array<MultidimensionalArray | number>} MultidimensionalArray
 */
/**
 * @param {MultidimensionalArray} arr
 * @returns {Generator<number, void, unknown>}
 */
function* inorderTraversal(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    const element = arr[idx];
    if (Array.isArray(element)) yield* inorderTraversal(element);
    else yield element;
  }
}
console.log({ inorderTraversal: inorderTraversal([1, [2, 3], [[4, 5], 6], 7]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function countQuadruplets(nums) {
  const length = nums.length;
  let count = 0;

  for (let a = 0; a < length; a++) {
    for (let b = a + 1; b < length; b++) {
      for (let c = b + 1; c < length; c++) {
        for (let d = c + 1; d < length; d++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) count++;
        }
      }
    }
  }

  return count;
}
console.log({ countQuadruplets: countQuadruplets([9, 6, 7, 7, 6, 5, 4, 3, 2, 1]) });

/**
 * @param {number[]} original 
 * @param {number} m 
 * @param {number} n 
 * @returns {number[][]}
 */
function construct2DArray(original, m, n) {
  if (original.length !== m * n) return [];

  const result = Array.from({ length: m }, () => new Array(n).fill(0));
  let idx = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      result[row][col] = original[idx++];
    }
  }

  return result;
}
console.log({ construct2DArray: construct2DArray([1, 2, 3, 4], 2, 2) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function numberOfPairs(nums) {
  const numCount = {};
  let pairs = 0, leftOvers = 0;

  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num in numCount) {
    pairs += Math.floor(numCount[num] / 2);
    leftOvers += numCount[num] % 2;
  }

  return [pairs, leftOvers];
}
console.log({ numberOfPairs: numberOfPairs([1, 3, 2, 1, 3, 2, 2]) });

/**
 * @param {number[]} chalk 
 * @param {number} k 
 * @returns {number}
 */
function chalkReplacer(chalk, k) {
  let sum = 0;

  for (let i = 0; i < chalk.length; i++) {
    sum += chalk[i];
    if (sum > k) break;
  }

  k = k % sum;

  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i;
    k = k - chalk[i];
  }

  return 0;
}
console.log({ chalkReplacer: chalkReplacer([5, 1, 5], 22) });

/**
 * @param {string} s 
 * @param {number} k 
 * @returns {number}
 */
function getLucky(s, k) {
  let digitSum = 0;

  for (const char of s) {
    let digit = char.charCodeAt(0) - 96;

    while (digit > 0) {
      digitSum += digit % 10;
      digit = Math.floor(digit / 10);
    }
  }

  for (let i = 1; i < k; i++) {
    let result = 0;

    while (digitSum > 0) {
      result += digitSum % 10;
      digitSum = Math.floor(digitSum / 10);
    }

    digitSum = result;
  }

  return digitSum;
}
console.log({ getLucky: getLucky("abc", 1) });

/**
 * @param {number[]} commands 
 * @param {number[][]} obstacles 
 * @returns {number}
 */
function robotSim(commands, obstacles) {
  const modes = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let direction = 0;
  let x = 0, y = 0;
  const obstacleSet = new Set(obstacles.map(([ox, oy]) => `${ox},${oy}`));
  let maxDistSq = 0;

  for (const command of commands) {
    if (command === -2) direction = (direction + 3) % 4;
    else if (command === -1) direction = (direction + 1) % 4;
    else {
      for (let step = 0; step < command; step++) {
        const nx = x + modes[direction][0];
        const ny = y + modes[direction][1];

        if (obstacleSet.has(`${nx},${ny}`)) break;

        x = nx;
        y = ny;

        maxDistSq = Math.max(maxDistSq, x * x + y * y);
      }
    }
  }

  return maxDistSq;
}
console.log({ robotSim: robotSim([4, -1, 3, 1], [[2, 4], [3, 6]]) });

/**
 * @param {number[]} rolls 
 * @param {number} mean 
 * @param {number} n 
 * @returns {number[]}
 */
function missingRolls(rolls, mean, n) {
  const noOfRolls = rolls.length, totalSum = mean * (noOfRolls + n);
  let missingSum = totalSum - rolls.reduce((acc, cur) => (acc += cur), 0);

  if (missingSum > 6 * n || missingSum < n) return [];

  const result = [];

  while (n) {
    const dice = Math.min(6, missingSum - n + 1);
    result.push(dice);
    missingSum -= dice;
    n--;
  }

  return result;
}
console.log({ missingRolls: missingRolls([3, 2, 4, 3], 4, 2) });

/**
 * @param {number[]} nums 
 * @param {ListNode | null} head 
 * @returns {ListNode | null}
 */
function modifiedList(nums, head) {
  const uniqueNums = new Set(nums);
  const current = new ListNode(0, head);
  let previous = current;

  while (previous.next) {
    if (uniqueNums.has(previous.next.val)) previous.next = previous.next.next;
    else previous = previous.next;
  }

  return current.next;
}

/**
 * @param {TreeNode | null} node 
 * @param {ListNode | null} head 
 * @returns {boolean}
 */
function checkPath(node, head) {
  if (!node) return false;
  if (dfs(node, head)) return true;
  return checkPath(node.left, head) || checkPath(node.right, head);
}

/**
 * @param {TreeNode | null} node 
 * @param {ListNode | null} head 
 * @returns {boolean}
 */

function dfs(node, head) {
  if (!head) return true;
  if (!node) return false;
  if (node.val !== head.val) return false;
  return dfs(node.left, head.next) || dfs(node.right, head.next);
}

/**
 * @param {ListNode | null} head 
 * @param {TreeNode | null} root 
 * @returns {boolean}
 */
function isSubPath(head, root) {
  return checkPath(root, head);
}

/**
 * @param {ListNode | null} head 
 * @param {number} k 
 * @returns {Array<ListNode | null>}
 */
function splitListToParts(head, k) {
  const ans = new Array(k);
  let size = 0, current = head;

  while (current) {
    size++;
    current = current.next;
  }

  const splitSize = Math.floor(size / k);
  let numRemainingParts = size % k;

  current = head;

  for (let i = 0; i < k; i++) {
    const newPart = new ListNode(0);
    let tail = newPart;
    let currentSize = splitSize;

    if (numRemainingParts > 0) {
      numRemainingParts--;
      currentSize++;
    }

    for (let j = 0; j < currentSize; j++) {
      tail.next = new ListNode(current.val);
      tail = tail.next;
      current = current.next;
    }

    ans[i] = newPart.next;
  }

  return ans;
}

/**
 * @param {string} s 
 * @returns {string}
 */
function removeStars(s) {
  const chars = [];

  for (const char of s) {
    if (char === "*") chars.pop();
    else chars.push(char);
  }

  return chars.join("");
}
console.log({ removeStars: removeStars("leet**cod*e") });

/**
 * @param {number} start 
 * @param {number} goal 
 * @returns {number}
 */
function minBitFlips(start, goal) {
  let updatedNum = start ^ goal, result = 0;

  while (updatedNum) {
    result += updatedNum & 1;
    updatedNum >>= 1;
  }

  return result;
}
console.log({ minBitFlips: minBitFlips(10, 7) });

/**
 * @param {number[]} arr 
 * @param {number[][]} queries 
 * @returns {number[]}
 */
function xorQueries(arr, queries) {
  const prefix = [0];

  for (const num of arr) {
    prefix.push(prefix[prefix.length - 1] ^ num);
  }

  const result = [];

  for (const [left, right] of queries) {
    result.push(prefix[right + 1] ^ prefix[left]);
  }

  return result;
}
console.log({ xorQueries: xorQueries([1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function longestSubarray(nums) {
  let size = 0, res = 0, curMax = 0;

  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
      size = 1;
      res = 0;
    } else if (num === curMax) size++;
    else size = 0;

    res = Math.max(res, size);
  }

  return res;
}
console.log({ longestSubarray: longestSubarray([1, 4, 5, 6, 23, 54, 45, 44, 46, 56, 3]) });

/**
 * @param {string[]} timePoints 
 * @returns {number}
 */
function findMinDifference(timePoints) {
  const minutes = [];
  let min = Infinity;

  for (const timePoint of timePoints) {
    const [hour, min] = timePoint.split(":");
    if (hour === "00" && min === "00") minutes.push(24 * 60);
    else minutes.push(+hour * 60 + +min);
  }

  minutes.sort((a, b) => a - b);

  for (let idx = 1; idx < minutes.length; idx++) {
    min = Math.min(min, minutes[idx] - minutes[idx - 1]);
  }

  return Math.min(min, 24 * 60 - minutes[minutes.length - 1] + minutes[0]);
}
console.log({ findMinDifference: findMinDifference(["23:59", "00:00"]) });

class RecentCounter {
  constructor() {
    this.pings = [];
  }

  ping(t) {
    this.pings.push(t);

    while (this.pings.length > 0 && this.pings[0] < t - 3000) {
      this.pings.shift();
    }

    return this.pings.length;
  }
}

/**
 * @param {string} s1 
 * @param {string} s2 
 * @returns {string[]}
 */
function uncommonFromSentences(s1, s2) {
  const wordCount = {};
  const wordsFromS1 = s1.split(" "), wordsFromS2 = s2.split(" ");
  const unCommonWords = [];

  for (const word of wordsFromS1) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  for (const word of wordsFromS2) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  for (const word in wordCount) {
    if (wordCount[word] === 1) unCommonWords.push(word);
  }

  return unCommonWords;
}
console.log({ uncommonFromSentences: uncommonFromSentences("this apple is sweet", "this apple is sour") });

/**
 * @param {number[]} nums 
 * @returns {string}
 */
function largestNumber(nums) {
  const strNums = Array.from({ length: nums.length }, (_, idx) => `${nums[idx]}`);

  strNums.sort((a, b) => {
    if (a + b > b + a) return -1;
    else return 1;
  });

  if (strNums[0] === '0') return '0';
  return strNums.join("");
}
console.log({ largestNumber: largestNumber([3, 30, 34, 5, 9]) });

/**
 * @param {string} expression 
 * @returns {number[]}
 */
function diffWaysToCompute(expression) {
  const operations = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
  };

  function evaluateExpressions(left, right) {
    const result = [];

    for (let idx = left; idx <= right; idx++) {
      const operation = expression[idx];

      if (operation in operations) {
        const leftValues = evaluateExpressions(left, idx - 1);
        const rightValues = evaluateExpressions(idx + 1, right);

        for (const num1 of leftValues) {
          for (const num2 of rightValues) {
            result.push(operations[operation](num1, num2));
          }
        }
      }
    }

    if (result.length === 0) {
      const numberStr = expression.slice(left, right + 1);
      result.push(Number(numberStr));
    }

    return result;
  }

  return evaluateExpressions(0, expression.length - 1);
}
console.log({ diffWaysToCompute: diffWaysToCompute("2*3-4*5") });

/**
 * @param {string} s 
 * @returns {string}
 */
function shortestPalindrome(s) {
  let prefix = 0, suffix = 0, lastIndex = 0, power = 1;
  const base = 29, mod = 10 ** 9 + 7;

  for (let idx = 0; idx < s.length; idx++) {
    const char = s[idx].charCodeAt(0) - "a".charCodeAt(0) + 1;

    prefix = (prefix * base) % mod;
    prefix = (prefix + char) % mod;

    suffix = (suffix + char * power) % mod;
    power = (power * base) % mod;

    if (prefix === suffix) lastIndex = idx;
  }

  return s.slice(lastIndex + 1).split("").reverse().join("") + s;
}
console.log({ shortestPalindrome: shortestPalindrome("aacecaaa") });

/**
 * @param {number} limit 
 * @returns {number} 
 */
function countEven(limit) {
  let count = 0;

  for (let idx = 1; idx <= limit; idx++) {
    let digitSum = 0, num = idx;

    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }

    if (digitSum % 2 === 0) count++;
  }

  return count;
}
console.log({ countEven: countEven(10) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function findNonMinOrMax(nums) {
  const maxNum = Math.max(...nums), minNum = Math.min(...nums);
  return nums.find(num => num !== minNum && num !== maxNum) ?? -1;
}
console.log({ findNonMinOrMax: findNonMinOrMax([1, 2, 3, 4]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function thirdMax(nums) {
  nums.sort((a, b) => b - a);

  let count = 0, maxNum = -Infinity;

  for (const num of nums) {

    if (maxNum !== num) {
      maxNum = num;
      count++;
    }

    if (count === 3) return maxNum;
  }

  return nums[0];
}
console.log({ thirdMax: thirdMax([3, 2, 1]) });

/**
 * @param {number} n 
 * @returns {boolean}
 */
function isHappy(n) {
  const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let sum = 0;

    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }

    n = sum;
  }

  return n === 1;
}
console.log({ isHappy: isHappy(19) });

/**
 * @param {number[]} nums 
 * @returns {boolean}
 */
function isArraySpecial(nums) {
  for (let idx = 0; idx < nums.length - 1; idx++) {
    if (nums[idx] % 2 === nums[idx + 1] % 2) return false;
  }

  return true;
}
console.log({ isArraySpecial: isArraySpecial([1, 2, 3, 4, 5, 6]) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function countPairs(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) count++;
    }
  }

  return count;
}
console.log({ countPairs: countPairs([1, 2, 3, 4, 5, 6], 3) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function leftRightDifference(nums) {
  const differences = [];
  let leftSum = 0, rightSum = nums.reduce((p, c) => p + c, 0);

  for (const num of nums) {
    rightSum -= num;
    differences.push(Math.abs(rightSum - leftSum));
    leftSum += num;
  }

  return differences;
}
console.log({ leftRightDifference: leftRightDifference([2, 3, 1, 5, 4]) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function getSneakyNumbers(nums) {
  for (let idx = 0; idx < nums.length; idx++) {
    nums[idx] += 1;
  }

  const sneakyNumbers = [];

  for (const num of nums) {
    const index = Math.abs(num);
    if (nums[index] < 0) sneakyNumbers.push(index - 1);
    else nums[index] = -nums[index];
  }

  return sneakyNumbers;
}
console.log({ getSneakyNumbers: getSneakyNumbers([4, 3, 2, 7, 8, 2, 3, 1]) });

/**
 * @param {number[]} nums 
 * @returns {boolean}
 */
function canAliceWin(nums) {
  let singleDigitSum = 0, doubleDigitSum = 0;

  for (const num of nums) {
    if (num < 10) singleDigitSum += num;
    else doubleDigitSum += num;
  }

  return singleDigitSum !== doubleDigitSum;
}
console.log({ canAliceWin: canAliceWin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) });

/**
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {boolean}
 */
function canArrange(arr, k) {
  const remainderCount = {};

  for (const num of arr) {
    const rem = ((num % k) + k) % k;
    remainderCount[rem] = (remainderCount[rem] || 0) + 1;
  }

  for (const num of arr) {
    const rem = ((num % k) + k) % k;

    if (rem === 0) {
      if (remainderCount[rem] % 2 === 1) return false;
    } else if (remainderCount[rem] !== remainderCount[k - rem]) {
      return false;
    }
  }

  return true;
}
console.log({ canArrange: canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5) });

/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
function arrayRankTransform(arr) {
  const temp = [...new Set(arr)].sort((a, b) => a - b);
  const rankMap = new Map();
  let rank = 1;

  temp.forEach((num) => rankMap.set(num, rank++));

  arr.forEach((_, idx) => arr[idx] = rankMap.get(arr[idx]));

  return arr;
}
console.log({ arrayRankTransform: arrayRankTransform([40, 10, 20, 30]) });

/**
 * @param {number[]} nums 
 * @param {number} p 
 * @returns {number}
 */
function minSubarray(nums, p) {
  const total = nums.reduce((acc, cur) => acc + cur);
  const remainder = total % p;

  if (remainder === 0) return remainder;

  let result = nums.length, curSum = 0;
  const remainderIndex = { 0: -1 };

  nums.forEach((num, idx) => {
    curSum = (curSum + num) % p;
    const prefix = (curSum - remainder + p) % p;

    if (prefix in remainderIndex) {
      const length = idx - remainderIndex[prefix];
      result = Math.min(result, length);
    }

    remainderIndex[curSum] = idx;
  });

  return result !== nums.length ? result : -1;
}
console.log({ minSubarray: minSubarray([3, 1, 4, 2], 6) });

/**
 * @param {number[]} skill 
 * @returns {number}
 */
function dividePlayers(skill) {
  const n = skill.length;
  let totalSkill = 0;
  const skillMap = {};

  for (const s of skill) {
    totalSkill += s;
    skillMap[s] = (skillMap[s] || 0) + 1;
  }

  if (totalSkill % (n / 2) !== 0) return -1;

  const targetSkill = totalSkill / (n / 2);
  let totalChemistry = 0;

  for (const currSkill in skillMap) {
    const currFreq = skillMap[currSkill];
    const partnerSkill = targetSkill - Number(currSkill);

    if (!(partnerSkill in skillMap) || currFreq !== skillMap[partnerSkill]) return -1;

    totalChemistry += Number(currSkill) * partnerSkill * currFreq;
  }

  return totalChemistry / 2;
}
console.log({ dividePlayers: dividePlayers([1, 2, 3, 4, 5, 6]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function maximumProduct(nums) {
  let a = -Infinity, b = a, c = a, x = Infinity, y = x;

  for (const num of nums) {
    if (num > a) {
      c = b;
      b = a;
      a = num;
    } else if (num > b) {
      c = b;
      b = num;
    } else if (num > c) c = num;
    if (num < x) {
      y = x;
      x = num;
    } else if (num < y) y = num;
  }

  return Math.max(a * b * c, a * x * y);
}
console.log({ maximumProduct: maximumProduct([1, 2, 3, 4]) });

/**
 * @param {string} sentence1 
 * @param {string} sentence2 
 * @returns {boolean}
 */
function areSentencesSimilar(sentence1, sentence2) {
  const s1Words = sentence1.split(' '), s2Words = sentence2.split(' ');
  let start = 0, ends1 = s1Words.length - 1, ends2 = s2Words.length - 1;

  if (s1Words.length > s2Words.length) return areSentencesSimilar(sentence2, sentence1);

  while (start < s1Words.length && s1Words[start] === s2Words[start]) {
    start++;
  }

  while (ends1 >= 0 && s1Words[ends1] === s2Words[ends2]) {
    ends1--;
    ends2--;
  }

  return ends1 < start;
}
console.log({ areSentencesSimilar: areSentencesSimilar("My name is Haley", "My Haley") });

/**
 * @param {string} s 
 * @returns {number}
 */
function minLength(s) {
  const updatedString = [];

  for (let idx = 0; idx < s.length; idx++) {
    const curr = s[idx];
    const top = updatedString[updatedString.length - 1];

    if (updatedString.length === 0) {
      updatedString.push(curr);
      continue;
    }

    if ((top === "A" && curr === "B") || (top === "C" && curr === "D")) updatedString.pop();
    else updatedString.push(curr);
  }

  return updatedString.length;
}
console.log({ minLength: minLength("ABCD") });

/**
 * @param {TreeNode | null} node 
 * @returns {number}
 */
function countNodes(node) {
  if (!node) return 0;
  return 1 + countNodes(node.left) + countNodes(node.right);
}

/**
 * @param {TreeNode | null} node 
 * @param {number} index 
 * @param {number} count 
 * @returns {boolean}
 */
function isCBT(node, index, count) {
  if (!node) return true;

  if (index >= count) return false;
  else {
    const left = isCBT(node.left, 2 * index + 1, count);
    const right = isCBT(node.right, 2 * index + 2, count);
    return left && right;
  }
}

/**
 * @param {TreeNode | null} root 
 * @returns {boolean}
 */
function isCompleteTree(root) {
  let idx = 0;
  const totalCount = countNodes(root);
  return isCBT(root, idx, totalCount);
}

/**
 * @param {string} s 
 * @returns {number}
 */
function minAddToMakeValid(s) {
  let openBrackets = 0, minAddsRequired = 0;

  for (const char of s) {
    if (char == '(') openBrackets++;
    else openBrackets > 0 ? openBrackets-- : minAddsRequired++;
  }

  return minAddsRequired + openBrackets;
}
console.log({ minAddToMakeValid: minAddToMakeValid("())") });

/**
 * @param {number[][]} intervals 
 * @returns {number}
 */
function minGroups(intervals) {
  const start = [], end = [];

  intervals.forEach(([left, right]) => {
    start.push(left);
    end.push(right);
  });

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let first = 0, second = 0;
  let result = 0;

  while (first < intervals.length) {
    if (start[first] <= end[second]) first++;
    else second++;
    result = Math.max(result, first - second);
  }

  return result;
}
console.log({ minGroups: minGroups([[1, 2], [2, 3], [2, 3], [3, 4], [1, 3]]) });

/**
 * @param {TreeNode | null} node 
 * @param {number[]} nodes 
 * @returns {number[]}
 */
function getNodes(node, nodes) {
  if (!node) return nodes;

  getNodes(node.left, nodes);
  nodes.push(node.val);
  getNodes(node.right, nodes);

  return nodes;
}

/**
 * @param {TreeNode | null} root 
 * @returns {number[]}
 */
function findMode(root) {
  const nodes = getNodes(root, []);
  let maxStreak = 0, currStreak = 0, currNum = 0, ans = [];

  for (const num of nodes) {
    if (num === currNum) currStreak += 1;
    else currStreak = 1;

    currNum = num;

    if (currStreak > maxStreak) {
      ans = [];
      maxStreak = currStreak;
    }

    if (currStreak === maxStreak) ans.push(num);
  }

  return ans;
}

/**
 * @param {TreeNode | null} root 
 * @returns {boolean}
 */
function isUnivalTree(root) {
  const leftCorrect = (root.left === null || (root.val === root.left.val && isUnivalTree(root.left)));
  const rightCorrect = (root.right === null || (root.val === root.right.val && isUnivalTree(root.right)));
  return leftCorrect && rightCorrect;
}

/**
 * @param {number[][]} times 
 * @param {number} targetFriend 
 * @returns {number} 
 */
function smallestChair(times, targetFriend) {
  const events = [];

  for (let i = 0; i < times.length; i++) {
    events.push([times[i][0], i]);
    events.push([times[i][1], ~i]);
  }

  events.sort((a, b) => a[0] - b[0]);

  const availableChairs = new MinHeap((a, b) => a - b);

  for (let i = 0; i < times.length; i++) {
    availableChairs.push(i);
  }

  const occupiedChairs = new MinHeap((a, b) => a[0] - b[0]);

  for (const event of events) {
    const [time, friend] = event;

    while (occupiedChairs.size > 0 && occupiedChairs.peek()[0] <= time) {
      const [, chair] = occupiedChairs.pop();
      availableChairs.push(chair);
    }

    if (friend >= 0) {
      const chair = availableChairs.pop();
      if (friend === targetFriend) {
        return chair;
      }
      occupiedChairs.push([times[friend][1], chair]);
    }
  }

  return -1;
}

/**
 * @param {TreeNode | null} root 
 * @param {number} x 
 * @param {number} y 
 * @returns {boolean}
 */
function isCousins(root, x, y) {
  if (!root) return false;

  const nodesQueue = [[root, null]];

  while (nodesQueue.length) {
    const size = nodesQueue.length;
    let xParent = null;
    let yParent = null;

    for (let idx = 0; idx < size; idx++) {
      const [node, parent] = nodesQueue.shift();

      if (node.val === x) xParent = parent;
      if (node.val === y) yParent = parent;

      if (node.left) nodesQueue.push([node.left, node]);
      if (node.right) nodesQueue.push([node.right, node]);
    }

    if (xParent && yParent) return xParent !== yParent;

    if (xParent || yParent) return false;
  }

  return false;
}

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function maxKelements(nums, k) {
  const maxHeap = new MaxHeap((a, b) => a - b);

  for (const num of nums) {
    maxHeap.push(num);
  }

  let score = 0;

  while (k > 0) {
    k--;
    const num = maxHeap.pop();
    score += num;
    maxHeap.push(Math.ceil(num / 3));
  }

  return score;
}

/**
 * @param {string} s 
 * @returns {number}
 */
function minimumSteps(s) {
  let steps = 0, left = 0, right = s.length - 1;

  while (left <= right) {
    if (s[right] === "1") right--;
    else if (s[left] === "0") left++;
    else steps += right-- - left++;
  }

  return steps;
}
console.log({ minimumSteps: minimumSteps("110") });

/**
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {string}
 */
function longestDiverseString(a, b, c) {
  const maxHeap = new MaxHeap((a, b) => a[0] - b[0]);

  if (a > 0) maxHeap.push([a, "a"]);
  if (b > 0) maxHeap.push([b, "b"]);
  if (c > 0) maxHeap.push([c, "c"]);

  let result = "";

  while (maxHeap.size) {
    let [count, char] = maxHeap.pop();

    if (result.length >= 2 && result[result.length - 1] === char &&
      result[result.length - 2] === char) {
      if (maxHeap.size === 0) break;

      const [tempCount, tempChar] = maxHeap.pop();
      result += tempChar;

      if (tempCount - 1 > 0) maxHeap.push([tempCount - 1, tempChar]);
    } else {
      count--;
      result = result + char;
    }

    if (count > 0) maxHeap.push([count, char]);
  }

  return result;
}

/**
 * @param {number} num 
 * @returns {number}
 */
function maximumSwap(num) {
  const digits = `${num}`.split('');
  let maxDigitIdx = -1, swapIdx1 = -1, swapIdx2 = -1;

  for (let idx = digits.length - 1; idx >= 0; --idx) {
    if (maxDigitIdx == -1 || digits[idx] > digits[maxDigitIdx]) {
      maxDigitIdx = idx;
    } else if (digits[idx] < digits[maxDigitIdx]) {
      swapIdx1 = idx;
      swapIdx2 = maxDigitIdx;
    }
  }

  [digits[swapIdx1], digits[swapIdx2]] = [digits[swapIdx2], digits[swapIdx1]];

  return +digits.join("");
}
console.log({ maximumSwap: maximumSwap(2736) });

/**
 * @param {number} num 
 * @returns {string}
 */
function decimalToBinary(num) {
  let binary = '';

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  };

  return binary;
}

/**
 * @param {string} date 
 * @returns {string}
 */
function convertDateToBinary(date) {
  const [year, month, day] = date.split("-");
  return `${decimalToBinary(+year)}-${decimalToBinary(+month)}-${decimalToBinary(+day)}`;
}
console.log({ convertDateToBinary: convertDateToBinary("2021-09-01") });

/**
 * @param {number} n 
 * @param {number} k 
 * @returns {string}
 */
function findKthBit(n, k) {
  let length = 2 ** n - 1, inverted = false;

  while (length > 1) {
    const half = Math.floor(length / 2);

    if (k <= half) length = half;
    else if (k > half + 1) {
      k = 1 + length - k;
      length = half;
      inverted = !inverted;
    } else return !inverted ? "1" : "0";
  }

  return !inverted ? "0" : "1";
}
console.log({ findKthBit: findKthBit(4, 11) });

/**
 * @param {number[][]} boxTypes 
 * @param {number} truckSize 
 * @returns {number}
 */
function maximumUnits(boxTypes, truckSize) {
  let maxUnits = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let idx = 0; idx < boxTypes.length; idx++) {
    const boxType = boxTypes[idx];

    if (truckSize > 0) {
      maxUnits += Math.min(truckSize, boxType[0]) * boxType[1];
      truckSize -= boxType[0];
    } else break;
  }

  return maxUnits;
}
console.log({ maximumUnits: maximumUnits([[1, 3], [2, 2], [3, 1]], 4) });

/**
 * @param {string} s 
 * @param {number} k 
 * @returns {string}
 */
function truncateSentence(s, k) {
  return s.split(" ").slice(0, k).join(" ");
}
console.log({ truncateSentence: truncateSentence("Hello how are you Contestant", 4) });

/**
 * @param {TreeNode | null} root 
 * @returns {TreeNode | null}
 */
function replaceValueInTree(root) {
  const nodesQueue = [root], rowSum = [];

  while (nodesQueue.length) {
    const size = nodesQueue.length;
    let sum = 0;

    for (let idx = 0; idx < size; idx++) {
      const node = nodesQueue.shift();
      sum += node.val;
      if (node.left) nodesQueue.push(node.left);
      if (node.right) nodesQueue.push(node.right);
    }

    rowSum.push(sum);
  }

  nodesQueue.push(root);
  root.val = 0;
  let row = 0;

  while (nodesQueue.length) {
    const size = nodesQueue.length;

    for (let idx = 0; idx < size; idx++) {
      const node = nodesQueue.shift();

      let childSum = 0;

      if (node.left) childSum += node.left.val;
      if (node.right) childSum += node.right.val;
      if (node.left) {
        node.left.val = rowSum[row + 1] - childSum;
        nodesQueue.push(node.left);
      }
      if (node.right) {
        node.right.val = rowSum[row + 1] - childSum;
        nodesQueue.push(node.right);
      }
    }

    row++;
  }

  return root;
}

/**
 * @param {TreeNode | null} root 
 * @param {number} k 
 * @returns {number}
 */
function kthLargestLevelSum(root, k) {
  const nodesQueue = [root];
  const maxHeap = new MaxHeap((a, b) => a - b);

  while (nodesQueue.length) {
    const size = nodesQueue.length;
    let sum = 0;

    for (let idx = 0; idx < size; idx++) {
      const node = nodesQueue.shift();
      sum += node.val;
      if (node.left) nodesQueue.push(node.left);
      if (node.right) nodesQueue.push(node.right);
    }

    maxHeap.push(sum);
  }

  if (maxHeap.size < k) return -1;

  for (let idx = 0; idx < k - 1; idx++) maxHeap.pop();

  return maxHeap.peek();
}

/**
 * @param {TreeNode | null} root1 
 * @param {TreeNode | null} root2 
 * @returns {boolean}
 */
function flipEquiv(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.val !== root2.val) return false;

  return (
    (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
    (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
  );
}

/**
 * @param {string} s 
 * @returns {number}
 */
function countKeyChanges(s) {
  let count = 0;

  for (let idx = 0; idx < s.length - 1; idx++) {
    const currentChar = s[idx].toLowerCase(), nextChar = s[idx + 1].toLowerCase();
    if (currentChar !== nextChar) count++;
  }

  return count;
}
console.log({ countKeyChanges: countKeyChanges("aAaAaA") });

/**
 * @param {string[]} words 
 * @param {string} s 
 * @returns {boolean}
 */
function isAcronym(words, s) {
  const acronym = [];
  words.forEach(word => acronym.push(word[0]));
  return acronym.join("") === s;
}
console.log({ isAcronym: isAcronym(["a", "b", "c"], "abc") });

/**
 * @param {number} num 
 * @returns {number}
 */
function minimumSum(num) {
  const digits = [];

  while (num) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  digits.sort((a, b) => a - b);

  const firstNum = digits[0] * 10 + digits[2];
  const secondNum = digits[1] * 10 + digits[3];

  return firstNum + secondNum;
}
console.log({ minimumSum: minimumSum(2932) });

/**
 * @param {number} n 
 * @returns {number}
 */
function sumOfMultiples(n) {
  let sum = 0;

  for (let idx = 1; idx <= n; idx++) {
    if (idx % 3 === 0 || idx % 5 === 0 || idx % 7 === 0) sum += idx;
  }

  return sum;
}
console.log({ sumOfMultiples: sumOfMultiples(15) });

/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
function numberGame(nums) {
  const minHeap = new MinHeap((a, b) => a - b);
  let idx = 0;

  nums.forEach((num) => minHeap.push(num));

  while (minHeap.size) {
    const firstNum = minHeap.pop();
    const secondNum = minHeap.pop();

    [nums[idx + 1], nums[idx]] = [firstNum, secondNum];
    idx += 2;
  }

  return nums;
}

/**
 * @param {number[]} nums 
 * @returns {number} 
 */
function getLastNegativeIndex(nums) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) left = mid + 1;
    else right = mid - 1;
  }

  return left - 1;
}

/**
 * @param {number[]} nums 
 * @returns {number} 
 */
function getFirstPositiveIndex(nums) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > 0) right = mid - 1;
    else left = mid + 1;
  }

  return right + 1;
}

/**
 * @param {number[]} nums 
 * @returns {number} 
 */
function maximumCount(nums) {
  const lastNegative = getLastNegativeIndex(nums);
  const firstPositive = getFirstPositiveIndex(nums);

  const negativeCount = lastNegative + 1;
  const positiveCount = nums.length - firstPositive;

  return Math.max(negativeCount, positiveCount);
}
console.log({ maximumCount: maximumCount([-2, -1, -1, 1, 2, 3]) });

/**
 * @param {number} year 
 * @returns {boolean}
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * @param {string} date 
 * @returns {number}
 */
function dayOfYear(date) {
  const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [year, month, day] = date.split("-");
  let totalDays = +day;

  for (let m = 1; m < +month; m++) {
    totalDays += DAYS[m];
  }

  if (isLeapYear(+year) && +month > 2) totalDays++;

  return totalDays;
}
console.log({ dayOfYear: dayOfYear("2019-01-09") });

/**
 * @param {string} s 
 * @returns {string}
 */
function makeFancyString(s) {
  const chars = [];
  let count = 0, currChar = '';

  for (let idx = 0; idx < s.length; idx++) {
    const char = s[idx];

    if (char === currChar) count++;
    else {
      currChar = char;
      count = 1;
    }

    if (count < 3) chars.push(char);
  }

  return chars.join('');
}
console.log({ makeFancyString: makeFancyString("pppq") });

/**
 * @param {string} sentence 
 * @returns {boolean}
 */
function isCircularSentence(sentence) {
  for (let idx = 0; idx < sentence.length; idx++) {
    if (sentence[idx] === " " && sentence[idx - 1] !== sentence[idx + 1]) return false;
  }

  return sentence[0] === sentence[sentence.length - 1];
}
console.log({ isCircularSentence: isCircularSentence("leetcod ees true") });

/**
 * @param {number} num 
 * @param {number} k 
 * @returns {number}
 */
function divisorSubstrings(num, k) {
  const numStr = num.toString();
  let count = 0;

  for (let i = 0; i <= numStr.length - k; i++) {
    const currentSubstring = numStr.substring(i, i + k);
    const currentNum = Number(currentSubstring);

    if (currentNum !== 0 && num % currentNum === 0) count++;
  }

  return count;
}
console.log({ divisorSubstrings: divisorSubstrings(100, 5) });

/**
 * @param {string} word 
 * @returns {string}
 */
function compressedString(word) {
  const newString = [];
  let currChar = "", count = 0;

  for (let idx = 0; idx < word.length; idx++) {
    const char = word[idx];

    if (char === currChar) {
      count++;
    } else {
      if (count > 0) newString.push(`${Math.min(count, 9)}${currChar}`);
      currChar = char;
      count = 1;
    }

    if (count === 9) {
      newString.push(`9${currChar}`);
      count = 0;
    }
  }

  if (count > 0) newString.push(`${Math.min(count, 9)}${currChar}`);

  return newString.join("");
}
console.log({ compressedString: compressedString("aaaaaaaaaaaaaabb") });

/**
 * @param {string} s 
 * @returns {number}
 */
function minChanges(s) {
  let changes = 0;

  for (let idx = 0; idx < s.length; idx += 2) {
    if (s[idx] !== s[idx + 1]) changes++;
  }

  return changes;
}
console.log({ minChanges: minChanges("1001") });

/**
 * @param {number[]} nums 
 * @returns {boolean}
 */
function canSortArray(nums) {
  /**
   * @param {number} n 
   * @returns {number}
   */
  function countBits(n) {
    let res = 0;

    while (n) {
      res += n & 1;
      n >>= 1;
    }

    return res;
  }

  let curMin = nums[0], curMax = nums[0];
  let prevMax = 0;

  for (const num of nums) {
    if (countBits(num) === countBits(curMin)) {
      curMin = Math.min(curMin, num);
      curMax = Math.max(curMax, num);
    } else {
      if (curMin < prevMax) return false;
      prevMax = curMax;
      curMin = num;
      curMax = num;
    }
  }

  return !(curMin < prevMax);
}
console.log({ canSortArray: canSortArray([1, 2, 3, 4, 5]) });

/**
 * @param {number[]} candidates 
 * @returns {number}
 */
function largestCombination(candidates) {
  let size = 0;

  for (let idx = 0; idx < 32; idx++) {
    let count = 0;

    for (const candidate of candidates) {
      count += 1 << idx & candidate ? 1 : 0;
    }

    size = Math.max(size, count);
  }

  return size;
}
console.log({ largestCombination: largestCombination([16, 17, 71, 62, 12, 24, 14]) });

/**
 * @param {number[]} nums 
 * @param {number} maximumBit 
 * @returns {number[]}
 */
function getMaximumXor(nums, maximumBit) {
  let xor = nums.reduce((acc, cur) => acc ^= cur, 0);
  const answer = [], mask = (1 << maximumBit) - 1;

  for (let idx = nums.length - 1; idx >= 0; idx--) {
    answer.push(xor ^ mask);
    xor ^= nums[idx];
  }

  return answer;
}
console.log({ getMaximumXor: getMaximumXor([0, 1, 1, 3], 2) });

/**
 * @param {number} n 
 * @param {number} x 
 * @returns {number}
 */
function minEnd(n, x) {
  let result = BigInt(x), remaining = BigInt(n - 1), position = 1n;

  while (remaining > 0n) {
    if ((BigInt(x) & position) === 0n) {
      result |= (remaining & 1n) * position;
      remaining >>= 1n;
    }

    position <<= 1n;
  }

  return Number(result);
}
console.log({ minEnd: minEnd(3, 4) });

/**
 * @param {(number | null)[][]} values 
 * @returns {boolean}
 */
function isLevelSymmetric(values) {
  for (let idx = 0; idx < values.length; idx++) {
    const row = values[idx];
    let left = 0, right = row.length - 1;

    while (left < right) {
      if (row[left++] !== row[right--]) return false;
    }
  }

  return true;
}

/**
 * @param {TreeNode | null} root 
 * @returns {boolean}
 */
function isSymmetric(root) {
  const nodeValues = [];
  const nodesQueue = [root];

  while (nodesQueue.length) {
    const size = nodesQueue.length;
    const values = [];

    for (let idx = 0; idx < size; idx++) {
      const node = nodesQueue.shift();

      if (node) {
        values.push(node.val);
        nodesQueue.push(node.left);
        nodesQueue.push(node.right);
      } else {
        values.push(null);
      }
    }

    nodeValues.push(values);
  }

  return isLevelSymmetric(nodeValues);
}

/**
 * @param {number} x 
 * @returns {boolean}
 */
function checkPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }

  return true;
}

/**
 * @param {number[]} nums 
 * @returns {boolean}
 */
function primeSubOperation(nums) {
  for (let i = 0; i < nums.length; i++) {
    let bound;

    if (i === 0) bound = nums[0];
    else bound = nums[i] - nums[i - 1];

    if (bound <= 0) return false;

    let largestPrime = 0;

    for (let j = bound - 1; j >= 2; j--) {
      if (checkPrime(j)) {
        largestPrime = j;
        break;
      }
    }

    nums[i] = nums[i] - largestPrime;
  }

  return true;
}
console.log({ primeSubOperation: primeSubOperation([6, 8, 11, 12]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
  const charIndexMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (charIndexMap.has(char)) {
      start = Math.max(start, charIndexMap.get(char) + 1);
    }

    charIndexMap.set(char, end);

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
console.log({ lengthOfLongestSubstring: lengthOfLongestSubstring("abcabcbb") });

/**
 * @param {number[]} stones 
 * @returns {number}
 */
function lastStoneWeight(stones) {
  const maxHeap = new MaxHeap((a, b) => a - b);
  stones.forEach((stone) => maxHeap.push(stone));

  while (maxHeap.size > 1) {
    const first = maxHeap.pop(), second = maxHeap.pop();

    if (first !== second) {
      const result = first - second;
      maxHeap.push(result);
    }
  }

  return maxHeap.peek() ?? 0;
}

/**
 * @param {number[][]} items 
 * @param {number} targetPrice 
 * @returns {number}
 */
function findBeauty(items, targetPrice) {
  let start = 0, end = items.length - 1;
  let maxBeauty = 0;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (items[mid][0] > targetPrice) {
      end = mid - 1;
    } else {
      maxBeauty = Math.max(maxBeauty, items[mid][1]);
      start = mid + 1;
    }
  }

  return maxBeauty;
}

/**
 * @param {number[][]} items 
 * @param {number[]} queries 
 * @returns {number[]}
 */
function maximumBeauty(items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  let maxBeauty = 0;
  const itemBeauty = [];

  for (const item of items) {
    maxBeauty = Math.max(maxBeauty, item[1]);
    item[1] = maxBeauty;
  }

  for (const price of queries) {
    itemBeauty.push(findBeauty(items, price));
  }

  return itemBeauty;
}
console.log({ maximumBeauty: maximumBeauty([[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], [1, 2, 3, 4, 5, 6]) });

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function minimumOperations(nums) {
  return new Set(nums.filter((x) => x > 0)).size;
}
console.log({ minimumOperations: minimumOperations([1, 5, 0, 3, 5]) });

/**
 * @param {number[]} nums 
 * @param {number} lower 
 * @param {number} upper 
 * @returns {number} 
 */
function countFairPairs(nums, lower, upper) {
  /**
   * @param {number} left 
   * @param {number} right 
   * @param {number} target 
   * @returns {number} 
   */
  function findIndex(left, right, target) {
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] >= target) right = mid - 1;
      else left = mid + 1;
    }

    return right;
  }

  nums.sort((a, b) => a - b);
  let count = 0;

  nums.forEach((num, idx) => {
    const low = lower - num, up = upper - num;
    count += findIndex(idx + 1, nums.length - 1, up + 1) - findIndex(idx + 1, nums.length - 1, low);
  });

  return count;
}
console.log({ countFairPairs: countFairPairs([0, 1, 7, 4, 4, 5], 3, 6) });

/**
 * @param {number} storeCount 
 * @param {number} x 
 * @param {number[]} quantities 
 * @returns {boolean}
 */
function canDistribute(storeCount, x, quantities) {
  let stores = 0;
  quantities.forEach((quantity) => stores += Math.ceil(quantity / x));
  return stores <= storeCount;
}

/**
 * @param {number} n 
 * @param {number[]} quantities 
 * @returns {number}
 */
function minimizedMaximum(n, quantities) {
  let start = 0, end = Math.max(...quantities), result = 0;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (canDistribute(n, mid, quantities)) {
      result = mid;
      end = mid - 1;
    } else start = mid + 1;
  }

  return result;
}
console.log({ minimizedMaximum: minimizedMaximum(6, [11, 6]) });

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function findLengthOfShortestSubarray(arr) {
  let right = arr.length - 1;

  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  let ans = right, left = 0;

  while (left < right && (left === 0 || arr[left - 1] <= arr[left])) {
    while (right < arr.length && arr[left] > arr[right]) {
      right++;
    }

    ans = Math.min(ans, right - left - 1);
    left++;
  }

  return ans;
}
console.log({ findLengthOfShortestSubarray: findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number[]}
 */
function resultsArray(nums, k) {
  const length = nums.length;
  const result = new Array(length - k + 1);

  for (let start = 0; start <= length - k; start++) {
    let isConsecutiveAndSorted = true;

    for (let index = start; index < start + k - 1; index++) {
      if (nums[index + 1] !== nums[index] + 1) {
        isConsecutiveAndSorted = false;
        break;
      }
    }

    if (isConsecutiveAndSorted) result[start] = nums[start + k - 1];
    else result[start] = -1;
  }

  return result;
}
console.log({ resultsArray: resultsArray([1, 2, 3, 4, 3, 2, 5], 3) });

/**
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number}
 */
function findKthPositive(arr, k) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const missingCount = arr[mid] - mid - 1;

    if (missingCount >= k) end = mid - 1;
    else start = mid + 1;
  }

  return start + k;
}
console.log({ findKthPositive: findKthPositive([2, 3, 4, 7, 11], 5) });

/**
 * @param {number[]} code 
 * @param {number} k 
 * @returns {number[]}
 */
function decrypt(code, k) {
  const length = code.length, decrypted = code.map(() => 0);
  const limit = Math.abs(k);
  let left = 0, curSum = 0;

  for (let right = 0; right < length + limit; right++) {
    curSum += code[right % length];

    if (right - left + 1 > limit) {
      curSum -= code[left % length];
      left = (left + 1) % length;
    }

    if (right - left + 1 === limit) {
      if (k > 0) decrypted[(left - 1 + length) % length] = curSum;
      else if (k < 0) decrypted[(right + 1) % length] = curSum;
    }
  }

  return decrypted;
}
console.log({ decrypt: decrypt([5, 7, 1, 4], 3) });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function maximumSubarraySum(nums, k) {
  let ans = 0, currentSum = 0, begin = 0, end = 0;
  const numToIndex = new Map();

  while (end < nums.length) {
    const currNum = nums[end];
    const lastOccurrence = numToIndex.has(currNum) ? numToIndex.get(currNum) : -1;

    while (begin <= lastOccurrence || end - begin + 1 > k) {
      currentSum -= nums[begin];
      begin++;
    }

    numToIndex.set(currNum, end);
    currentSum += nums[end];

    if (end - begin + 1 === k) {
      ans = Math.max(ans, currentSum);
    }

    end++;
  }

  return ans;
}
console.log({ maximumSubarraySum: maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3) });

/**
 * @param {string} s 
 * @param {number} k 
 * @returns {number}
 */
function takeCharacters(s, k) {
  const count = [0, 0, 0], n = s.length;

  for (const c of s) {
    count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  if (Math.min(...count) < k) return -1;

  let left = 0, minWindow = n + 1;

  for (let right = 0; right < n; right++) {
    count[s.charCodeAt(right) - 'a'.charCodeAt(0)]--;

    while (Math.min(...count) < k) {
      count[s.charCodeAt(left) - 'a'.charCodeAt(0)]++;
      left++;
    }

    minWindow = Math.min(minWindow, n - (right - left + 1));
  }

  return minWindow;
}
console.log({ takeCharacters: takeCharacters("aabaaaacaabc", 2) });

/**
 * @param {number[]} height 
 * @param {number} threshold 
 * @returns {number[]}
 */
function stableMountains(height, threshold) {
  const indices = [];

  for (let idx = 1; idx < height.length; idx++) {
    if (height[idx - 1] > threshold) indices.push(idx);
  }

  return indices;
}
console.log({ stableMountains: stableMountains([1, 2, 3, 4, 5], 2) });

/**
 * @param {number[][]} matrix 
 * @returns {number}
 */
function maxEqualRowsAfterFlips(matrix) {
  const rowCount = new Map();

  for (const row of matrix) {
    let rowKey = `${row}`;

    if (+rowKey[0] === 1)
      rowKey = `${row.map(num => num === 1 ? 0 : 1)}`;

    rowCount.set(rowKey, (rowCount.get(rowKey) || 0) + 1);
  }

  return Math.max(...rowCount.values());
}
console.log({ maxEqualRowsAfterFlips: maxEqualRowsAfterFlips([[0, 1], [1, 1]]) });

/**
 * @param {string[][]} box 
 * @returns {string[][]}
 */
function rotateTheBox(box) {
  const ROWS = box.length, COLS = box[0].length;

  for (let right = 0; right < ROWS; right++) {
    let left = COLS - 1;

    for (let col = COLS - 1; col >= 0; col--) {
      if (box[right][col] === "#") {
        [box[right][col], box[right][left]] = [box[right][left], box[right][col]];
        left--;
      } else if (box[right][col] === "*") left = col - 1;
    }
  }

  const result = [];

  for (let col = 0; col < COLS; col++) {
    const column = [];

    for (let row = ROWS - 1; row >= 0; row--) {
      column.push(box[row][col]);
    }

    result.push(column);
  }

  return result;
}
console.log({ rotateTheBox: rotateTheBox([["#", ".", "#"]]) });

/**
 * @param {string} paragraph 
 * @param {string[]} banned 
 * @returns {string}
 */
function mostCommonWord(paragraph, banned) {
  const bannedWords = new Set(banned);
  const wordCount = new Map();
  const updatedParagraph = paragraph.replace(/[!?',;.]/g, ' ').toLowerCase().split(' ');
  let maxOccurence = 0;

  for (const word of updatedParagraph) {
    if (word.length) {
      if (!bannedWords.has(word)) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
        maxOccurence = Math.max((wordCount.get(word) || 0), maxOccurence);
      }
    }
  }

  for (const [word, count] of wordCount) {
    if (count === maxOccurence) return word;
  }
}
console.log({ mostCommonWord: mostCommonWord("a.", []) });

/**
 * @param {string[]} words 
 * @returns {string[]}
 */
function findWords(words) {
  const firstRow = new Set("qwertyuiop");
  const secondRow = new Set("asdfghjkl");
  const thirdRow = new Set("zxcvbnm");
  const possibleWords = [];

  for (const word of words) {
    const lowerCaseWord = word.toLowerCase().split("");
    const isFirst = lowerCaseWord.every(char => firstRow.has(char));
    const isSecond = lowerCaseWord.every(char => secondRow.has(char));
    const isThird = lowerCaseWord.every(char => thirdRow.has(char));
    if (isFirst || isSecond || isThird) possibleWords.push(word);
  }

  return possibleWords;
}
console.log({ findWords: findWords(["Hello", "Alaska", "Dad", "Peace"]) });

/**
 * @param {string[]} list1 
 * @param {string[]} list2 
 * @returns {string[]}
 */
function findRestaurant(list1, list2) {
  const wordIndex = new Map();
  const commonWords = [];
  let minSum = Number.MAX_VALUE;

  list1.forEach((word, idx) => wordIndex.set(word, idx));

  list2.forEach((word, idx) => {
    if (wordIndex.has(word)) {
      const sum = idx + wordIndex.get(word);
      if (sum < minSum) {
        commonWords.length = 0;
        commonWords.push(word);
        minSum = sum;
      } else if (sum === minSum) {
        commonWords.push(word);
      }
    }
  });

  return commonWords;
}
console.log({ findRestaurant: findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]) });

/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @param {number} k 
 * @returns {number}
 */
function numberOfPairs(nums1, nums2, k) {
  let count = 0;
  const hashTable = new Map();

  nums2.forEach((num2) => {
    const multiple = num2 * k;
    hashTable.set(multiple, (hashTable.get(multiple) || 0) + 1);
  });

  nums1.forEach((num1) => {
    hashTable.forEach((freq, multiple) => {
      if (num1 % multiple === 0) count += freq;
    });
  });

  return count;
}
console.log({ numberOfPairs: numberOfPairs([1, 3, 4], [1, 3, 4], 1) });

/**
 * @param {string} key 
 * @param {string} message 
 * @returns {string}
 */
function decodeMessage(key, message) {
  const charMap = new Map();
  const decodedMessage = [];
  let count = 0;

  for (let idx = 0; idx < key.length; idx++) {
    const char = key[idx];
    if (char !== " ")
      if (!charMap.has(char))
        charMap.set(char, String.fromCharCode(97 + count++));
  }

  for (const char of message) {
    if (char === " ") decodedMessage.push(" ");
    else decodedMessage.push(charMap.get(char));
  }

  return decodedMessage.join("");
}
console.log({ decodeMessage: decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv") });

/**
 * @param {number[]} arr 
 * @returns {boolean}
 */
function checkIfExist(arr) {
  const nums = new Set();

  for (const num of arr) {
    if (nums.has(num * 2) || (num % 2 === 0 && nums.has(num / 2))) return true;
    nums.add(num);
  }

  return false;
}
console.log({ checkIfExist: checkIfExist([10, 2, 5, 3]) });

/**
 * @param {string} sentence 
 * @param {string} searchWord 
 * @returns {number}
 */
function isPrefixOfWord(sentence, searchWord) {
  const words = sentence.trim().split(" ");

  for (let idx = 0; idx < words.length; idx++) {
    if (words[idx].startsWith(searchWord)) return idx + 1;
  }

  return -1;
}
console.log({ isPrefixOfWord: isPrefixOfWord("i love eating burger", "burg") });

/**
 * @param {string[]} s 
 * @param {number[]} spaces 
 * @returns {string} 
 */
function addSpaces(s, spaces) {
  const result = [];
  let count = 0;

  for (let idx = 0; idx < s.length; idx++) {
    if (idx === spaces[count]) {
      count++;
      result.push(" ");
    }
    result.push(s[idx]);
  }

  return result.join("");
}
console.log({ addSpaces: addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]) });

/**
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 */
function canMakeSubsequence(str1, str2) {
  let first = 0, second = 0;

  while (first < str1.length && second < str2.length) {
    if (
      str1[first] === str2[second] ||
      str1.charCodeAt(first) + 1 === str2.charCodeAt(second) ||
      str1.charCodeAt(first) - 25 === str2.charCodeAt(second)
    ) {
      second++;
    }
    first++;
  }

  return second === str2.length;
}
console.log({ canMakeSubsequence: canMakeSubsequence("abc", "ad") });

/**
 * @param {string} start 
 * @param {string} target 
 * @returns {boolean}
 */
function canChange(start, target) {
  if (start === target) return true;
  let waitL = 0, waitR = 0;

  for (let i = 0; i < start.length; i++) {
    const curr = start[i];
    const goal = target[i];

    if (curr === 'R') {
      if (waitL > 0) return false;
      waitR++;
    }
    if (goal === 'L') {
      if (waitR > 0) return false;
      waitL++;
    }
    if (goal === 'R') {
      if (waitR === 0) return false;
      waitR--;
    }
    if (curr === 'L') {
      if (waitL === 0) return false;
      waitL--;
    }
  }

  return waitL === 0 && waitR === 0;
}
console.log({ canChange: canChange("_L__R__R_", "L______RR") });

/**
 * @param {number[]} banned 
 * @param {number} n 
 * @param {number} maxSum 
 * @returns {number}
 */
function maxCount(banned, n, maxSum) {
  const bannedNums = new Set();
  let count = 0;

  banned.forEach((num) => {
    if (num <= n) bannedNums.add(num);
  });

  for (let num = 1; num <= n; num++) {
    if (!bannedNums.has(num)) {
      if (maxSum - num < 0) return count;
      maxSum -= num;
      count++;
    }
  }

  return count;
}
console.log({ maxCount: maxCount([1, 6, 5], 5, 6) });

/**
 * @param {number[]} nums 
 * @param {number} maxOperations 
 * @returns {number}
 */
function minimumSize(nums, maxOperations) {
  /**
   * @param {number} maxBallsInBag 
   * @returns {boolean}
   */
  function canDivide(maxBallsInBag) {
    let operations = 0;

    for (const num of nums) {
      operations += Math.ceil(num / maxBallsInBag) - 1;
      if (operations > maxOperations) return false;
    }

    return true;
  }

  let left = 1, right = Math.max(...nums);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (canDivide(mid)) right = mid;
    else left = mid + 1;
  }

  return left;
}
console.log({ minimumSize: minimumSize([9], 2) });

/**
 * @param {number[][]} logs 
 * @returns {number}
 */
function maximumPopulation(logs) {
  const shift = 1950, yearsCount = 2050 - 1950 + 1;
  const population = Array(yearsCount).fill(0);

  for (const [start, end] of logs) {
    population[start - shift] += 1;
    population[end - shift] -= 1;
  }

  let cur = 0, max = 0, earliestYear = shift;

  for (let i = 0; i < population.length; i++) {
    cur += population[i];

    if (cur > max) {
      max = cur;
      earliestYear = i + shift;
    }
  }

  return earliestYear;
}
console.log({ maximumPopulation: maximumPopulation([[1993, 1999], [2000, 2010]]) });

/**
 * @param {number[]} arr 
 * @returns {number[][]}
 */
function minimumAbsDifference(arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  const result = [];

  for (let idx = 0; idx < arr.length - 1; idx++) {
    minDiff = Math.min(arr[idx + 1] - arr[idx], minDiff);
  }

  for (let idx = 0; idx < arr.length - 1; idx++) {
    if (arr[idx + 1] - arr[idx] === minDiff) result.push([arr[idx], arr[idx + 1]]);
  }

  return result;
}
console.log({ minimumAbsDifference: minimumAbsDifference([4, 2, 1, 3]) });

/**
 * @param {string} s 
 * @returns {number}
 */
function maximumLength(s) {
  const count = new Map();
  let substringLength = 0;

  for (let start = 0; start < s.length; start++) {
    const character = s[start];
    substringLength = 0;

    for (let end = start; end < s.length; end++) {
      if (character === s[end]) {
        substringLength++;
        const key = `${character},${substringLength}`;
        count.set(key, (count.get(key) || 0) + 1);
      } else break;
    }
  }

  let maxLength = 0;

  for (const [key, frequency] of count) {
    const [, len] = key.split(',').map(Number);
    if (frequency >= 3 && len > maxLength) maxLength = len;
  }

  return maxLength === 0 ? -1 : maxLength;
}
console.log({ maximumLength: maximumLength("aaaa") });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {number}
 */
function maximumBeauty(nums, k) {
  nums.sort((a, b) => a - b);

  let result = 0, left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > 2 * k) {
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}
console.log({ maximumBeauty: maximumBeauty([4, 6, 1, 2], 2) });

/**
 * @param {number[]} gifts 
 * @param {number} k 
 * @returns {number}
 */
function pickGifts(gifts, k) {
  const maxHeap = new MaxHeap((a, b) => a - b);

  for (const gift of gifts) {
    maxHeap.push(gift);
  }

  while (k > 0) {
    const pile = maxHeap.pop();
    const result = Math.floor(Math.sqrt(pile));
    maxHeap.push(result);
    k--;
  }

  let numberOfGifts = 0;

  while (maxHeap.size) {
    const numberOfGift = maxHeap.pop();
    numberOfGifts += numberOfGift;
  }

  return numberOfGifts;
}

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function findScore(nums) {
  let ans = 0;
  const marked = new Array(nums.length).fill(false);

  /**
   * @param {[number, number]} a
   * @param {[number, number]} b
   * @returns {number}
   */
  function compare(a, b) {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  }

  const heap = new MinHeap(compare);

  for (let i = 0; i < nums.length; i++) {
    heap.push([nums[i], i]);
  }

  while (heap.size > 0) {
    const [value, index] = heap.pop();

    if (!marked[index]) {
      ans += value;
      marked[index] = true;

      if (index - 1 >= 0) {
        marked[index - 1] = true;
      }
      if (index + 1 < nums.length) {
        marked[index + 1] = true;
      }
    }
  }

  return ans;
}

/**
 * @param {number[]} nums 
 * @returns {number}
 */
function continuousSubarrays(nums) {
  let right = 0, left = 0;
  let curMin, curMax;
  let windowLen = 0, total = 0;

  curMin = curMax = nums[right];

  for (right = 0; right < nums.length; right++) {
    curMin = Math.min(curMin, nums[right]);
    curMax = Math.max(curMax, nums[right]);

    if (curMax - curMin > 2) {
      windowLen = right - left;
      total += (windowLen * (windowLen + 1)) / 2;

      left = right;
      curMin = curMax = nums[right];

      while (left > 0 && Math.abs(nums[right] - nums[left - 1]) <= 2) {
        left--;
        curMin = Math.min(curMin, nums[left]);
        curMax = Math.max(curMax, nums[left]);
      }

      if (left < right) {
        windowLen = right - left;
        total -= (windowLen * (windowLen + 1)) / 2;
      }
    }
  }

  windowLen = right - left;
  total += (windowLen * (windowLen + 1)) / 2;

  return total;
}
console.log({ continuousSubarrays: continuousSubarrays([5, 4, 2, 4]) });

/**
 * @param {string[][]} items 
 * @param {string} ruleKey 
 * @param {string} ruleValue 
 * @returns {number}
 */
function countMatches(items, ruleKey, ruleValue) {
  let count = 0;

  for (const [type, color, name] of items) {
    if (ruleKey === "type") {
      if (ruleValue === type) count++;
    } else if (ruleKey === "color") {
      if (ruleValue === color) count++;
    } else if (ruleKey === "name") {
      if (ruleValue === name) count++;
    }
  }

  return count;
}
console.log({ countMatches: countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver") });

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @param {number} multiplier 
 * @returns {number[]}
 */
function getFinalState(nums, k, multiplier) {
  const minHeap = new MinHeap((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  nums.forEach((num, idx) => minHeap.push([num, idx]));

  while (k--) {
    const [, idx] = minHeap.pop();
    nums[idx] *= multiplier;
    minHeap.push([nums[idx], idx]);
  }

  return nums;
}

/**
 * @param {string} s 
 * @param {number} repeatLimit 
 * @returns {string}
 */
function repeatLimitedString(s, repeatLimit) {
  const charCount = new Map();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  const maxHeap = new MaxHeap((a, b) => a.localeCompare(b));

  for (const [char] of charCount) {
    maxHeap.push(char);
  }

  const result = [];

  while (maxHeap.size) {
    const char = maxHeap.pop();
    const count = charCount.get(char);
    const use = Math.min(count, repeatLimit);

    result.push(char.repeat(use));
    charCount.set(char, count - use);

    if (charCount.get(char) && maxHeap.size) {
      const nextChar = maxHeap.pop();
      result.push(nextChar);

      const nextCount = charCount.get(nextChar);
      charCount.set(nextChar, nextCount - 1);

      if (charCount.get(nextChar)) {
        maxHeap.push(nextChar);
      }

      maxHeap.push(char);
    }
  }

  return result.join('');
}

/**
 * 
 * @param {number[]} prices 
 * @returns {number[]}
 */
function finalPrices(prices) {
  const result = [...prices], stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      result[stack.pop()] -= prices[i];
    }

    stack.push(i);
  }

  return result;
}
console.log({ finalPrices: finalPrices([8, 4, 6, 2, 3]) });
