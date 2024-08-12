 const userEmail = []//"harish@gmail.com"
if(userEmail)
{
    console.log("Got user Email");
}else{
    console.log("Don't Have User Email")
}
//falsy values
//false,0,-0,bigInt 0n,"", null,undefined,NaN

//truthy Values
//"0",'false',"",[],{},function(){}


// if(userEmail.length ===0){
//     console.log("Array is empty");
    
//}

const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    console.log("Object Is empty");
    
}
//Nullish Coalescing Operator(??): null Undefined 

let val1;
// val1 =25 ?? 30
//val1 =null ?? 21
// val1 =undefined ?? 15

val1 =null ?? 10 ?? 20
console.log(val1);


//Terniary Operator
const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80"): 
console.log("more than 80");
;


