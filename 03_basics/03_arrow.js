const user={
    username :"harish",
    price:9999,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username ="sonali"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username ="harish"
//     console.log(this);
//     // console.log(this.username);
// }
// chai();

// const chai = function () {
//     let username ="harish"
//      console.log(this.username);//undefined
    
// }

//+++++++++++++++++++++++++++++Arrow Function+++++++++++++++++++++++++
// const chai =  () => {
//     let username ="harish"
//      console.log(this.username);//undefined
//      console.log(this);//{}
    
// }
// chai()

// const addTwo =(num1 ,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,2));

//implicity retrun 
// const addTwo = (num1 ,num2)=>  num1 + num2
// const addTwo = (num1 ,num2)=>  (num1 + num2)//react

const addTwo =(num1,num2)=>({username:"harish"})
console.log(addTwo(3,2));//{ username: 'harish' }

const myArray =[2,5,3,7,8]

