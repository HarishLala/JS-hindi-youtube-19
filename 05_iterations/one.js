//for

for (let index = 0; index <=10; index++) {
    const element = index;
    // console.log(element);
    
}
//console.log(element);// element is not defined

//------------------------------------------------------------\\
// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element ==5){
//         console.log(`5 Is The Best Numbers`);
//     } 
//     console.log(element);
       
// }

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value :${i}`);
    for (let j = 0; j <= 20; j++) {
        const element = array[i];
        console.log(`Outer loop value :${j}`);
    }
    console.log(element);
       
}