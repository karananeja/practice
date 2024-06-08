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
