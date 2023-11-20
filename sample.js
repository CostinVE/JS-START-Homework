// Destul de usor

function bigORsmall (i){
  if( i >= 10){
    console.log('Sunt mai mult de 10 unitatii')
  }
  if( i < 10)
  console.log('Sunt mai putin de 10 unitatii')
}

// Unpic difficil , a trebuit sa ma uit pe internet, inca nu imi este foarte clar cum functioneaza "%" dar am inteles ca este legat de divizibilitate


function primeOrNot(number){
  let isPrime = true
  if (number == 1) {
    isPrime = true
  }
  else if (number <= 0) {
    isPrime = null
  }
  else if ( number > 1) {
    for (let i = 2; i < number; i++){
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(`${number} is a prime number`)
  } else if (isPrime == null){
     console.log("Please input a positive number")
  } 
  else {
    console.log(`${number} is a not prime number`)
  }
}
// Am incercat cu for si while loop si era destul de asemanator dar nu stiam cum sa le adun pe numere pentru total , nu mi-a trecut prin cap sa adun totalul cu variabila i care va fi incrementata, 

function SUM(N){
  let result = 0;
  for(let i = 0; i <= N; i++){
  result += i;
  }
  return result;
}

// Pet feeding

function Dailymeal(weight, serving){
  let treats = weight / 4 * serving
  if(weight <=0 ){
    console.log("Please input a valid weight")
  }
  else if(serving <= 0){
    console.log("Please feed your cat")
  }
  else {
    console.log(`The cat needs ${treats} treats per day`)
  }
}

// House selling
let sellingPrice = 0
const renovationCost =  {calculateRenovationCost: function(sellingPrice){
  renovationCost = sellingPrice * 4 * 5000 }}
const commision = {calculateAgentCommision: function(sellingPrice){
    commision = (sellingPrice * 3) / 100}}

function calculateTotalCost(sellingPrice,){
  totalCost = sellingPrice + renovationCost + commision
  console.log(`The price of the house is $${totalCost}`)
}