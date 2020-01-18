let arr=new Array(1,2,3,4,5,6);
var arr2=[22,34,45,67,69];
console.log(arr);
console.log(arr2);


arr.push(7);        //push && pop
console.log(`deleted item is ${arr2.pop()}`);
console.log(arr);
console.log(arr2);


arr.unshift(8); //shift && unshift
arr2.shift();
console.log(arr);
console.log(arr2);


arr2.splice(2,1);
arr.splice(1,2,'newone');       //splice
console.log(arr);   
console.log(arr2);