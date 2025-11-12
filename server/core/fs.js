//asynchronous //if we call sysnchronous methods, no want throw error

const fs=require("fs");
// fs.writeFileSync("text.txt", "hello everyone", (err)=>{
//     if(err) throw(err);
//     console.log("file created");
// }
//  ) 


//  fs.appendFileSync("text.txt", " my name is iuyiyuy", (err)=>{
//     if(err) throw(err);
//     console.log("file updated or appended");
// }
//  ) 

//   const data=fs.readFileSync("text.txt","utf-8")
//       console.log(data);

//  fs.renameSync("text.txt","readme.txt");
//     console.log("file renamed successfully");


//  fs.unlinkSync("text.txt")
//      console.log("file unlinked");