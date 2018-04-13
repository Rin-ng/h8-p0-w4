function kaliTerusRekursif(angka) {
  var arr = angka.toString();
  var result = 1;

  if(arr.length === 1){
    return angka;
  }
  else{

     for(var i = 0; i < arr.length; i++){
       result *= arr[i];
       }

       return kaliTerusRekursif(result);
     }

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
