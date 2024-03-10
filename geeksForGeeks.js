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

/**
 * @problem_thirteen Just complete the function rightView() that takes node as parameter and returns the right view as a list. 
 */
/**
 * @solution_thirteen
 */
class RightView {
  solve(root, ans, level) {
    if (!root) return;

    if (level === ans.length) ans.push(root.data);

    this.solve(root.right, ans, level + 1);
    this.solve(root.left, ans, level + 1);
  }

  rightView(root) {
    //your code here
    const ans = [];
    this.solve(root, ans, 0);
    return ans;
  }
}

/**
 * @problem_fourteen Your task is to complete the function tour() which takes the required data as inputs and returns an integer denoting a point from where a truck will be able to complete the circle (The truck will stop at each petrol pump and it has infinite capacity). If there exists multiple such starting points, then the function must return the first one out of those. (return -1 otherwise)
 */
/**
 * @solution_fourteen
 */
class Tour {
  //Function to find starting point where the truck can start to get through
  //the complete circle without exhausting its petrol in between.
  tour(p, n) {
    //your code here
    let deficit = 0, balance = 0, start = 0, i = 0;

    while (i < n) {
      balance += p[i].petrol - p[i].distance;
      if (balance < 0) {
        deficit += balance;
        start = i + 1;
        balance = 0;
      }
      i++;
    }

    return deficit + balance >= 0 ? start : -1;
  }
}

/**
 * @problem_fifteen You don't need to read input or print anything. Your task is to complete the function getMinMax() which takes the array A[] and its size N as inputs and returns the minimum and maximum element of the array.
 */
/**
 * @problem_fifteen
 */
class MinMax {
  getMinMax(arr, n) {
    //code here
    let min = Infinity, max = -Infinity;

    for (let i = 0; i < n; i++) {
      if (min > arr[i]) min = arr[i];
      if (max < arr[i]) max = arr[i];
    }

    return [min, max];
  }
}

/**
 * @problem_sixteen The task is to complete the function search() which takes the array arr[], its size N and the element X as inputs and returns the index of first occurrence of X in the given array. If the element X does not exist in the array, the function should return -1.
 */
/**
 * @solution_sixteen
 */
class Search {
  search(arr, N, X) {
    // write your code here
    for (let i = 0; i < N; i++) {
      if (arr[i] === X) return i;
    }

    return -1;
  }
}

/**
 * @problem_seventeen Complete the provided function modifyQueue() that takes queue and K as parameters and returns a modified queue. The printing is done automatically by the driver code.
 */
/**
 * @solution_seventeen
 */
class ModifyQueue {
  // Function to reverse first k elements of a queue.
  modifyQueue(q, k) {
    // your code here
    const tempList = [];
    let remainingSize = q.arr.length - k;

    for (let i = 0; i < k; i++) {
      const num = q.pop();
      tempList.push(num);
    }

    while (tempList.length !== 0) {
      const num = tempList.pop();
      q.push(num);
    }

    while (remainingSize--) {
      const element = q.pop();
      q.push(element);
    }

    return q;
  }
}

/**
 * @problem_eighteen This is a functional problem, you don't need to care about input, just complete the function bottomView() which takes the root node of the tree as input and returns an array containing the bottom view of the given tree.
 */
/**
 * @solution_eighteen
 */
class BottomView {
  //Function to return a list containing the bottom view of the given tree.
  bottomView(root) {
    //your code here
    const ans = [];

    if (!root) return ans;

    const nodesMap = {}, nodesQueue = [];

    nodesQueue.push([root, 0]);

    while (nodesQueue.length) {
      const temp = nodesQueue.shift();
      const frontNode = temp[0], horizontalDistance = temp[1];

      // Initialize if not exist
      nodesMap[horizontalDistance] = frontNode.data;

      if (frontNode.left)
        nodesQueue.push([frontNode.left, horizontalDistance - 1]);

      if (frontNode.right)
        nodesQueue.push([frontNode.right, horizontalDistance + 1]);
    }

    const sortedKeys = Object.keys(nodesMap).sort((a, b) => a - b);

    for (const node of sortedKeys) {
      ans.push(nodesMap[node]);
    }

    return ans;
  }
}

/**
 * @problem_nineteen You don't need to read or print anything. Your task is to complete the function FirstNonRepeating() which takes A as input parameter and returns a string after processing the input stream.
 */
/**
 * @solution_nineteen
 */
class FirstNonRepeating {
  firstNonRepeating(A) {
    //code here
    const count = {}, charQueue = [];
    let ans = "";

    for (let i = 0; i < A.length; i++) {
      const char = A[i];
      count[char] = (count[char] || 0) + 1;

      charQueue.push(char);

      while (charQueue.length) {
        if (count[charQueue[0]] > 1) {
          charQueue.shift();
        } else {
          ans += charQueue[0];
          break;
        }

        if (charQueue.length === 0) {
          ans += "#";
        }
      }
    }

    return ans;
  }
}

