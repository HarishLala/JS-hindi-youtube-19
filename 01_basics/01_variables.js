const accountId= 111111115
let accountEmailId="harrrshkumarlala24@gmail.com"
var accountPasssword="123456789"
accountCity="Jharkhand" 
let accountState;


// accountId =2  Not Allowed  Assignment to constant variable.
/*
Prefer not Use var
because Of issue in block scope and function scope
*/
accountEmailId="ha@gmail.com"
accountPasssword="121212"
accountCity="Banglore" 
console.log(accountEmailId);
console.log(accountPasssword);
console.log(accountId);
console.table([accountId,accountEmailId,accountPasssword,accountCity,accountState]);
