const lowerCase = require("./ex01")
const upperCase = require("./ex02")
const length = require("./ex03")
const capitalize = require("./ex04")
const kebabcase = require("./ex06")
const snakecase = require("./ex07")

console.log(' --> lowerCase')
console.log(lowerCase('TOTO'))

console.log(' --> upperCase')
console.log(upperCase('Tata'))

console.log(' --> Length')
console.log(length('123456789'))

console.log(' --> capitalize')
console.log(capitalize('one CODE'))

console.log(' --> kebabcase')
console.log(kebabcase("love one code"));
console.log(kebabcase("LoveOneCode"));
console.log(kebabcase("-Love-One-Code-"));

console.log(' --> snakecase')
console.log(snakecase("gold d roger"));
console.log(snakecase("GoldDRoger"));
console.log(snakecase("-Gold-D-Roger-"));




