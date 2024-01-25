 

function printTime(fn){
    let count = 1;
    const getIntervalToclear  = setInterval(()=>{
            count++;
            start = new Date();
            fn(start);
        if(count > 10)
            clearInterval( getIntervalToclear );
    },1000);
}

function railwayTime(time){
    const hour = time.getHours().toString().padStart(2, '0');
    const mins = time.getMinutes().toString().padStart(2, '0');
    const sec = time.getSeconds().toString().padStart(2, '0');
    console.log(hour+":"+mins+":"+sec);
}

function localTime(time){
    let currTime = time.toLocaleTimeString();
    console.log(currTime);
}

printTime(railwayTime);
//printTime(localTime);
