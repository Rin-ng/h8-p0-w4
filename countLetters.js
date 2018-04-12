function hitungHuruf(kata) {
  kata = kata.toLowerCase();
  var count = 1;
  var letter = "";
  var nextletter = "";
  var arr = kata.split(" ");
  var result = "";



  for(var i = 0; i < arr.length; i++){
   var word = arr[i];
    for(var j = 0; j < word.length; j++){
      letter = word[j];
     for(var k = j+1; k < word.length; k++){
       nextletter = word[k];
       if(letter === nextletter && count < 2){
         count++;
         result = arr[i];
       }
     }
    }
  }

  return result;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
