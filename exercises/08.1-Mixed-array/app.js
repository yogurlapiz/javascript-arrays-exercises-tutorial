let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let NewArr = [];
for (let typeArray = 0; typeArray < mix.length; typeArray++){
    NewArr.push(typeof mix[typeArray]);
}
console.log(NewArr);