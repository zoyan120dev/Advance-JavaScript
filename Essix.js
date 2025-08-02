function person(name){
    if(!new.target){
        throw "Must Use New Oparetor With this perspn funtion"
    }
    this.name = name;
}

let myPerson = new person("codebyjihad") 
console.log(myPerson);