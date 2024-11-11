class User{
 constructor(username){
    this.username=username
 }
 logMe(){
    console.log(`Username is ${this.username}`);
 }
 static createId(){
    return `123`
 }
}
const sonali = new User("sonali")
// console.log(sonali.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const iphone= new Teacher("iphone","i@phone.com")
// console.log(iphone.createId());
console.log(iphone.createId);
