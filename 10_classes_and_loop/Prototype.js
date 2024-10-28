// let myName ='sonali     '
// let myChannel ='Chai     '
// console.log(myName.length);
// console.log(myName.truelength);
// console.log(myName.turelength);

let myHeros =["thor","Spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy Power is${this.spiderman}`)
    }
}

Object.prototype.sonali =function(){
    console.log(`sonali is present in all objects`)
}
Array.prototype.heySonali =function(){
    console.log(`sonali says gdnight`);
    
}

// heroPower.sonali()
// myHeros.sonali()
// myHeros.heySonali()
// heroPower.heySonali()

// inheritance
const User ={
    name:"chai",
    email:"chail@google.com"
}
const Teacher ={
    makeVideo:true
}
const TeachingSupport ={
    makeVideo: false
}
const TASupport ={
    makeAssignment :'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__= User

//modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName ="chaiAurCode      "

String.prototype.trueLenght =function(){
    console.log(`${this}`);//undefined
    console.log(`${this.name}`);
    console.log(`True Lenght is :${this.trim().length}`);
    
}
anotherUserName.trueLenght()
"sonali".trueLenght()
"iceTea".trueLenght()