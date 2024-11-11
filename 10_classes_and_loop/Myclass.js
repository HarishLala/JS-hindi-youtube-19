//ES6


// class User {
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;

//     }
//     encryptPassword(){
         
//         return `${this.password}096`
//     }
//     changeUsername(){

//          return `${this.username.toUpperCase()}69`
//     }
// }
// const chai= new User("Sonali","sonali@gmail.com","sonali@123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// Behind the Scene

function User(username,email,password){

    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword= function() {
     return `${this.password}096`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}69`
}
const harish= new User("harish","harish@gmail.com","harish@123")
console.log(harish.encryptPassword());
console.log(harish.changeUsername());