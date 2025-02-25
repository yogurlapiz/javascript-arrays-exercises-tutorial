let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(allColors) {
	// Your code here
	let htmlList = '';

    for (let color = 0; color < allColors.length; color++){
		if (allColors[color].sexy){
		htmlList += '<li>' + allColors[color].label + '</li>'
		}
	}
	
    return htmlList;
}

function filterColors() {
	// Your code here
	return allColors.filter(function(type){
		return type.sexy;
	})
}

function generateHTMLFromArray(array) {
	
	let filteredOptions = filterColors();
	let LIs = generateLI(filteredOptions);

	let htmlString = '<ul>';
	htmlString += LIs;
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));
