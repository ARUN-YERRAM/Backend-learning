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



// let  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Weather App</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
      /* Add your custom CSS rules here */
      body {
        background-image: '.images/weather1_bgpic.jpg';
        background-size: cover; /* Cover the entire viewport */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
      }
      /* Override Bootstrap styles */
      .btn {
          background-color: transparent;
          border-color: #ffffff;
      }
      .card-body{
        background-color: pink;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
      }
  </style>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Weather App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About this App</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Usage Guide</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select City
                </a>
                <ul class="dropdown-menu" >
                  <li><a class="dropdown-item" href="#">Hyderabad</a></li>
                  <li><a class="dropdown-item" href="#">Bangalore</a></li>
                  <li><a class="dropdown-item" href="#">Chennai</a></li>
                  <li><a class="dropdown-item" href="#">Delhi</a></li>
                  <li><a class="dropdown-item" href="#">Mumbai</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input id="city" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit" id="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
      <div class="container">
        <main>
          <h1 class= "my-4 text-center">Weather for <span id="cityName"></span></h1>
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary" >
              <div class="card-header py-3 text-bg-primary border-primary">
                <h4 class="my-0 fw-normal">Temperatures</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title"><span id="temp2"></span><small class="text-body-secondary fw-light"></span><span>&#8451;</span></small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Temperature - <span id="temp" ></span></li>
                  <li>Min Temperature - <span id="min_temp"></span></li>
                  <li>Max Temperature - <span id="max_temp"></span></li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary"></button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
              <div class="card-header py-3 text-bg-primary border-primary">
                <h4 class="my-0 fw-normal">Humidity Info</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title"><span id="humidity2" ></span><small class="text-body-secondary fw-light">%</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Humidity - <span id="humidity" ></span></li>
                  <li>Cloud PCT - <span id="cloud_pct" ></span></li>
                  <li>Feels Like - <span id="feels_like" ></span></li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary"></button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
              <div class="card-header py-3 text-bg-primary border-primary">
                <h4 class="my-0 fw-normal">Wind Info</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title"><span id="wind_speed2" ></span><small class="text-body-secondary fw-light">km/hr</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Wind speed - <span id="wind_speed" ></span></li>
                  <li>Sunrise Time - <span id="sunrise" ></span></li>
                  <li>Sunset Time - <span id="sunset" ></span></li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary"></button>
              </div>
            </div>
          </div>
        </div>
        <h2 class="my-4 text-center">Weather of common places</h2>
        <div class="table-responsive">
          <table class="table text-center">
            <thead>
              <tr>
                <th style="width: 0%;">Places</th>
                <th style="width: 5%;">Cloud_pct </th>
                <th style="width: 5%;">Feels_like </th>
                <th style="width: 5%;">Humidity</th>
                <th style="width: 5%;">Max_temp </th>
                <th style="width: 5%;">Min_temp </th>
                <th style="width: 5%;">Sunrise </th>
                <th style="width: 5%;">Sunset </th>
                <th style="width: 5%;">Temp </th>
                <th style="width: 5%;">Wind_speed </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"class="text-start"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="text-start"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
    
            <tbody>
              <tr>
                <th scope="row" class="text-start"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="text-start"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" class="text-start"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>