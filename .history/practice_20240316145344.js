const person = {
    name:'Arun',
    age:19,
    city:"hyderabad",
    place:{
        citi:"Hyderabad",
        state:"Telangana",
        country:"India"
    }
       
    
}

const {name,age,city,place:{citi,state}} = person

person.weight = 12;

console.log(person);
console.log(name);
console.log(age);
console.log(city);
console.log(place);
