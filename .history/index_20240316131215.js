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

var name = "Arun";
console.log(name);

function func(){
    console.log(name);
}
func();

/* The comment `// local scope or function scope` is simply providing a note or reminder about the
concept of local scope or function scope in JavaScript. It is not actually executing any code or
performing any specific action. It serves as a marker or indicator for the reader to understand that
the following code or discussion is related to local scope or function scope in JavaScript. */// .local scope or function scope.............
