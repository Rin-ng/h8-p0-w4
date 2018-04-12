function cariModus(arr) {
  var mode = 0;
  var k = 0;
  var count = 0;


  while(k <= arr.length){
    if(arr[k] === arr[k+1]){
      count++;
    }
    k++;
  }

  for (var i = 0; i < arr.length; i++){

    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j] && mode === 0 && count !== arr.length){
        mode = arr[j];
      }
      else if( count === arr.length){
        return -1;
      }
    }
  }
  if(mode === 0){
    return -1;
  }
  return mode;


}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
