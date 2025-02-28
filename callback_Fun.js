function arthmetic(a,b,sum){
    const ans=sum(a,b);
    return ans;
}

// function sum(a,b){////external define
//     return a+b;
// }
const add=arthmetic(2,6,(a,b)=>{//Inline define
 return a+b;
})

console.log(add);