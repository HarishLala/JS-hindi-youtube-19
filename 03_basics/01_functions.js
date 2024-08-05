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
console.log(loginUserName());

