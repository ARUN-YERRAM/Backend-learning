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


function hello(name){
    console.log("Hello! " + name);
}
hello("Arun");

function func(){
    console.log(arguments)
}
func(1,2,3,4,5,6);