/**
 * @problem_twenty You don't need to read input or print anything. Your task is to complete the function zigZagTraversal() which takes the root node of the Binary Tree as its input and returns a list containing the node values as they appear in the zig-zag level-order traversal of the tree.
 */
/**
 * @solution_twenty
 */
class ZigZagTraversal {
  //Function to store the zig zag order traversal of tree in a list.
  zigZagTraversal(root) {
    //your code here
    const result = [];
    if (!root) return result;

    const currentQueue = [];
    currentQueue.push(root);

    let leftToRight = true;

    while (currentQueue.length) {
      const size = currentQueue.length;
      const currentRow = [];

      for (let idx = 0; idx < size; idx++) {
        const frontNode = currentQueue.shift();
        const index = leftToRight ? idx : size - idx - 1;
        currentRow[index] = frontNode.val;

        if (frontNode.left) currentQueue.push(frontNode.left);

        if (frontNode.right) currentQueue.push(frontNode.right);
      }

      leftToRight = !leftToRight;
      result.push(currentRow);
    }

    return result;
  }
}

/**
 * @problem_twentyOne You don't need to read input or print anything. Your task is to complete the function sumOfLongRootToLeafPath() which takes root node of the tree as input parameter and returns an integer denoting the sum of the longest root to leaf path of the tree.
 */
/**
 * @solution_twentyOne
 */
class SumOfLongRootToLeafPath {
  sumOfLongRootToLeafPath(root) {
    //code here
    let maxLen = 0, sum = 0, maxSum = -Infinity;

    function solve(root, sum, len) {
      if (!root) {
        if (len > maxLen) {
          maxLen = len;
          maxSum = sum;
        } else if (len === maxLen) {
          maxSum = Math.max(sum, maxSum);
        }
        return;
      }

      sum += root.data;
      solve(root.left, sum, len + 1);
      solve(root.right, sum, len + 1);
    }

    solve(root, sum, 0);
    return maxSum;
  }
}

/**
 * @problem_twentyTwo You don't have to read, input, or print anything. Your task is to complete the function lca() that takes nodes, n1, and n2 as parameters and returns the LCA node as output.
 */
/**
 * @solution_twentyTwo
 */
class LCA {
  //Function to return the lowest common ancestor in a Binary Tree.
  lca(root, n1, n2) {
    //your code here
    if (!root) return null;
    if (root.data === n1 || root.data === n2) return root;

    const leftAns = this.lca(root.left, n1, n2);
    const rightAns = this.lca(root.right, n1, n2);

    if (leftAns !== null && rightAns !== null) return root;
    else if (leftAns !== null && !rightAns) return leftAns;
    else if (!leftAns && rightAns !== null) return rightAns;
    else return null;
  }
}

/**
 * @problem_twentyThree You don't need to read input or print anything. Complete the function sumK() which takes root node and integer K as input parameters and returns the number of paths that have sum K. 
 */
/**
 * @solution_twentyThree
 */
class SumK {
  constructor() {
    this.path = [];
    this.count = 0;
  }

  sumK(root, k) {
    //code here
    if (!root) return this.count;

    this.path.push(root.data);

    this.sumK(root.left, k);
    this.sumK(root.right, k);

    let sum = 0;

    for (let i = this.path.length - 1; i >= 0; i--) {
      sum += this.path[i];
      if (sum === k) this.count++;
    }

    this.path.pop();
    return this.count;
  }
}

/**
 * @problem_twentyFour You are asked to complete the function kthAncestor() which accepts root of the tree, k and node as input parameters, and returns the kth ancestor of Node which contains node as its value.
 */
/**
 * @solution_twentyFour
 */
class KthAncestor {
  kthAncestorOne(root, k, baseNode) {
    //code here
    const nodePaths = [];

    function getPaths(node, currentPath) {
      if (!node) return;
      const path = [...currentPath];
      path.push(node.data);
      if (node.data === baseNode) nodePaths.push(path);
      getPaths(node.left, path);
      getPaths(node.right, path);
    }

    getPaths(root, []);

    for (const currentPath of nodePaths) {
      return currentPath[currentPath.length - 1 - k] ? currentPath[currentPath.length - 1 - k] : -1;
    }
  }

