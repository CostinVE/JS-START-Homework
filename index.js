
// do while loop
let i = 0

do {
  i += 1
  console.log(i)
}
while (i < 10)

// for loops

for ( let j = 0; j < 20;){
  j += 2
  console.log(j)
}

// const

const num1 = 14
const num2 = 22

if (num1 <= num2) {
  for (let i = num1; i<=  num2; i++){
    console.log(i)
  }
}


const row = "ajngfklangajgapg[]akq[rplo[pa;gmhgkdh;a][q"
let vowelCount = 0;

for ( let y = 0; y < row.length; y++){
  const char = row[y]
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowelCount++;
  }
}

console.log(`Number of vowels in the string is:, ${vowelCount}`);

// Read a number from the keyboard and display the multiplication table for that number using a for loop

const number = 2

for (let i = 1; i <= 100; i++) {
  const result = number * i;
  console.log(`${number} x ${i} = ${result}`)
}
