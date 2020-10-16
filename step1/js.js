//alert('How long will you look at this lonely page?')
/* lots of line */

//variable
//string
//let name = "Petor";
//let number = 711;

//let c = `Hello`;

//concatination

//console.log("Hello " + name + ", \nI rep ur momer");
//console.log(`number = ${number}`);
//move code to a new line
//console.log("Hello, I rep ur momer Hello, I rep ur momer Hello, I rep ur momer Hello, I rep ur momer Hello, I rep ur \
//momer Hello, I rep ur momer Hello, I rep ur momer");
//console.log("Hello, \'quote\' I rep ur momer");

//next type of variable is number

//const a = 1;
//const pi = 3.14;
//console.log(a);
//console.log(pi);

//let str = "5";
//console.log(typeof str);
//let num = 7;
//convert
//let num2 = +str;
//let res = num2 + 7;
//console.log(typeof res);
//console.log(res);

//let zero = 0;
//console.log(res/-zero);

// let a = 7;
// console.log(typeof a);
// a = 5;
// console.log(typeof a);
// a = "Hello";
// console.log(typeof a);

// alert(a);

//break points динамический тип данных js

//string to number
//these commands are throwing, not rounding
// let a = b = "3.14";
// a = parseInt("3.14");
// b = parseFloat("3.14");
// console.log(`Pi equals ${a},\
//  Pi equals ${b}`);
// //these commands are throwing, not rounding
// a = parseInt("3px");
// b = parseFloat("3.14px");
// console.log(`Pi equals ${a},\
//  Pi equals ${b}`);


//data type

//string
    //let name = "Perto";
//number
    //let age = 7;
//boolean
    // const a = true;
    // const b = false;
//null

//undefined
    // let _new;
    // console.log(typeof _new);
//symbol

//составные типы данных
const myObject = {
    // key: value
    myKey: "Konichiwa",
    age: 120
}

let Greetings = myObject.myKey;
console.log(Greetings);
let number = myObject['age'];
console.log(number);

let anyAnswer = prompt("Your name");
console.log(anyAnswer);