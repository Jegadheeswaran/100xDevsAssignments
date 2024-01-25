
let counter = 0;
function startCounter(){
    let timeout = setInterval(()=>{
        console.log(counter);
        counter++;
    


        //we can use the clearInterval to stop the opeartion. 

        if(counter >= 10){
            clearInterval(timeout);
            console.log("set interval is stopped.");
        }
    },1000)
}



startCounter();