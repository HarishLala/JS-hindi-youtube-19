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
console.log(regularUser.fullName.userfullName);
