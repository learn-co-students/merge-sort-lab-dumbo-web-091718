function findMinAndRemoveSorted(array){
  let min = array[0];
  let minIndex;
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}


function merge(array1, array2){
  let currentMin;
  let sortArr = [];
  while(array1.length != 0 && array2.length != 0){
    if(array1[0] < array2[0]){
      currentMin = array1.shift();
      sortArr.push(currentMin);
    } else {
      currentMin = array2.shift();
      sortArr.push(currentMin);
    }
  }
  return sortArr.concat(array1).concat(array2);
}


function mergeSort(array){
  if (array.length === 1){
    return array
  }
  let midpoint = array.length/2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
