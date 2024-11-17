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
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
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

      if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
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
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
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

      if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[largest]) > 0) {
        largest = leftChildIndex;
      }

      if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[largest]) > 0) {
        largest = rightChildIndex;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }
}
