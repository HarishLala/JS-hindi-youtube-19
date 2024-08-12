//if
// const isUserLoggedIN = true
// if (3 != 2) {
//     console.log("Executed");
// }
// 2 === "2"
// const temperature = 41

// if (temperature < 50) {
//     console.log("less Than 50");
// }else{
//     console.log("temperature is greter than 50");
// }


//< lessthan  , >greatherthan  ,lessthan  <=, >=, ==, !=, ===, !==


// const score =200
// if (score > 100) {
//  let ,const ,var  
//  const power ="fly"
//     console.log(`User Power : ${power}`);
// }
//console.log(`User Power : ${power}`);

// const balance =1000

// if(balance>500)console.log("test"),console.log("test01");

// if(balance <500){
//     console.log("less than 500");    
// }else if(balance < 750){
//     console.log("less than 750");    
// }else if(balance < 900){
//     console.log("less than 950");    
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn =true 
const  debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2)
{
    console.log("Allow to buy Course");
    
}
if(loggedInFromGoogle || loggedInFromEmail||){
    console.log("User Logged in");    
}