// Interview question - 1
function addMissingNumbers(arr) {
  arr.sort((a, b) => a - b);

  let missingNumbers = [];

  for (let count = arr[0]; count < arr[arr.length - 1]; count++) if (!arr.includes(count)) missingNumbers.push(count);

  return missingNumbers.length;
}

console.log(addMissingNumbers([-2, 2, 10]));

// Interview question - 2
function reverseWords(str) {
  let reverseStrArray = str.split(' '), result = [];

  for (let i = 0; i < reverseStrArray.length; i++) {
    result.push(reverseStrArray[i].split('').reverse().join(''));
  }

  return result.join(' ');
}

console.log(reverseWords('Welcome! Guide to learn development'));

// Interview question - 3
function findUniqueVal(arr) {
  let count = {}, resultArray = [];

  for (let element of arr) {
    if (count[element]) count[element] += 1;
    else count[element] = 1;
  }

  for (let element in count) {
    if (count[element] !== 1) delete count[element];
    if (count.hasOwnProperty(element)) resultArray.push(element);
  }

  if (resultArray.length === 0) return 'No Unique element found';
  return resultArray;
}

console.log(findUniqueVal(['a', 'b', 'c', 'd', 'b', 'c', 'e']));

// Interview question - 4
function findPrimeNumbers(num) {
  let isPrime = true;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) isPrime = false;
  }

  if (isPrime) return (`${num} is prime`);
  else return (`${num} is not prime`);
}

console.log(findPrimeNumbers(859));

// Interview question - 5
function combineUniqueCharacters(arr) {
  let resultArray = [];

  arr = arr.join('');

  for (let i = 0; i < arr.length; i++) {
    if (!resultArray.includes(arr[i])) resultArray.push(arr[i]);
  }

  return resultArray.join('').length;
}

console.log(combineUniqueCharacters(['ab', 'cd', 'ef', 'ad', 'ef']));

a = 10;
console.log(a);
var a;
let b = 20;
console.log(b);

console.log(a);
var a = 10;

let obj1 = { a: 10 };
const obj2 = { ...obj1 };
obj2.a = 20;
console.log(obj1);
console.log(obj2);

const object = {
  name: 'john',
  display: () => {
    console.log(this.name); // empty string as it is pointing to the window object name key because we are using arrow function
  },
};
object.display();

console.log(41 + '3' + 2 - 6);

// Prototype in js
// Event loop in js
// React coding question - passing props from child to parent
// currying in js
// shallow copy and deep copy in js

function findSum(nums) {
  for (let num = 0; num < nums.length; num++) {
    let factors = [],
      factorsSum = 0;

    for (let i = 1; i < nums[num]; i++) {
      if (nums[num] % i === 0) factors.push(i);
    }

    for (let i = 0; i < factors.length; i++) {
      factorsSum += factors[i];
    }

    if (factorsSum === nums[num]) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
}

findSum([2, 6, 28]);
