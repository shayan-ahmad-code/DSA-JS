let arr = [6, 1, 2, 3, 5, 4, 7];

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}
  console.log(bubbleSort(arr));
