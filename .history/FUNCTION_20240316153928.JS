// function func(fun,a,b){
//     return fun(a,b)
// }

// function add(a,b){
//     return a+b;
// }

// let result = func(add,1,2);

// console.log(result);


// .................higher order functions............

// function fun(){
//     return function(){
//         console.log("Hello!");
//     }
// }

// let res = fun();
// console.log(typeof res);
// console.log(res);

// res();





// .............for each method...............               

names = ["arun",'ram','arjun'];

names.forEach((player)=>console.log(player));



arr = [1,2,3,4,5];
// The `// map...........` comment is indicating that the code snippet is about to demonstrate the usage of the `map` method in JavaScript. In this case, the `map` method is being used to create a new array `cube_arr` where each element is the cube of the corresponding element in the original array `arr`.
// The `// filter...........` comment is likely indicating that the code snippet is about to demonstrate the usage of the `filter` method in JavaScript. However, the code snippet provided does not actually contain any implementation of the `filter` method.

// ..................map...........
cube_arr = arr.map(i => i**3);

console.log(cube_arr)
console.log(arr);

// ..............filter...........

let arr1 = [1,2,3,4,5,6,6,7];
let even = arr1.filter(i => i%2 == 0);
console.log(even)
// 

// The `// reduce` comment is likely indicating that the code snippet is about to demonstrate the usage of the `reduce` method in JavaScript. However, in the provided code snippet, there is no actual implementation of the `reduce` method.
// reduce ...................


let arr2 = [1,2,3,4,5,6,7];

let sum = arr2.reduce((a,b) => a+b);
console.log(sum)


// ......................synchronous(call stack) and asynchronous method()...............

// ..............call stack.............

setTimeout(()=>{
    console.log("Hi 5 sec");
},5000);

console.log("Hello from last line");

setTimeout(()=>{
    console.log("Hi 2 sec");
},2000);


// .................event loop.................

// ........................Global execution context..............


// The comment `// Global execution context..............` is likely indicating a topic or concept related to the global execution context in JavaScript. The global execution context is the default context in which JavaScript code is executed. It includes global variables, functions, and other declarations that are accessible throughout the entire script.




// The comment `// function passed as parameter to another function called as callback function...........` is explaining the concept of passing a function as a parameter to another function, which is commonly known as a callback function in JavaScript.
// ...........function passed as parameter to another function called as ***************(call-back function)**********........... abd are registered in WEB-API 
// Event loop keeps function in call stack and executes them one by one. after settimeout  is finished .......
// ..........callback queue........



// .......................closures.............


// The `// closures.............` comment is likely indicating that the code snippet is about to demonstrate or discuss the concept of closures in JavaScript. Closures are a powerful and important concept in JavaScript where a function retains access to variables from its lexical scope even after the outer function has finished executing. This allows functions to "remember" and access variables from their surrounding scope when they are called later.

function hello(){
    var name = "Arun";
    return function(){
        console.log(name);
    }
}
hello();

console.log(name);

function outerfunc(){
    let outer = "asdff";
    function inner(){
        console.log(outer);
    }
}
