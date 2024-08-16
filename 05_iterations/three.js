// for of 
// ["","",""]==>string 
// [{},{},{}]==> Object

const arr =[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
}

const greetings ="hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps
const map= new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")
//console.log(map);
for (const [key, value] of map) {
    console.log(key,':-', value);
    
}

const myObject ={
    'game1' :'NFS',
    'game2' : 'GTA5'
}
for (const [key, value] of myObject) {
    console.log(key,':-', value);//myObject is not iterable
    
}