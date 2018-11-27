const fs = require('fs');

console.log(' Start *********************** ');

// fs.readFile('file1.txt', 'utf8',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// })

let poem = fs.readFileSync('file1.txt','utf8');
console.log(poem);

console.log('End ***********************');