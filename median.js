function cariMedian(arr) {
  var isOdd = false;
  var median = 0;
  var index = 0;

  if (arr.length % 2 !== 0){
   isOdd = true;
  }

  if(isOdd === true){
    index = Math.round((arr.length-1)/2);
   // console.log(index);
    median = arr[index];
    return median;
  }

  else{
    index = Math.round((arr.length-1)/2);
    //console.log(index);
    median = (arr[index] + arr[index-1])/ 2;
    return median;
  }

}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
