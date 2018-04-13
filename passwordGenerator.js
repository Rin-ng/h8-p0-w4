/* Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi*/


function changeVocals (str) {
 if(str.length < 5){
   return "Minimal karakter yang diinputkan adalah 5 karakter";
 }
 else{
   var temp = "";
   for(var i= 0 ; i < str.length; i++){
     if(str[i] !== " " ){
       switch (true){
         case (str[i] === 'a' || str[i] === 'A'):{
           temp += String.fromCharCode(str[i].charCodeAt(0) + 1);
           break;
         }
         case (str[i] === 'i' || str[i] === 'I'):{
           temp += String.fromCharCode(str[i].charCodeAt(0) + 1);
           break;
         }
         case (str[i] === 'u' || str[i] === 'U'):{
           temp += String.fromCharCode(str[i].charCodeAt(0) + 1);
           break;
         }
         case (str[i] === 'e' || str[i] === 'E'):{
           temp += String.fromCharCode(str[i].charCodeAt(0) + 1);
           break;
         }
         case (str[i] === 'o' || str[i] === 'O'): {
           temp += String.fromCharCode(str[i].charCodeAt(0) + 1);
           break;
         }
         default:{
           temp += str[i];
           break;
         }
       }
   }
   else{
     temp += " ";
   }
   }

   return temp;
 }

}

function reverseWord (str) {
  var index = str.length - 1;
  var temp= "";

  while(index >= 0){
    temp = temp + str[index];
    index--;
  }


  return temp;
}

function setLowerUpperCase (str) {
  var arr = str.split("");

  for(var i = 0; i < arr.length;i++){
    if(arr[i] === arr[i].toLowerCase()){
      arr[i] =  arr[i].toUpperCase();
    }
    else{
      arr[i] = arr[i].toLowerCase();
    }
  }

  arr = arr.join("");

  return arr;


}

function removeSpaces (str) {
  var arr = str.split("");
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === " "){
      arr.splice(i,1);
    }
  }

  arr = arr.join("");
  return arr;
}

function passwordGenerator (name) {
  if(name.length < 5){
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  else{
  var temp = changeVocals(name);
  var reverse = reverseWord(temp);
  var caseChange = setLowerUpperCase(reverse);
  var removed = removeSpaces(caseChange);

  return removed;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
