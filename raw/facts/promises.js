let fs=require("fs");
// console.log("before");
// fs.readFile("f1.txt",function cb(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
function promisewalareadfile(filepath){
    return new Promise(function(resolve,reject){
        fs.readFile(filepath,function cb(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
let frP=promisewalareadfile("f1.txt");
console.log(frP);
frP.then(function(data){
    console.log(data);
})
frP.catch(function(err){
    console.log(err);
})

// let promise=fs.promises.readFile("f11.txt");
// console.log("initial state ",promise)
// console.log("after");
// promise.then(function(data){
//     console.log(data);
// })
// promise.catch(function(err){
//     console.log("err",err);
// })