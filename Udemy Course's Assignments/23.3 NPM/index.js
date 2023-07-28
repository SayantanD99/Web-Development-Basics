// var generateName = require("sillyname"); 
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

// CJS 
// var generateName = require("sillyname");
// const superheroes = require("superheroes");

//ESM

import superheroes from "superheroes";
const name = superheroes.random();
console.log(`I am ${name}!`);

import generateName from "sillyName";
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);