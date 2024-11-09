// let myName ="sonali    "
// let myChannel ="harish    "

// console.log(myName.length);
// console.log(myName.trim().length);

 let myHeros =["thor","spiderman"]

 let heroPower={
    thor :"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);   
    }
 }
 
 Object.prototype.harish =function(){
    console.log(`sonail is presnet in all object`);
 }
 Array.prototype.heyHarish =function(){
    console.log(`Sonail say hello`);
    
 }
//   yHeros.heyHarish()
// heroPower.heyHarish()
// inheritance

const User={
    name:"Sonali",
    email:"Sonali@google.com"
}
const Teacher ={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport= {
    makeAssignment :'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

//Morden Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName="Sonaligoing to Shopping "
String.prototype.trueLength =function(){
     console.log(`${this}`);
   // console.log(`${this.name}`);
    console.log(`True Length is:${this.trim().length}`);
    
}
anotherUserName.trueLength()
"harish".trueLength()
"iceTea".trueLength()