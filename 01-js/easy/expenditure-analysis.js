/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let spendEstimates={};

  for(let i=0;i<transactions.length;i++){
     let it = transactions[i];
     if(spendEstimates[it.category]){
      spendEstimates[it.category]+=it.price;
     }
     else{
      spendEstimates[it.category]=it.price;
     }
  }

  let keys = Object.keys(spendEstimates);

  let opArray = [];
  for(let i=0;i<keys.length;i++){
    let category =keys[i];
    let obj={
      category: keys[i],
      totalSpent: spendEstimates[category] 
    }
    opArray.push(obj);

  }
  return opArray;
}

module.exports = calculateTotalSpentByCategory;
