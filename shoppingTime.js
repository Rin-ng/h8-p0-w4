function shoppingTime(memberId, money) {
 /* Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000 */
var itemCount = 0;
var purchased = [];
var spendingMoney = money;

if(memberId === "" || memberId === undefined){
  return "Mohon maaf, toko X hanya berlaku untuk member saja";
}
else if (money < 50000){
  return "Mohon maaf, uang tidak cukup";
}
else{

  while(spendingMoney >= 50000){
      if (spendingMoney >= 1500000){
        purchased.push("Sepatu Stacattu");
        spendingMoney -= 1500000;

      }
      else if (spendingMoney < 1500000 && spendingMoney >= 500000){
        purchased.push("Baju Zoro");
        spendingMoney -= 500000;
      }
      else if (spendingMoney < 500000 && spendingMoney >= 250000){
        purchased.push("Baju H&N");
        spendingMoney -= 250000;

      }
      else if (spendingMoney < 250000 && spendingMoney >= 175000){
        purchased.push("Sweater Uniklooh");
        spendingMoney -= 175000;
      }
      else if (spendingMoney >= 50000){
        purchased.push("Casing Handphone");
        spendingMoney -= 50000;
        break;
      }
  }


    var tokoX = {
      memberId: memberId,
      money: money,
      listPurchased: purchased,
      changeMoney: spendingMoney
    };

      return tokoX;


}
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
