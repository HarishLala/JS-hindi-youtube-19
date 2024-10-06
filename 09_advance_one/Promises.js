// fetch('').then().catch().finally()

const PromiseOne = new Promise(function(resolve,reject){
    //DO An Async Task
    //DB Calls,Cryptographt,network
    setTimeout(function () {
        console.log('Async task is Completed');
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log('Promises Consumed ');
    
})
new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log('Async Task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 Resolved');
    
})
const PromiseThree= new Promise(function(resolve,reject) {
    setTimeout(function() {
        
        resolve({usename:'Chai',email:'chai@gmail.com'})
    },1000)
})
PromiseThree.then(function (user) {
    console.log(user);
})

const PromiseFour=new Promise(function (resolve,reject) {
        setTimeout(function(){
            // let error=true;
            let error=false;
            if(!error){
                resolve({username:'harish',password:'harish@123'})
            }else{
                reject('ERROR:-Somthing Went Wrong')
           }
          },1000)
})
const username=PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username);

}).catch(function(error){
    console.log(error);
})
// console.log(username);