let arr = [45,67,87,23,5,32,60];

// Your code here
let NewArr = [];
for (let reverse = arr.length-1; reverse >= 0; reverse--){
    NewArr.push(arr[reverse]);
}
console.log(NewArr);
