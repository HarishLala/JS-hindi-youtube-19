const derscripter =Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(derscripter);

// console.log(Math.PI);
// Math.PI =5;
// console.log(Math.PI);

// const mynewObject =Object.create(null)
const chai ={
    name:'ginger chai',
    price: 250,
    isAvailable: true,
    orderchai: function(){
        console.log("chai nahi bani");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    // writable :false,
    enumerable : true,
    // configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}