class User {
    constructor(username) {
        this.username =username
    }
    logme(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;

    }
    addCourse(){
        console.log(`A New Course was added by ${this.username}`); 
    }
}
const chai = new Teacher("Sonali","sonali@gmail.com",1234) 
chai.addCourse()

const masalaChai =new User("masalaChai")
masalaChai.logme()
// console.log(chai=== masalaChai);
// console.log(chai=== Teacher);
// console.log(chai instanceof Teacher);
// console.log(chai instanceof User);