  kthAncestorTwo(root, k, node) {
    //code here
    function solve(node, nodeValue) {
      if (!node) return null;

      if (node.data === nodeValue) return node;

      const leftAns = solve(node.left, nodeValue);
      const rightAns = solve(node.right, nodeValue);

      if (leftAns !== null && !rightAns) {
        k--;

        if (k <= 0) {
          k = Infinity;
          return node;
        }

        return leftAns;
      }

      if (!leftAns && rightAns !== null) {
        k--;

        if (k <= 0) {
          k = Infinity;
          return node;
        }

        return rightAns;
      }

      return null;
    }

    const ans = solve(root, node);
    return !ans || ans.data === node ? -1 : ans.data;
  }
}

/**
 * @problem_twentyFive You don't need to read input or print anything. You just have to complete function getMaxSum() which accepts root node of the tree as parameter and returns the maximum sum as described.
 */
/**
 * @solution_twentyFive
 */
class GetMaxSum {
  //Function to return the maximum sum of non-adjacent nodes.
  solve(node) {
    if (!node) return [0, 0];

    const leftAns = this.solve(node.left);
    const rightAns = this.solve(node.right);

    const result = [];
    // maxSum including the root at the current level
    result[0] = node.data + leftAns[1] + rightAns[1];
    // maxSum excluding the root at the current level
    result[1] = Math.max(...leftAns) + Math.max(...rightAns);
    return result;
  }

  getMaxSum(root) {
    //your code here
    const answer = this.solve(root);
    return Math.max(...answer);
  }
}

/**
 * @problem_twentySix Your task is to complete the function buildTree() which takes 3 arguments(inorder traversal array, preorder traversal array, and size of tree n) and returns the root node to the tree constructed. You are not required to print anything and a new line is added automatically (The post order of the returned tree is printed by the driver's code.)
 */
/**
 * @solution_twentySix
 */
class BuildTreeWithPreOrder {
  constructor() {
    this.index = 0;
    this.nodeToIndex = new Map();
  }

  findPosition(inorder, element, inorderStart) {
    for (let i = inorderStart; i < inorder.length; i++) {
      if (inorder[i] === element) return i;
    }
    return -1;
  }

  solve(inorder, preorder, inorderStart, inorderEnd) {
    if (this.index >= preorder.length || inorderStart > inorderEnd) return null;

    const element = preorder[this.index++];
    const root = new Node(element);
    const position = this.findPosition(inorder, element, inorderStart);

    root.left = this.solve(inorder, preorder, inorderStart, position - 1);
    root.right = this.solve(inorder, preorder, position + 1, inorderEnd);

    return root;
  }

  buildTree(inorder, preorder, n) {
    return this.solve(inorder, preorder, 0, n - 1);
  }
}

/**
 * @problem_twentySeven You do not need to read input or print anything. Complete the function buildTree() which takes the inorder, postorder traversals and the number of nodes in the tree as input parameters and returns the root node of the newly constructed Binary Tree.
The generated output contains the preorder traversal of the constructed tree.
 */
/**
 * @problem_twentySeven
 */
class BuildTreeWithPostOrder {
  constructor() {
    this.index = 0;
    this.nodeToIndex = new Map();
  }

  findPosition(inorder, element, inorderStart) {
    for (let i = inorderStart; i < inorder.length; i++) {
      if (inorder[i] === element) return i;
    }
    return -1;
  }

  solve(inorder, postorder, inorderStart, inorderEnd) {
    if (this.index < 0 || inorderStart > inorderEnd) return null;

    const element = postorder[this.index--];
    const root = new Node(element);
    const position = this.findPosition(inorder, element, inorderStart);

    root.right = this.solve(inorder, postorder, position + 1, inorderEnd);
    root.left = this.solve(inorder, postorder, inorderStart, position - 1);

    return root;
  }
  //Function to return a tree created from postorder and inoreder traversals.
  buildTree(ino, post, n) {
    this.index = ino.length - 1;
    //your code here
    return this.solve(ino, post, 0, n - 1);
  }
}

/**
 * @problem_twentyEight You don't need to read input or print anything. Complete the function minTime() which takes the root of the tree and target as input parameters and returns the minimum time required to burn the complete binary tree if the target is set on fire at the 0th second.
 */
/**
 * @solution_twentyEight
 */
class MinTime {
  getParentMapping(node, start) {
    let targetNode = null;
    const nodeToParentMap = new Map(), queue = [node];

    while (queue.length) {
      const frontNode = queue.shift();

      if (frontNode.key === start) targetNode = frontNode;

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

  infectTree(node, nodeToParent) {
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

  minTime(root, target) {
    //code here
    const { nodeToParentMap, targetNode } = this.getParentMapping(root, target);
    return this.infectTree(targetNode, nodeToParentMap);
  }
}

/**
 * @problem_twentyNine You don't have to read input or print anything. Your task is to complete the function flatten() which takes the root of the tree and flattens the tree into a linked list without using any auxiliary space.
 */
/**
 * @solution_twentyNine
 */
class Flatten {
  flatten(root) {
    //code here
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

    return root;
  }
}