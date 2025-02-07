let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList (listOfNumbers){
    let odd = [];
    let even = [];
    listOfNumbers.forEach(number => {
        if (number % 2 !== 0){
            odd.push(number);
        }
        else {
            even.push(number);
        }
    });
    return odd.concat(even);
}