//  (function(a, b){
//   return console.log(a + b)
// })(20, 50)
 
//  let sum = ((a ,b, c) => {
//     return console.log(a * b  + c)
// })(2, 3 , 6);


// ((function(a ,b){
//      return console.log(a + b)
// }))(40, 70);

// let sum = ((a, b, c ) => {return console.log(a * b + c)})(2 ,3 , 6)


 
//// CallBacck

// function Displayer(userData){
//     console.log(userData);
// }

// function user(firstname, lastName, prof, age){
//     firstname,
//     lastName,
//     prof,
//     age;

//     let info = firstname + ' ' + lastName + ' ' + prof + ' ' + age;
//     return info;
// }

// let MyInfo = user("codeby", "jihad", "Programmer", 20)

// Displayer(MyInfo)


// function Dispayer(UserData){
//     console.log(UserData);
// }


// function user(firstName, lastName, prof, age){
//     firstName,
//     lastName,
//     prof,
//     age;
//     let Info = firstName + ' ' + lastName + ' ' + prof + ' ' + age;
//     return Info; 
// }

// let MyInfo = user("Codeby", "jihad", "Programmer", 21);
// Dispayer(MyInfo);

// function Dispayer(userData){
//     console.log(userData);
// }

// function user(firstName, lastName, age){
//     firstName,
//     lastName,
//     age;
//     let info  = firstName + ' ' + lastName + ' ' + age;
//     return info;
// }

// let Myinfo = user("codeby", "jihad", 20);
// Dispayer(Myinfo);




// let ifBangladeshi  = false;

// let MyPromise = new Promise((resolve, reject) => {
//     if(ifBangladeshi){
//         resolve([
//             {userName:"Jhon deo", age:21, Prof:"Progeammer", country:"Bangladeshi"},
//             {userName:"Hero alam", age:21, Prof:"Progeammer", country:"Bangladeshi"},
//             {userName:"Joni kaku", age:21, Prof:"Progeammer", country:"Bangladeshi"},
//             {userName:"Jahed khan", age:21, Prof:"Progeammer", country:"Bangladeshi"},
//             {userName:"Mr.Selim", age:21, Prof:"Progeammer", country:"Bangladeshi"}
//         ])
//     }else{
//         reject("You are Not Bangladeshi , so Get Out From Here")
//     }
// })

// MyPromise.then((success) => {
//     console.log(success)
// })
// MyPromise.catch((errr) => {
//     console.log(errr);
// })



// let IsBangladeshi = true;

// let MYpromises = new Promise((resolve, reject) => {
//     if(IsBangladeshi){
//         resolve([
//             {message:"hello you are welcome!"}
//         ])
//     }else{
//         reject("Sorry You are not  Bangladesh , Soo get Form here")
//     }
// })

// MYpromises.then((success) => {
//     console.log(success)
// })

// MYpromises.catch((errr) => {
//     console.log(errr);
// })