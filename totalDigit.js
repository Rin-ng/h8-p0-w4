function totalDigitRekursif(angka) {
 var arr = angka.toString();
 // var joined = "";
 /* arr = arr.split("");
  console.log(arr);*/

  if(arr.length === 1){
    return angka;
  }
  else{
    return parseInt(arr[0]) + parseInt(totalDigitRekursif(arr.slice(1)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
