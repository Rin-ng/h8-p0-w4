function sorting(arrNumber) {
  return arrNumber.sort();
}

function getTotal(arrNumber) {
  if(arrNumber.length < 1){
    return "";
  }
  var count = 0;
  var maxNum = arrNumber[arrNumber.length - 1];

  for(var i = arrNumber.length - 1 ; i >= 0; i--){
    if(arrNumber[i] === maxNum ){
      count++;
    }
  }
  
  return "angka paling besar adalah " + maxNum + " dan jumblah kemunculan sebanyak " + count + " kali";

}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
