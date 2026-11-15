class Heap {
  constructor(heapSize) {
    this.values = new Array(heapSize);
    this.values[0] = -1;
    this.size = 0;
  }

  insert(value) {
    let currentIndex = ++this.size;
    this.values[currentIndex] = value;

    while (currentIndex > 1) {
      const parentIndex = Math.floor(currentIndex / 2);

      if (this.values[parentIndex] < this.values[currentIndex]) {
        const temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[currentIndex];
        this.values[currentIndex] = temp;
        currentIndex = parentIndex;
      } else return;
    }
  }

  log() {
    let idx = 1;

    while (idx <= this.size) {
      console.log(this.values[idx++]);
    }
  }

  delete() {
    if (this.size === 0) {
      console.log('nothing to delete');
      return;
    }

    this.values[1] = this.values[this.size];
    delete this.values[this.size--];

    let idx = 1;

    while (idx < this.size) {
      const leftIndex = 2 * idx,
        rightIndex = 2 * idx + 1;

      if (leftIndex < this.size && this.values[idx] < this.values[leftIndex]) {
        [this.values[leftIndex], this.values[idx]] = [
          this.values[idx],
          this.values[leftIndex],
        ];
        idx = leftIndex;
      } else if (
        rightIndex < this.size &&
        this.values[idx] < this.values[rightIndex]
      ) {
        [this.values[rightIndex], this.values[idx]] = [
          this.values[idx],
          this.values[rightIndex],
        ];
        idx = rightIndex;
      } else return;
    }
  }
}
const testHeap = new Heap(10);

function heapify(nums, idx, heapSize) {
  let largest = idx;
  const left = 2 * idx + 1,
    right = 2 * idx + 2;

  if (left < heapSize && nums[largest] < nums[left]) largest = left;
  if (right < heapSize && nums[largest] < nums[right]) largest = right;

  if (largest !== idx) {
    [nums[largest], nums[idx]] = [nums[idx], nums[largest]];
    heapify(nums, largest, heapSize);
  }
}

function buildMaxHeap(nums) {
  const length = Math.floor(nums.length / 2);

  for (let idx = length; idx >= 0; idx--) {
    heapify(nums, idx, nums.length);
  }
}

function heapSort(nums) {
  let heapSize = nums.length;

  while (heapSize) {
    [nums[heapSize - 1], nums[0]] = [nums[0], nums[heapSize - 1]];
    heapSize--;
    heapify(nums, 0, heapSize);
  }
}

const nums = [54, 53, 55, 52, 50];

buildMaxHeap(nums);
heapSort(nums);
console.log({ nums });

export class MinHeap {
  constructor(compare) {
    this.compare = compare;
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return undefined;
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0 && last !== undefined) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return root;
  }

  peek() {
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

export class MaxHeap {
  constructor(compare) {
    this.compare = compare;
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return undefined;
    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0 && last !== undefined) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return root;
  }

  peek() {
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex]) <= 0) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largest = index;

      if (
        leftChildIndex < length &&
        this.compare(this.heap[leftChildIndex], this.heap[largest]) > 0
      ) {
        largest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.compare(this.heap[rightChildIndex], this.heap[largest]) > 0
      ) {
        largest = rightChildIndex;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }
}

class TrieNode {
  constructor(ch) {
    this.children = Array(26).fill(null);
    this.data = ch;
    this.isTerminal = false;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode('\0');
  }

  // Supports ONLY a-z
  getIndex(ch) {
    const index = ch.charCodeAt(0) - 97;

    if (index < 0 || index >= 26) {
      throw new Error('Only a-z supported');
    }

    return index;
  }

  insertUtil(node, word) {
    if (word.length === 0) {
      node.isTerminal = true;
      return;
    }

    const index = this.getIndex(word[0]);
    let child = node.children[index];

    if (child === null) {
      child = new TrieNode(word[0]);
      node.children[index] = child;
    }

    this.insertUtil(child, word.slice(1));
  }

  insert(word) {
    this.insertUtil(this.root, word);
  }

  searchUtil(node, word) {
    if (word.length === 0) return node.isTerminal;

    const index = this.getIndex(word[0]);
    const child = node.children[index];

    if (child === null) return false;

    return this.searchUtil(child, word.slice(1));
  }

  search(word) {
    return this.searchUtil(this.root, word);
  }

  prefixUtil(node, prefix) {
    if (prefix.length === 0) return true;

    const index = this.getIndex(prefix[0]);
    const child = node.children[index];

    if (child === null) return false;

    return this.prefixUtil(child, prefix.slice(1));
  }

  startsWith(prefix) {
    return this.prefixUtil(this.root, prefix);
  }

  printSuggestions(curr, temp, prefix) {
    if (curr.isTerminal) {
      temp.push(prefix);
    }

    for (let i = 0; i < curr.children.length; i++) {
      const child = curr.children[i];

      if (child !== null) {
        const ch = String.fromCharCode(i + 97);

        this.printSuggestions(child, temp, prefix + ch);
      }
    }
  }

  getSuggestions(queryStr) {
    let prev = this.root;

    const output = [];
    let prefix = '';

    for (let i = 0; i < queryStr.length; i++) {
      const lastChar = queryStr[i];

      prefix += lastChar;

      const curr = prev.children[lastChar.charCodeAt(0) - 'a'.charCodeAt(0)];

      // No match found
      if (curr === null) {
        while (i < queryStr.length) {
          output.push(['0']);
          i++;
        }

        break;
      }

      const temp = [];

      this.printSuggestions(curr, temp, prefix);

      output.push(temp);

      prev = curr;
    }

    return output;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
    this.count = 1;
  }
}

export class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  updateHeight(node) {
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  rightRotate(y) {
    const x = y.left;
    const T3 = x.right;

    x.right = y;
    y.left = T3;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  balance(node) {
    this.updateHeight(node);

    const bf = this.getBalanceFactor(node);

    if (bf > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.leftRotate(node.left);
      }
      return this.rightRotate(node);
    }

    if (bf < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rightRotate(node.right);
      }
      return this.leftRotate(node);
    }

    return node;
  }

  insertNode(node, data) {
    if (!node) return new Node(data);

    if (data < node.data) {
      node.left = this.insertNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertNode(node.right, data);
    } else {
      node.count++;
      return node;
    }

    return this.balance(node);
  }

  add(data) {
    this.root = this.insertNode(this.root, data);
  }

  getMinValueNode(node) {
    let current = node;

    while (current.left) {
      current = current.left;
    }

    return current;
  }

  deleteNode(node, data, removeAll = false) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this.deleteNode(node.left, data, removeAll);
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data, removeAll);
    } else {
      // Handle duplicates
      if (node.count > 1 && !removeAll) {
        node.count--;
        return node;
      }

      // Zero or one child
      if (!node.left || !node.right) {
        return node.left || node.right;
      }

      // Two children: inorder successor
      const successor = this.getMinValueNode(node.right);

      node.data = successor.data;
      node.count = successor.count;

      // Remove the successor completely
      node.right = this.deleteNode(node.right, successor.data, true);
    }

    return this.balance(node);
  }

  remove(data) {
    this.root = this.deleteNode(this.root, data);
  }

  findPredecessor(data) {
    let current = this.root;
    let result = null;

    while (current) {
      if (current.data < data) {
        result = current.data;
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return result;
  }
}
