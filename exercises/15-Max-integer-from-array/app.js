let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here
function findMax(myArray){
    let auxArray = myArray[0];
    myArray.forEach(number => {
        if (number > auxArray){
            auxArray = number;
        };
        console.log(auxArray);
    });
    return auxArray;
}
console.log(findMax(myArray));
