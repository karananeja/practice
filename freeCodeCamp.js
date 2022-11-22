// Problem - 1
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));

// Problem - 2
function translatePigLatin(str) {
  let vowelRegEx = /[aeiou]/, isVowel = false, consonantStr = '';
  let vowelsStr = 'way', consonantsStr = 'ay';

  let firstVowel = str.match(vowelRegEx);

  if (firstVowel && str.indexOf(firstVowel)) {
    consonantStr += str.substring(0, firstVowel.index);
    isVowel = false;
  } else if (!str.match(vowelRegEx)) {
    consonantStr = '';
    isVowel = false;
  }
  else {
    isVowel = true;
  }

  if (isVowel) {
    str += vowelsStr;
  }
  else {
    str = str.replace(consonantStr, '');
    str += consonantStr + consonantsStr;
  }

  return str;
}

console.log(translatePigLatin("eight"));

// Problem - 3
function myReplace(str, before, after) {
  if (before[0].toUpperCase() === before[0]) after = after.replace(after[0], after[0].toUpperCase());
  else after = after.replace(after[0], after[0].toLowerCase());

  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// Problem - 4
function pairElement(str) {
  let pairedElement = [];

  for (let elementIndex in str) {
    if (str[elementIndex] === 'G') pairedElement.push(['G', 'C']);
    else if (str[elementIndex] === 'C') pairedElement.push(['C', 'G']);
    else if (str[elementIndex] === 'A') pairedElement.push(['A', 'T']);
    else if (str[elementIndex] === 'T') pairedElement.push(['T', 'A']);
  }

  return pairedElement;
}

console.log(pairElement("GCG"));

// Problem - 5
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));

// Problem - 1
function sumPrimes(num) {
  let count = 0, // To keep track of number of factors a digit will have
    numbers = [], // To populate the array until the number provided
    oddNumSum = 0; // To keep track of sum all of the prime numbers

  for (let i = 2; i <= num; i++) numbers.push(i);

  numbers.forEach((num) => {
    count = 0;

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) count++;
    }

    if (!(count > 1)) oddNumSum += num;
  });

  return oddNumSum;
}

console.log(sumPrimes(10));
