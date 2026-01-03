/* let fruits = ["apple", "Orange", "Banana"];

let addedMandarin = fruits.push("Mandarin");
console.log(fruits);
let RemoveFruits = fruits.splice(1);
console.log(fruits); */


let friends = [
  { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] },
  { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] },
  { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] }
];


for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name + " has " + friends[i].luckyNumbers.length + " lucky numbers");
}
