//Date

let myDate=new Date()
// console.log(myDate);//2024-07-29T12:16:14.330Z
// console.log(myDate.toString());//Mon Jul 29 2024 12:17:07 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Mon Jul 29 2024
// console.log(myDate.toISOString());//2024-07-29T12:18:36.521Z
// console.log(myDate.toJSON());//2024-07-29T12:19:46.805Z
// console.log(myDate.toLocaleDateString());// 7/29/2024
// console.log(myDate.toLocaleString());//7/29/2024, 12:19:46 PM
// console.log(myDate.toLocaleTimeString());//12:21:12 PM
// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2024,6,29);//Mon Jul 29 2024
// let myCreatedDate = new Date(2024,6 ,29, 5 , 3);//7/29/2024, 5:03:00 AM
// let myCreatedDate = new Date("2023-07-29");//7/29/2023, 12:00:00 AM
let myCreatedDate = new Date("07-29-2024");//7/29/2024, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp= Date.now();
// console.log(myTimeStamp);//milisceonds
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));//1722256483

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
//`${newDate.getDay()} and the time ${newDate.getTime()}`

console.log(newDate.toLocaleString('default',{
   weekday:"long", }
));