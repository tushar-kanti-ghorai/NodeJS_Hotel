// convert JSON STRING to Object

const jsonString = '{"name":"Tushar","Degree":"MCA"}'
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject);

// convert Object to JSON STRING 
const Object={
    name:"Tus",
    Degree:"MCA"

}

const jsonStringfied=JSON.stringify(Object);
console.log(jsonStringfied)

console.log(typeof JSON)
console.log(typeof jsonStringfied)