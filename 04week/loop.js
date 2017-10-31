'use strict'

// for loop to console.log each item in the array carsInReverse
const carsInReverse = ['ford', 'chevy', 'audi']

for (i=0; i < carsInReverse.length; i++ ) {
  console.log(carsInReverse[i]);
}

// An object called persons
let persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// for...in loop to console.log each key
for (const prop in persons) {
  console.log(`${prop}`);
}

console.log the value associated with the key birthDate
console.log(persons.birthDate)


// for loop to console.log the numbers 1 to 1000
let num = 0;


while (num < 1000){
  num += 1;
  console.log(num);
}

// do...while loop to console.log the numbers from 1 to 1000
let num =0;

do {
  num += 1;
  console.log(num);
}

while(num <1000);
