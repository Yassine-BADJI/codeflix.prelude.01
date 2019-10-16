const isAlpha = require("./ex26")
const isAlphaDigit = require("./ex27")
const isBlank = require("./ex28")
const isDigit = require("./ex29")
const isEmpty = require("./ex30")
const isLowerCase = require("./ex31")
const isUpperCase = require("./ex32")
const isNumeric = require("./ex33")
const isString = require("./ex34")

console.log(' --> isAlpha')
console.log(isAlpha('Chopper'))
console.log(isAlpha('Chopper!'))
console.log(isAlpha('Chopper and Usopp'))


console.log(' --> isAlphaDigit')
console.log(isAlphaDigit('ch0pper'))
console.log(isAlphaDigit('1986'))
console.log(isAlphaDigit('1337-42'))

console.log(' --> isBlank')
console.log(isBlank(''))
console.log(isBlank('     '))
console.log(isBlank('Ch0pper!'))

console.log(' --> isDigit')
console.log(isDigit('42'))
console.log(isDigit('9.4'))
console.log(isDigit('ch0pper'))

console.log(' --> isEmpty')
console.log(isEmpty(''))
console.log(isEmpty('     '))
console.log(isEmpty('ch0pper'))

console.log(' --> isLowerCase')
console.log(isLowerCase('chopper'))
console.log(isLowerCase('Chopper'))
console.log(isLowerCase('ch0pper'))

console.log(' --> isUpperCase')
console.log(isUpperCase('CHOPPER'))
console.log(isUpperCase('Chopper'))

console.log(' --> isNumeric')
console.log(isNumeric('1986'))
console.log(isNumeric('-7.5'))
console.log(isNumeric('1.9E+2'))
console.log(isNumeric('five'))

console.log(' --> isString')
console.log(isString('Chopper'))
console.log(isString(1337))