
// var name = "Vikash"
// var name = "abced"
// var name = "deepak"
// console.log(name)
// const axios = require('axios');
let name = "vikash"
// let name = "ram"
console.log(name);
const price=100;
// price = 500;
if(price==100)console.log(price);
console.log(price);
name = 2000000
console.log(name);
let somevar;
console.log(somevar)
const obj={
    name: "Vikash" ,
    id: 101
}
console.log(obj);
console.log(obj.name );
console.log(obj.id);
obj.salary = 2000000;
console.log(obj)
const emp = {...obj}
obj.id = 1001
console.log(obj.id,emp.id);
console.log('key', ...Object.keys(obj));
console.log('Value', ...Object.values(obj))
console.log('Entries', ...Object.entries(obj));
const arr = [1,true,"name"];
console.log(arr[2]);
const employees =[[obj,emp],{name:"XYZ",id:123}];
const copyArr = [...arr];
const copyEmp=[...employees];
// copyEmp[0][1]=123;
// console.log("employees",employees)

// console.log(employees,copyEmp);
const deepCopy = structuredClone(employees);
deepCopy[0][0]=123;
console.log("Employees", employees);
console.log("DeepCopy",deepCopy);

// function sum(num1,num2){
//     if(num1%2===0){
//         let blockscope = true
//         var fnScope = "abcd"
//         console.log('num1 is even',blockscope)
//     }
//     console.log(fnScope)
//     // console.log(blockscope)
//     return num1+num2
// }
// console.log(fnScope)
const sum = (num1,num2)=>{
    return num1+num2;
}

console.log(sum(4,5));
let newArr = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<newArr.length;i++){
//     console.log(newArr[i])
// }

newArr.forEach((num1,index,refArr)=>console.log(num1,index,refArr))
const sqr = newArr.map((val)=>val*val);
console.log(sqr)
const even = newArr.filter((val)=>val%2===0)
console.log(even)

//Async function in javaScript

setTimeout(() => {
    console.log("Time Out")
}, 5000);

const promise = Promise.resolve("Some Value");
console.log(promise.then(val=>console.log(val)))

const data = fetch('https://jsonplaceholder.typicode.com/users')
console.log({data})
data.then(val=>val.json().then(data=>console.log(data)))

const axiosData = axios.get('https://jsonplaceholder.typicode.com/users');
console.log(axiosData.then(val=>console.log('axios data', val)));