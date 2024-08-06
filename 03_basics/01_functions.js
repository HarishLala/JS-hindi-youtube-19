// function sayMyName() {
//     console.log("H");
//     console.log("a");
//     console.log("r");
//     console.log("i");
//     console.log("s");
//     console.log("h");
// }
//sayMyName()

// function addTwoNumber(num1,num2) {
//     console.log(num1 + num2);
// }
// addTwoNumber(3,6)
// addTwoNumber(3,"6") 
// addTwoNumber(3,"a")
// addTwoNumber(3,null)
// const result=addTwoNumber(3,5)
// console.log("result:",result);

function addTwoNumbers(num1,num2) {
    
        // let result= num1+ num2
        // console.log("harish");
        // return result
        return  num1+num2
}
//  const result= addTwoNumbers(3,5)
//  console.log("result :" ,result);

function loginUserName(username="som") {
    if(!username){
        console.log("Please enter a username ...!");
        return
    }
    // if(username === undefined){
    //     console.log("Please enter a username ...!");
    //     return
    // }
    return `${username} Just Logged In` 
}
// console.log(loginUserName("Harish"));
// console.log(loginUserName());

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,600));

const user={
    username :"hitesh",
    price : 199
}
function handleObject(anyObject) {
    
    console.log(`username is ${anyObject.username} is price ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:499
})

const myNewArray =[200,400,500,600,700]
function returnSecondvalue(getArray) {
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,600,700]));
