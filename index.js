function findMinAndRemoveSorted(array) {
    return array.shift();
}

function merge(firstHalf, secondHalf){
    let sorted = [];

    while (firstHalf.length != 0 && secondHalf.length != 0){
      if (firstHalf[0] < secondHalf[0]) {
        sorted.push(firstHalf.shift());
      } else {
        sorted.push(secondHalf.shift());
      }
    }    
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
    let midPoint = array.length / 2; 
    let firstHalf = array.slice(0, midPoint);
    let secondHalf = array.slice(midPoint, array.length)

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}
