/**
 * @problem_one A celebrity is a person who is known to all but does not know anyone at a party.
 * If you go to a party of N people, find if there is a celebrity in the party or not.
 * A square NxN matrix M[][] is used to represent people at the party such that if an element of row i and column j  is set to 1 it means ith person knows jth person. Here M[i][i] will always be 0.
 */
/**
 * @solution_one
 */
class Solution {
  celebrity(M, n) {
    const persons = [];

    for (let index = 0; index < n; index++) {
      persons.push(index);
    }

    while (persons.length > 1) {
      const personOne = persons.pop();
      const personTwo = persons.pop();

      if (this.knows(M, personOne, personTwo)) {
        persons.push(personTwo);
      } else {
        persons.push(personOne);
      }
    }

    const potentialCandidate = persons[persons.length - 1];

    let zeroCount = 0, oneCount = 0;

    for (let index = 0; index < n; index++) {
      if (M[potentialCandidate][index] === 0) {
        zeroCount++;
      }
    }

    if (zeroCount !== n) return -1;

    for (let index = 0; index < n; index++) {
      if (M[index][potentialCandidate] === 1) {
        oneCount++;
      }
    }

    if (oneCount !== n - 1) return -1;

    return potentialCandidate;
  }

  knows(M, a, b) {
    return M[a][b] === 1;
  }
}

/**
 * @problem_two
 * You are required to complete two methods push() and pop().
 * The push() method takes one argument, an integer 'x' to be pushed into the stack and pop() which returns an integer present at the top and popped out from the stack.
 * If the stack is empty then return -1 from the pop() method.
 */
/**
 * @solution_two
 */
class MyStack {
  constructor() {
    this.top = null;
    this.stackList = null;
  }

  push(a) {
    const tempNode = new StackNode(a);
    tempNode.next = this.stackList;
    this.stackList = tempNode;
  }

  pop() {
    if (this.stackList === null) {
      return -1;
    }

    const removedNodeData = this.stackList.data;
    this.stackList = this.stackList.next;
    return removedNodeData;
  }
}

/**
 * @problem_three
 * Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
 */
/**
 * @solution_three
 */
class MissingNumber {
  missingNumber(array, n) {
    //code here
    let numSum = (n * (n + 1)) / 2;

    for (let i = 0; i < array.length; i++) {
      numSum -= array[i];
    }

    return numSum;
  }
}
const missingNumbers = new MissingNumber();
console.log({ missingNumbers: missingNumbers.missingNumber([1, 3, 4, 5, 6, 7, 8], 8) });

/**
 * @problem_four
 * Given a Queue Q containing N elements. The task is to reverse the Queue. Your task is to complete the function rev(), that reverses the N elements of the queue.
 */
/**
 * @solution_four
 */
class MyQueueReversal {
  rev(q) {
    const stack = [];

    while (!q.empty()) {
      const element = q.pop();
      stack.push(element);
    }

    while (stack.length !== 0) {
      const element = stack.pop();
      q.push(element);
    }

    return q;
  }
}

/**
 * @problem_five
 * Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K.
 */
/**
 * @solution_five
 */
class NegativeInteger {
  printFirstNegativeInteger(n, k, arr) {
    const indices = [], answer = [];

    for (let i = 0; i < k; i++) {
      if (arr[i] < 0) {
        indices.push(i);
      }
    }

    if (indices.length !== 0) {
      answer.push(arr[indices[0]]);
    } else {
      answer.push(0);
    }

    for (let i = k; i < n; i++) {
      if (indices.length !== 0 && i - indices[0] >= k) {
        indices.shift();
      }

      if (arr[i] < 0) {
        indices.push(i);
      }

      if (indices.length !== 0) {
        answer.push(arr[indices[0]]);
      } else {
        answer.push(0);
      }
    }

    return answer;
  }
}
