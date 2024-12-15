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

cube_arr = arr.map(i => i**3 );

console.log(cube_arr)