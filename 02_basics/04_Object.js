//const tinderUser =new Object()// Singleton Object Hai
const tinderUser={}//Non Singleton Object Hai

tinderUser.id="123abc"
tinderUser.name="Harish"
tinderUser.isLoggedIn =false
// console.log(tinderUser);//empty object {}

const regularUser ={
    email: "harish@tinder.com",
    fullName: {
        userfullName:{

            firstName:"harish",
            lastname:"lala"
        }
    }
}
// console.log(regularUser.fullName.userfullName.firstName);
const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}
const obj3= {4:"a", 5:"b"}
const obj4= {6:"a", 7:"b"}

// const obj3= {obj1,obj2}
// const obj8= Object.assign({},obj1,obj2,obj3,obj4)
const obj5= {...obj1,...obj2,...obj3,...obj4}// Spread
// console.log(obj5);

const users=[
    {
        id:16969,
        email: "h@hacked.com"
    },
    {
        id:161169,
        email: "m@hacked.com"
    },
    {
        id:16779,
        email: "s@hacked.com"
    }
]

users[1].id
users[1].email
console.log(users);


console.log(tinderUser);
// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//[ '123abc', 'Harish', false ]
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Harish' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

