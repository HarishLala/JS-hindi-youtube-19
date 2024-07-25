//Primitive
// 7 types : String,Number,Boolean,null,undefined ,symbol,BigInt

// const score=100//number
// const scoreValue=100.96//number

// const isLoggedIn =false//boolean
// const outsideTemp=null//null
// let userEmail;//undefined

// const Id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(Id == anotherId);

// const bigNumber= 35644444444444444889996555n
// console.log(bigNumber);

// Reference (Non Primitive)
//Array ,Objects, Function

const heros=["shaktiman","naagraj","doga"]
console.log(heros);
let myObj={
    name: "harish",
    age:25,
}
console.log(myObj);
const myFunction = function (){
    console.log("Hello Banglore ");
}
console.log(myFunction());

//==========================================================
//STACK Memory(Primitive)   Heap Memory(Non Primitive)

// let myYoutubeName="harishkumarlala222@rediffmail.com";

// let anotherId=myYoutubeName
// anotherId="chaiaurcode"

// console.log(myYoutubeName);//myYoutubeName
// console.log(anotherId);//myYoutubeName


let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo= userOne
userTwo.email="harish@google.com"

console.log(userOne.email);
console.log(userTwo.email);

