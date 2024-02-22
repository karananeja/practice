/**
 * @problem_one A celebrity is a person who is known to all but does not know anyone at a party.
 * If you go to a party of N people, find if there is a celebrity in the party or not.
 * A square NxN matrix M[][] is used to represent people at the party such that if an element of row i and column j  is set to 1 it means ith person knows jth person. Here M[i][i] will always be 0.
 */
/**
 * @solution_one
 */
class Celebrity {
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

/**
 * @problem_six Your task is to complete the function `height()` which takes root node of the tree as input parameter and returns an integer denoting the height of the tree. If the tree is empty, return 0.
 */
/**
 * @solution_six
 */
class TreeHeight {
  height(node) {
    //your code here
    if (node === null) {
      return 0;
    }

    const left = this.height(node.left);
    const right = this.height(node.right);
    const ans = Math.max(left, right) + 1;
    return ans;
  }
};

/**
 * @problem_seven Just complete the function boundary() that takes the root node as input and returns an array containing the boundary values in anti-clockwise.
 */
/**
 * @solution_seven
 */
class BoundaryTraversal {
  traverseLeft(root, nodes) {
    if (!root || (!root.left && !root.right)) return;

    nodes.push(root.data);

    if (root.left)
      this.traverseLeft(root.left, nodes);
    else
      this.traverseLeft(root.right, nodes);
  }

  traverseLeaf(root, nodes) {
    if (!root) return;

    if (!root.left && !root.right) return nodes.push(root.data);

    this.traverseLeaf(root.left, nodes);
    this.traverseLeaf(root.right, nodes);
  }

  traverseRight(root, nodes) {
    if (!root || (!root.left && !root.right)) return;

    if (root.right)
      this.traverseRight(root.right, nodes);
    else
      this.traverseRight(root.left, nodes);

    nodes.push(root.data);
  }

  boundary(root) {
    //your goes code here
    const boundaryNodes = [];
    if (!root) return boundaryNodes;

    boundaryNodes.push(root.data);

    this.traverseLeft(root.left, boundaryNodes);
    this.traverseLeaf(root.left, boundaryNodes);
    this.traverseLeaf(root.right, boundaryNodes);
    this.traverseRight(root.right, boundaryNodes);

    return boundaryNodes;
  }
}

/**
 * @problem_eight You do not have to take any input or print anything. You need to complete the function checkPangram() that takes a string as a parameter and returns true if the string is a Panagram, or else it returns false.
 */
/**
 * @solution_eight
 */
class Panagram {
  //Function to check if a string is Pangram or not.
  checkPangram(s) {
    // code here
    let tempString = '';
    const charCount = new Array(26).fill(1);

    for (let i = 0; i < s.length; i++) {
      if (this.validChar(s[i])) {
        tempString += this.toLowerCase(s[i]);
      }
    }

    for (let i = 0; i < tempString.length; i++) {
      const index = tempString[i].charCodeAt(0) - 'a'.charCodeAt(0);
      charCount[index]--;
    }

    return charCount.every((char) => char <= 0);
  }

  validChar(char) {
    return (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9')
    );
  }

  toLowerCase(char) {
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      return char;
    } else {
      return String.fromCharCode(char.charCodeAt(0) + 32);
    }
  }
}

/**
 * @problem_nine You do not have to take any input or print anything. Complete the function atoi() which takes a string s as an input parameter and returns an integer value representing the given string. If the conversion is not feasible, the function should return -1.
 */
/**
 * @solution_nine
 */
class AtoI {
  atoi(s) {
    //code here
    let ans = 0, negative = false;

    for (let i = 0; i < s.length; i++) {
      if (s[i] >= '0' && s[i] <= '9') {
        ans = ans * 10 + (s[i] - '0');
      } else if (s[i] === '-' && i === 0)
        negative = true;
      else {
        return -1;
      }
    }

    return ans > 0 && negative ? -ans : ans;
  }
}

/**
 * @problem_ten You don't need to read input or print anything. Your task is to complete the function verticalOrder() which takes the root node as input parameter and returns an array containing the vertical order traversal of the tree from the leftmost to the rightmost level. If 2 nodes lie in the same vertical level, they should be printed in the order they appear in the level order traversal of the tree.
 */
/**
 * @solution_ten
 */
class VerticalOrder {
  //Function to find the vertical order traversal of Binary Tree.
  verticalOrder(root) {
    //your code here
    const result = [];
    if (!root) return result;

    // Using two queues to perform level-order traversal.
    const queue = [{ node: root, hd: 0 }];
    let minHD = 0;
    let maxHD = 0;

    while (queue.length) {
      const { node, hd } = queue.shift();

      // Update minHD and maxHD to keep track of the range of horizontal distances.
      minHD = Math.min(minHD, hd);
      maxHD = Math.max(maxHD, hd);

      // If the result array doesn't have the horizontal distance index, create it.
      if (typeof result[hd] === 'undefined') {
        result[hd] = [];
      }

      // Push the node's value to the array corresponding to its horizontal distance.
      result[hd].push(node.data);

      // Enqueue the left child with updated horizontal distance.
      if (node.left) {
        queue.push({ node: node.left, hd: hd - 1 });
      }

      // Enqueue the right child with updated horizontal distance.
      if (node.right) {
        queue.push({ node: node.right, hd: hd + 1 });
      }
    }

    // Flatten the result array and return.
    const flattenedResult = [];
    for (let i = minHD; i <= maxHD; i++) {
      if (result[i]) {
        flattenedResult.push(...result[i]);
      }
    }

    return flattenedResult;
  }
}

/**
 * @problem_eleven Since this is a function problem. You don't have to take input. Just complete the function topView() that takes root node as parameter and returns a list of nodes visible from the top view from left to right.
 */
/**
 * @solution_eleven
 */
class TopView {
  //Function to return a list of nodes visible from the top view 
  //from left to right in Binary Tree.
  topView(root) {
    //your code here
    const ans = [];

    if (!root) return ans;

    const nodesMap = {};
    const nodesQueue = [];

    nodesQueue.push([root, 0]);

    while (nodesQueue.length) {
      const temp = nodesQueue.shift();
      const frontNode = temp[0], horizontalDistance = temp[1];

      // Initialize if not exist
      if (!nodesMap[horizontalDistance]) nodesMap[horizontalDistance] = { value: frontNode.data };

      if (frontNode.left)
        nodesQueue.push([frontNode.left, horizontalDistance - 1]);

      if (frontNode.right)
        nodesQueue.push([frontNode.right, horizontalDistance + 1]);
    }

    const sortedKeys = Object.keys(nodesMap).sort((a, b) => a - b);

    for (const node of sortedKeys) {
      ans.push(nodesMap[node].value);
    }

    return ans;
  }
}

/**
 * @problem_twelve You just have to complete the function leftView() that returns an array containing the nodes that are in the left view. The newline is automatically appended by the driver code.
 */
/**
 * @solution_twelve
 */
class LeftView {
  solve(root, ans, level) {
    if (!root) return;

    if (level === ans.length) ans.push(root.data);

    this.solve(root.left, ans, level + 1);
    this.solve(root.right, ans, level + 1);
  }

  leftView(root) {
    //your code here
    const ans = [];
    this.solve(root, ans, 0);
    return ans;
  }
}
