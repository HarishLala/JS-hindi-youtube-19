//Immediately Invoked Function Expressions IIFE

(
    function chai() {
        console.log(`DB CONNECTED`);
})();
//chai()
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("harish")