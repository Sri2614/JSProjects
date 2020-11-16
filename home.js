// console.log("Hello JS")
// alert("Hey")
// console.log("Welcome")

// Variables

var b = 'JS'
// console.log(b)

// var num = 123
// console.log(num)

// Manipulate DOM with JS
/* Change HTML with JS*/
// var age = prompt("What's your age?");
// document.getElementById("someText").innerHTML="My age is: " + age;

// Numbers in JS
var num1 = 5;
num1++;

num1--;

num1 += 10;
console.log(num1)

// Functions in JS
//  Create
function fun(){
    alert('This is a basic JS function')
}

// Call
// fun()

// Let's create  a function that take in a name & says hello followed by name


function greeting(yourName){
    
    var result = 'Hello ' + yourName;
    console.log(result)

}

// var name = prompt("What's your name?");
// greeting(name);


// How do arguments work in functions?

function sumNumbers(number1, number2){
    var sum = number1 + number2
    console.log("The result of addition is: "+sum)
}

sumNumbers(22,244);

/* While loops

var num = 0
while(num < 10){
    num+=1;
    console.log(num)
}

*/

// For Loops

/*
for(let num = 0; num < 20; num++){
    console.log(num)
}
*/
// DataTypes in JS

let yourAge = 23 // number
let urName = 'sri' // string
let yourNames = {first: 'sri', last: 'Balaji'}; // Object
let truth = false // boolean
let groceries = ['mango', 'banana'] // array
let random; // undefined
let nothing = null; // value null

// Strings in JS common methods

let fruit = 'banana,mango,orange,guava';
let moreFruits = 'mango\nguava'; //new line

/*
console.log(moreFruits.length);
console.log(fruit.indexOf('ana'))
console.log(fruit.slice(2,6))
console.log(fruit.replace('ban', '243'))
console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase())
console.log(fruit +' '+ moreFruits)
console.log(fruit.charAt(4))
console.log(fruit[1])
console.log(fruit.split(',')); // Split by a comma
// console.log(fruit.split(''));  Split by  character
*/
// Arrays in JS

let fruits = ['banana', 'mango', 'orange','pineapple'];
fruits = new Array ('banana', 'mango', 'orange','pineapple');

console.log(fruits[3]);

fruits[1] = 'pear'
/*
console.log(fruits)
for(let i = 0; i < fruits.length; i++){
    console.log("Fruits are "+fruits[i])
}
*/
// Array Common Methods

/*
console.log(fruits.toString());
console.log(fruits.join(' || '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('chocolate'), fruits) // appends
console.log(fruits[4])
fruits[fruits.length] = 'grapes' // same as push
console.log(fruits)
fruits.shift(); // removes first element from an array
console.log(fruits)

fruits.unshift('kiwi'); // add first element to an array 
console.log(fruits)

let vegetables = ['potato', 'tomato','onion','brinjal']
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,5))
console.log(allGroceries.reverse());
*/
let someNumbers = [4,6,8,2,1,9,23,43,56,65,234,90,231]
console.log(someNumbers.sort(function(a,b){return a-b}));

let emptyArray = new Array();

for(let num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in JS
// Dictionaries in Python

let student = {
    first: 'Sri', 
    last: 'balaji',
    age:'22',
    weight:'77',
    studentInfo: function(){
        return this.first + '\n' + this.last;
    }
};
console.log(student.age)

console.log(student.studentInfo())


// If Else Conditionals & Switch Statements in JS
// && AND
// || OR
let age = 23;

if ((age >= 18) && (age <= 35)){
    status = 'target demo'
    console.log(status);
}
else{
    status = 'not my audience'
    console.log(status);
}

// Switch statements
// differentiate between weekday vs weekend


switch(3){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday'; 

}
console.log(text)