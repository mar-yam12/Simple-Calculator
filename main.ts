// var prompt = require("prompt-sync")();

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

let n1= parseInt(prompt("enter your first number:"));
let n2= parseInt(prompt("enter yor second number:"));

let operators= (prompt("select your operator(+,-,*,/)"));

if (operators= "+"){
    console.log(`the answer of ${n1} ${operators} ${n2} = ${n1+n2}`)
}
if (operators= "-"){
    console.log(`the answer of ${n1} ${operators} ${n2} = ${n1-n2}`)
}

if (operators= "*"){
    console.log(`the answer of ${n1} ${operators} ${n2} = ${n1*n2}`)
}

if (operators= "/"){
    console.log(`the answer of ${n1} ${operators} ${n2} = ${n1/n2}`)
}else{
console.log("Please select correct operator")
}

export{};