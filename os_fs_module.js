const fs =require('fs');
const os=require('os');

const user=os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile("greeting.txt","Hi " +user.username+"!\n",()=>{
    console.log("file is created");
})

console.log(os);
console.log(fs);