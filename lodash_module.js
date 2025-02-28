//Insted filter use
const _=require('lodash');

const user=['person','person',1,23,'tushar'];

const unique=_.uniq(user);
console.log(unique);

console.log(_.isString("Tushar"))
console.log(_.isString(1))
