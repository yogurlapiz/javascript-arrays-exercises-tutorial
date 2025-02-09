// Your code here
function matrixBuilder(number){
    let array = [];
    for (let column = 0; column < number; column++){
        let row = [];
        for (let index = 0; index < number; index++){
            row.push(Math.floor(Math.random()*2));
        }
        array.push(row);
    }

    return array;
    
}
// Do not change anything from this line down
console.log(matrixBuilder(5))
