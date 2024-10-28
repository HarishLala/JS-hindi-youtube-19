const user={
    username:'sonali',
    loginCount:8,
    signedIn:true,

    getUserDetails:function () {
        // console.log("Got User deatils from database");
        // console.log(`Username:${this.username}`);
        console.log(this);
        
    }
}


// console.log(user.username);
//not a reference  it is a Method 
// console.log(user.getUserDetails);
// console.log(user.getUserDetails());
//  console.log(this);
 
//Constructor Functions
//New One instance multiple instance create 
// const promisesOne = new  Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting = function () {
        console.log(`Welcome ${this.usrname}`)
    }
    //Implicity it working 
    return this
}
const userOne =new User('Sonali', 12, true)
const userTwo =new  User('Harish', 11, false)
//This one created overridethe method
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor); // refrence [Function: User]
// console.log(userTwo);
