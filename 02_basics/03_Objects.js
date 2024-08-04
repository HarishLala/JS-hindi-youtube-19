// Singleton
//Object.create

//Objcet Literals
const mySym = Symbol("mykey1")


const JsUser={
    name:"Harish",
    "full name":"harish kumar lala",
     age:18,
    [mySym]:"mykey1",
    location:"banglore",
    email:"harish@infordart.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["name","full name"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym]);

JsUser.email ="harish@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email ="harish@microsoft.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Java  User");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello Java  User,${this.name="Harsh"}`);
    console.log(`Hello Java  User,${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200,400,500));//[ 200, 400, 500 ,2000]
// function calculateCartPrice(val1,val2,...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,2000));//[ 500, 2000 ]

const user={
    username:"hitesh",
    price:299
}

function handleObject(anyObjects) {

    console.log(`UserName is ${anyObjects.username} 
        and price is ${anyObjects.price} `);
}
handleObject(user);


const myNewArray =[200,400,1000,5000]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,900,500,10000]));
