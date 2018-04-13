function makanTerusRekursif(waktu) {
  var count = 0;

  if(waktu === 0){
    return waktu;
  }
  else{
    if( waktu < 15){
      return 1;
    }
    else{
      count++;
    }
  }

  //1 + 1 (66 - 15) + 1(51- 15) + 1(36 - 15) + 1(21 - 15)
  return count + makanTerusRekursif(waktu - 15);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
