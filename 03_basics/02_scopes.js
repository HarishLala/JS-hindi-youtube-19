// var c=300
// {} scope
let a=200
if(true)
{
    let a=10
    const b=20
    //  c=30
    // console.log("Inner :" ,a);
     

}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     }
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username="harish"
    function two() {
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}
// one()

if (true) {
    const username="hitesh"
    if(username==="hitesh")
    {
        const website ="youtube"
        //console.log(username + website)
    }
    //console.log(website);
}
//console.log(username);
//+++++++++++++ intersting +++++++++++++++++++

//console.log(addone(5));

function addone(num) {
    return num + 1
}
// addone(5)
//++++++++++++++++++++++++++hosting Method ++++++++++++++++
// addTwo(5)//Cannot access 'addTwo' before initialization
const addTwo =function(num) {
    return num + 2 

}
// addTwo(5)
// console.log(addTwo());
