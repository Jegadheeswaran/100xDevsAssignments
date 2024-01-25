let start  = 0
let counter = 0;
function startCounter(){
    
    const timeout = setTimeout(()=>{
        console.log(counter);
        
        if(counter < 10 ){
            counter++;
            start++;
            startCounter();
        }
        clearTimeout(timeout);

    },1000);

}

startCounter();