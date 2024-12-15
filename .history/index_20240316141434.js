// let a = "ahsgd";
// console.log(a)

// console.log(typeof a)

// var age = 10;

// var obj = {
//     name:"arun",
//     'age':10,
//     place:"Hyder"
// } 

// var b = 1;
// b++;
// console.log(b)
// console.log(1==1)
// console.log(obj)


var i = 2;

// if(i%2 == 0)
//     console.log("Even");
// else if(i - 2 == 0)
//     console.log("Even as");
// else
//     console.log("Odd");

switch(i){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Other");
}

for(var i=0;i<5;i++)
    console.log(i );

// ................normal functions.......
function hello(name){
    console.log("Hello! " + name);
}
hello("Arun");

function func(){
    console.log(arguments)
}

func(1,2,3,4,5,6);


// ..............Arrow functions.............

let hell = (name) => {
    console.log("Hello! " + name);
    // console.log(arguments);
}
hell("Arun");

let sums = (a,b) =>{
    console.log(a+b);
}

sums(2,5);



// ..............I I F E (immediately invoke function expression)...........

// ......anonymous function.........
(function(){
    console.log("IIFE");
})()



// /............scope.............
// global, local(function , block ) scopes...

// var name = "Arun";
// console.log(name);

// function func(){
//     console.log(name);
// }
// func();

/* The comment `// local scope or function scope` is simply providing a note or reminder about the
concept of local scope or function scope in JavaScript. It is not actually executing any code or
performing any specific action. It serves as a marker or indicator for the reader to understand that
the following code or discussion is related to local scope or function scope in JavaScript. */
// .local scope or function scope.............

function fun(){
    var name = "Sachin";
    console.log(name);

    {
        var j = 1;
        console.log(j);
    } console.log(j);
}

// console.log(name);
fun();


/* The comment `// function and scopes.................` is simply providing a heading or title for a
section of code or discussion related to functions and scopes in JavaScript. It is not executing any
code or performing any specific action, but rather indicating that the following code or information
will be about functions and scopes in the JavaScript programming language. */
// ........................function and scopes.................

//   var:  declare variables
// it has function scope but no local scope........
// it is hoisted.......

let a = 12;
const c = 123;

console.log(m);
var m = 10;
console.log(m);



// let  
// 1.   ........No hoisting.....
// 2. it also has block scope......



// const 
// 1.  scope is same as let scope
// 2.  are final and cam't be reassigned a value.....

const country = "INDIA";

let e = "string"

console.log(typeof e)
console.log(e[51]);
e[0] = "q";
console.log(e.length);
var v = "asdf";
var full = e.concat(v);
console.log(full);


console.log(full.toUpperCase());
console.log(full.toLowerCase());
console.log(full.charAt(0));

console.log(full.slice(2,6));

// console.log(full.replace("INDIA","USA"));
console.log(country);

// .indexOf()

console.log(full.indexOf("a"));
let word = " asd";
console.log(word);
console.log(word.trim());

// split........

name = "Arun Yerram";
console.log(name.split(""));
console.log(name.split(" "));

skills = ["HTML", "CSS",12,true,12.34];

console.log(skills);
console.log(typeof skills);

arr1 = new Array();
console.log(arr1);


for(var i=0;i<skills.length;i++)
    console.log(skills[i]);

console.log(arr1[12]);
arr1.push(12);
arr1.push(12);
arr1.push(12,34,56);
// arr1.pop(12);
arr1.unshift(18,3455,6);

console.log(arr1);

console.log(arr1.pop());

console.log(arr1);

console.log(arr1.shift());

console.log(arr1)

console.log(skills.concat(arr1).length);
    
console.log(arr1.length)

chr_arr = ['a','r','u','n','y','e','r','r','a','m']
console.log(chr_arr.join());
console.log(chr_arr.join(""));
console.log(chr_arr.join("#"));

console.log(chr_arr.reverse());

console.log(chr_arr.sort());

console.log(chr_arr.sort().reverse());
console.log(typeof chr_arr.toString());

// slicing of an array   (.slice ).......... 
// splicing of an array).....(pos,length).....   

let num = [1,2,3,4,5];
let remove = num.splice(2,2);
let modify = num.splice(2,2,11,22,33);

console.log(num);
console.log(remove);
console.log(modify);

console.log(num.reverse());

console.log(num.indexOf(2));

console.log(num.lastIndexOf(2));

let arr = [12,11,10,9,8,7];

arr.sort();
console.log(arr);