const PromiseOne =new Promise(function (resolve,reject){
    //Do any Async task
    //Database Conncetion &&  crytography,Network
    setTimeout(function () {
        console.log('Async task is Completed');
        resolve()
    },1000)
})
PromiseOne.then(function(){
    console.log("Promises Completed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function () {
    console.log('Asyncs 2 Resolved');
})

const PromiseThree =new Promise(function (resolve,reject) {
    setTimeout(function () {
        // resolve({})
        resolve({username:"Chai",email:'harishkumarlala24@gmail.com'})
    },1000)
})
PromiseThree.then(function(user) {
    console.log(user)
})

const PromiseFour= new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error= true;
        if(!error){
            resolve({username:"harish",password :'harish123'})
        }else{
            reject('Error:Somthing went wrong')
        }
    },1000)
})
// const username = PromiseFour.then((user)=>{
//     console.log(user);
//     return user.username
    
// })
// console.log(username);
PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('The Promise is either resolved or Rejected'))

// const PromiseFive = new Promise(function(reject,resolve){
//     setTimeout(function () {
//         let error= false;
//         if(!error){
//             resolve({username:"JavaScript",password :'123'})
//         }else{
//             reject('Error:Js went wrong')
//         }
//     },1000)
// }) 
// // async wait
// async function consumePromiseFive(){
//     const response = await PromiseFive 
//     console.log(response);
// }
// consumePromiseFive()
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            //We Pass object {} using this operator& Function
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
async function consumePromiseFive(){
    
        const response = await promiseFive
        console.log(response);
}

consumePromiseFive()
