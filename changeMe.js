function changeMe(arr)  {
  if(arr.length === 0){
    return '';
  }

  for(var i = 0; i < arr.length; i++){
    var change = {};
    var currentAge = 0;
    change.firstName = arr[i][0];
    change.lastName = arr[i][1];
    change.gender = arr[i][2];
    if(arr[i][3] < 2018 && arr[i][3] !== undefined){
      currentAge = 2018 - arr[i][3];
    }
    else{
      currentAge = "Invalid Birth Year";
    }
    change.age = currentAge;
    var result = (i + 1) + ". " + arr[i][0] + " "+ arr[i][1] + ":";
    console.log(result);
    console.log(change);
  }



}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
