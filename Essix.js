// function person(name){
//     if(!new.target){
//         throw "Must Use New Oparetor With this perspn funtion"
//     }
//     this.name = name;
// }

// let myPerson = new person("codebyjihad") 
// console.log(myPers


// let fun = function(a,b){
//     return a + b 
// }
// console.log(fun(20,30));

// let arrowFun = (c  ,d) => c + d;
// console.log(arrowFun(50, 40));  

// let arrowFun = (d,c)


// const person = {
//     fullName: function(city, country){
//         return  this.firstName + ' ' + this.lastName + ' ' + city + ' '  + country;
//     }
// }

// const person1 = {
//     firstName:"codeby",
//     lastName:"ahmed"
// }

// const info =  person.fullName.apply(person1, ["Dhaka", "Bangladesh"]);
// console.log(info)

const person = {
    fullName: function(city, country){
        return this.firstName + ' ' + this.lastName + ' ' + city  + ' ' + country;
    }
}

const person1 = {
    firstName:"codeby",
    lastName:"jihad"
}

const info = person.fullName.apply(person1 , ["Dhaka", "Bangladesh"]);
console.log(info);
