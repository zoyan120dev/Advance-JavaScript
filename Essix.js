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

// const person = {
//     fullName: function(city, country){
//         return this.firstName + ' ' + this.lastName + ' ' + city  + ' ' + country;
//     }
// }

// const person1 = {
//     firstName:"codeby",
//     lastName:"jihad"
// }

// const info = person.fullName.apply(person1 , ["Dhaka", "Bangladesh"]);
// console.log(info);


// Function Binding

// const data = {
//     firstName:"codeby",
//     lastName:"jihad",
//     disply: function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let display = data.disply.bind(data);
// setTimeout(display, 3000)

// const data = {
//     firstName:'codeby',
//     lastName:"jihad",
//     disply: function(){
//         console.log(this.firstName + ' ' +  this.lastName)
//     }
// }

// let display =  data.disply.bind(data);
// setTimeout(display, 3000);

// Get method
// const fruits = new Map(
//   [
//     ['Appples', 500],
//    ['Banana', 200],
//    ['oranges', 100]
//   ]
// )

// const Info =  fruits.get('Appples')
// console.log(`Today Apple Pricen in Dhaka: ${Info} taka`);

// // set method 

// const TeamInfo = new Map();
// TeamInfo.set("CEO", "Jihad"),
// TeamInfo.set("Teacher1", "Al Shahed kaku");
// TeamInfo.set("TeamLeader", "Rashel uncle");
// TeamInfo.set("Teacher2", "Tomjid");
// TeamInfo.set("Teammmer", 8);
// // console.log(TeamInfo.get("CEO"));
// console.log(TeamInfo.delete("Teacher1"))


// const Fruits = new Map(
//     [
//         ['Apple', 200],
//         ['Mango', 300],
//         ['jackFood', 400]
//     ]
// )

// const Info = Fruits.get("Apple");
// console.log(Info);

// const TeamInfo = new Map();
// TeamInfo.set("CEO", "Jihad");
// TeamInfo.set("TeamLeader", "Al Shahed kaku");
// TeamInfo.set("Teammmer", "i Don't know");
// console.log(TeamInfo.get("CEO"));

