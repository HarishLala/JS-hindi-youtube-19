class User{

    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User{
 
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;   
    }
    addCourses(){
        console.log(`A New Cousrse  was added by ${this.username}`);
    }
}

const chai = new Teacher("Sonali","sonali@gmail.com","sonali@!123")
chai.addCourses()
chai.logme()
const  masalachai = new Teacher("harish")
masalachai.logme()


console.log(chai === masalachai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
