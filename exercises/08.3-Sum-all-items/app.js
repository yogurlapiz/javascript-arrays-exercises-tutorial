function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (let sum = theArray.length-1; sum >= 0; sum--){
		total += theArray[sum];
	}

	return total;
}
console.log(sumTheElements([2,13,34,5]));
