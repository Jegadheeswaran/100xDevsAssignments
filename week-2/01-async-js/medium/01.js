const fs = require('fs');


// --> Callback 

// function sampleReadFile(cb){
//     fs.readFile("Sample.txt","utf-8",function (err,data){
//         if(err){
//             console.log("ERROR is there : "+err);
//             return;
//         }
//         cb(data);
//     });
// }

// function cbFunction(data){
//     console.log(data);
// }

// --> Promises 

function sampleReadFile(){
    let p = new Promise(function (resolve){
        fs.readFile("Sample.txt","utf-8",function(err,data){
            if(err){
                resolve(err);
            }   
            resolve(data);
        });
    });
    return p;
}



function writeSampleFile(content){
    return new Promise(function (resolve){
        fs.writeFile("Sample.txt",content,function(err){
            if(err){
                resolve(err);
                return;
            }
            resolve();
        });
               
    });
}

async function demo(){
    let content = await sampleReadFile();
    console.log("before : "+content);
    if(!content)    return;

    content = content.replace(/\s+/g, ' ').trim();
    await writeSampleFile(content);


    console.log("after : "+await sampleReadFile());
}

demo();