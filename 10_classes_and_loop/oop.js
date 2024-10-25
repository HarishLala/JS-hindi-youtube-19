//Object  Literal
// const user={}

const user={
    username:"Sonali",
    logincount:8,
    singnedIn:true,
    getuserdetails: function(){
        //console.log('get User details from database')
        // console.log(`Username:${username}`);
        // console.log(`Username:${this.username}`);
        console.log(this);
        
    }
}

//  console.log(user.username)
//  console.log(user.getuserdetails())
// console.log(this);

//new constructor Function
// const promiseOne =new Promise()
// const date = new Date()
function User(username,loginCount,isloggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    return this
}
const userOne =User('Sonali',12,true)
const userTwo =User('Harish',11,false)

console.log(userOne);
