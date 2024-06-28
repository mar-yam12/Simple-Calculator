"use strict";
// var prompt = require("prompt-sync")();
Object.defineProperty(exports, "__esModule", { value: true });
// let n1 = parseInt(prompt("Enter Your First Number:"));
// let n2 = parseInt(prompt("Enter Your Second Number:"));
// let operators = (prompt("Enter Operators(+,-,*,/):"));
// if (operators= "+"){
//     console.log(`the answer of ${n1} ${operators} ${n2} = ${n1+n2}`)
// }
// if (operators= "-"){
//     console.log(`the answer of ${n1} ${operators} ${n2} = ${n1-n2}`)
// }
// if (operators= "*"){
//     console.log(`the answer of ${n1} ${operators} ${n2} = ${n1*n2}`)
// }
// if (operators= "/"){
//     console.log(`the answer of ${n1} ${operators} ${n2} = ${n1/n2}`)
// }else{
// console.log("Please select correct operator")
// }
// export{};
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt("enter your first number:"));
var n2 = parseInt(prompt("enter yor second number:"));
var operators = (prompt("select your operator(+,-,*,/)"));
if (operators = "+") {
    console.log("the answer of ".concat(n1, " ").concat(operators, " ").concat(n2, " = ").concat(n1 + n2));
}
if (operators = "-") {
    console.log("the answer of ".concat(n1, " ").concat(operators, " ").concat(n2, " = ").concat(n1 - n2));
}
if (operators = "*") {
    console.log("the answer of ".concat(n1, " ").concat(operators, " ").concat(n2, " = ").concat(n1 * n2));
}
if (operators = "/") {
    console.log("the answer of ".concat(n1, " ").concat(operators, " ").concat(n2, " = ").concat(n1 / n2));
}
else {
    console.log("Please select correct operator");
}
