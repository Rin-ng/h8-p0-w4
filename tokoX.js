function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

var allSales = [];

 if(shoppers.length < 1){
    return shoppers;
  }

  var shoes = {
    product: "Sepatu Stacattu",
    shoppers: [],
    leftOver: 10,
    totalProfit: 0
  };

  var clothes = {
    product: "Baju Zoro",
    shoppers: [],
    leftOver: 2,
    totalProfit: 0
  };

  var sweater = {
    product: "Sweater Uniklooh",
    shoppers: [],
    leftOver: 1,
    totalProfit: 0
  };


  var amountWanted = 0;

  //Shoes
  for(var i = 0; i < shoppers.length; i++){
    if(shoppers[i].product === "Sepatu Stacattu"){
      amountWanted = shoppers[i].amount;
     // console.log("amountWanted: " + amountWanted);
      //console.log("list brg: " + listBarang[0][2]);
      if(amountWanted <= listBarang[0][2]){
        shoes.shoppers.push(shoppers[i].name);
        listBarang[0][2] -= amountWanted;
        shoes.leftOver = listBarang[0][2];
        shoes.totalProfit += ( amountWanted * listBarang[0][1]);

      }
    }
    else if(shoppers[i].product === "Baju Zoro"){
      amountWanted = shoppers[i].amount;
      if(amountWanted <= listBarang[1][2]){
        clothes.shoppers.push(shoppers[i].name);
         listBarang[1][2] -= amountWanted;
        clothes.leftOver = listBarang[1][2];
        clothes.totalProfit += ( amountWanted * listBarang[1][1]);

      }
    }
    else if (shoppers[i].product === "Sweater Uniklooh"){
      amountWanted = shoppers[i].amount;
      if(amountWanted <= listBarang[2][2]){
        sweater.shoppers.push(shoppers[i].name);
        listBarang[2][2] -= amountWanted;
        sweater.leftOver = listBarang[2][2];
        sweater.totalProfit += ( amountWanted * listBarang[2][1]);

     }
    }
  }


  allSales = [shoes, clothes, sweater];
  return allSales;


}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
